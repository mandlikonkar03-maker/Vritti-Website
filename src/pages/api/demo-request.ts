import type { APIRoute } from 'astro';
import { deliverDemoRequest, parseDemoRequest } from '../../lib/demo-request';

export const prerender = false;

// Simple per-IP rate limit (per server instance): 5 requests / 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let input: Record<string, unknown>;
  try {
    const type = request.headers.get('content-type') ?? '';
    input = type.includes('application/json')
      ? await request.json()
      : Object.fromEntries(await request.formData());
  } catch {
    return json(400, { message: 'Invalid request.' });
  }

  // Honeypot filled in: pretend success so bots learn nothing.
  if (typeof input.website === 'string' && input.website.trim()) {
    return json(200, { ok: true, message: 'Thank you! Our team will contact you shortly.' });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || clientAddress || 'unknown';
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    return json(429, { message: 'Too many requests. Please try again in a few minutes.' });
  }

  const { data, errors } = parseDemoRequest(input);
  if (Object.keys(errors).length) {
    return json(422, { message: 'Please correct the highlighted fields.', errors });
  }

  try {
    await deliverDemoRequest(data, { ip, userAgent: request.headers.get('user-agent') ?? '' });
  } catch (err) {
    console.error('[demo-request] delivery failed', err);
    return json(500, { message: 'Sorry, we could not send your request right now. Please try again later.' });
  }

  recent.push(now);
  hits.set(ip, recent);
  return json(200, {
    ok: true,
    message: 'Thank you! Our team will contact you shortly to schedule your demo.',
  });
};
