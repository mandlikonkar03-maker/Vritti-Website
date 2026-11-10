// Validation and delivery for "Request a Free Demo" submissions.
import nodemailer from 'nodemailer';
import { appendFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

export interface DemoRequest {
  name: string;
  email: string;
  location: string;
  mobile: string;
  message: string;
  product: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9 ()-]{7,20}$/;

const clean = (v: unknown, max: number) =>
  (typeof v === 'string' ? v : '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').trim().slice(0, max);

export function parseDemoRequest(input: Record<string, unknown>) {
  const data: DemoRequest = {
    name: clean(input.name, 120),
    email: clean(input.email, 200),
    location: clean(input.location, 160),
    mobile: clean(input.mobile, 20),
    message: clean(input.message, 3000),
    product: clean(input.product, 60) || 'Ekatm ERP',
  };
  const errors: Record<string, string> = {};
  if (!data.name) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(data.email)) errors.email = 'Please enter a valid email address.';
  if (!data.location) errors.location = 'Please enter your location.';
  if (!PHONE_RE.test(data.mobile)) errors.mobile = 'Please enter a valid mobile number.';
  return { data, errors };
}

const env = (key: string) => process.env[key] ?? import.meta.env[key];

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

/** Emails the request (if SMTP is configured) and/or appends it to a log file. */
export async function deliverDemoRequest(req: DemoRequest, meta: { ip: string; userAgent: string }) {
  const record = { ...req, receivedAt: new Date().toISOString(), ...meta };
  let delivered = false;

  const logPath = env('DEMO_REQUEST_LOG');
  if (logPath) {
    await mkdir(dirname(logPath), { recursive: true });
    await appendFile(logPath, JSON.stringify(record) + '\n', 'utf8');
    delivered = true;
  }

  const to = env('DEMO_REQUEST_TO') || 'enquiry@vritti.co.in';
  const host = env('SMTP_HOST');
  if (to && host) {
    const port = Number(env('SMTP_PORT') ?? 465);
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: String(env('SMTP_SECURE') ?? port === 465) === 'true',
      auth: env('SMTP_USER') ? { user: env('SMTP_USER'), pass: env('SMTP_PASS') } : undefined,
    });
    const rows: [string, string][] = [
      ['Name', req.name],
      ['Email', req.email],
      ['Location', req.location],
      ['Mobile', req.mobile],
      ['Product', req.product],
      ['Message', req.message || '—'],
      ['Received', record.receivedAt],
    ];
    await transporter.sendMail({
      from: env('SMTP_FROM') || env('SMTP_USER'),
      to,
      replyTo: `"${req.name.replace(/"/g, '')}" <${req.email}>`,
      subject: `New ${req.product} demo request – ${req.name}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
      html: `<h2 style="font-family:sans-serif">New ${escapeHtml(req.product)} demo request</h2>
        <table style="font-family:sans-serif;border-collapse:collapse">${rows
          .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#555;vertical-align:top"><b>${k}</b></td>
            <td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`)
          .join('')}</table>`,
    });
    delivered = true;
  }

  if (!delivered) {
    // Nothing configured yet: keep the request visible in the server logs.
    console.warn('[demo-request] No SMTP or log file configured. Request received:', record);
  }
}
