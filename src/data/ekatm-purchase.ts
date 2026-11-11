// Content for the Ekatm Purchase module page. Edit text here, not in the page markup.
import { heroSlides } from './ekatm-erp';

// Product screenshots shown in every carousel on this page. These are the
// Ekatm ERP screens for now: swap in Purchase screens when they are ready,
// either here (all sections) or per capability via its `slides` field.
export const purchaseSlides = heroSlides;

export const hero = {
  title: 'Connected Purchase',
  titleAccent: 'Management',
  text: 'From purchase planning and supplier sourcing to delivery, quality, invoicing, payment and vendor performance—with business controls throughout the process.',
};

type Icon =
  | 'clipboard' | 'users' | 'mail' | 'split' | 'document' | 'truck' | 'factory' | 'ship'
  | 'box' | 'shield' | 'return' | 'invoice' | 'wallet' | 'chart' | 'bag' | 'bars';

export interface Capability {
  id: string;
  title: string;
  icon: Icon;
  /** one-liner on the overview card */
  summary: string;
  /** blue sub-heading in the detailed section */
  tagline: string;
  body: string;
  enables: string[];
  slides?: typeof heroSlides;
}

export const capabilities: Capability[] = [
  {
    id: 'planning',
    title: 'Purchase Planning & Requirements',
    icon: 'clipboard',
    summary: 'Turn business demand into controlled purchasing action.',
    tagline: 'Turn business demand into controlled purchasing action.',
    body: 'Purchasing in Ekatm starts with the requirement—not with the Purchase Order. Requirements can originate from MRP, inventory policies or business requests and are brought together for the buyer to evaluate before procurement begins. A Purchase Requisition / Indent can carry the required date for each item, allowing procurement to understand not only what is required, but when it is required. MRP can generate purchase requirements automatically, while minimum-stock and reorder requirements can bring replenishment needs into the same purchasing process. Before creating new procurement, buyers can review existing open Purchase Orders against outstanding requirements. This helps distinguish requirements that are already covered from those that still need purchasing action, reducing unnecessary or duplicate procurement.',
    enables: ['Demand-driven purchasing', 'Better timing', 'Reduced duplication', 'Better buyer visibility', 'Controlled procurement initiation'],
  },
  {
    id: 'vendor-management',
    title: 'Vendor Management',
    icon: 'users',
    summary: 'Build a structured relationship between items, vendors and commercial terms.',
    tagline: 'Build a structured relationship between items, vendors and commercial terms.',
    body: 'Ekatm does not treat the vendor as a generic name attached to a Purchase Order. Vendor Item Relationship can define which vendors are associated with an item and support purchasing decisions with vendor-specific commercial information. Vendor Contracts can maintain vendor-specific rates and quantity-break pricing, while additional purchasing terms such as MOQ, lead time, packing, delivery and payment terms can be maintained for the item-vendor relationship. This creates a structured supplier foundation for sourcing, allocation and purchasing execution instead of relying only on buyer memory or manually maintained comparisons.',
    enables: ['Structured item-vendor relationships', 'Vendor-specific commercial terms', 'Quantity-break pricing', 'Supplier shortlisting support'],
  },
  {
    id: 'rfq',
    title: 'RFQ & Vendor Sourcing',
    icon: 'mail',
    summary: 'Move supplier enquiry and quotation collection into a controlled sourcing process.',
    tagline: 'Move supplier enquiry and quotation collection into a controlled sourcing process.',
    body: 'When competitive sourcing is required, Ekatm can take the requirement into an RFQ process and invite multiple vendors. Vendor Item Purchase Group relationships can help create a relevant vendor shortlist rather than approaching suppliers without context. Vendors can respond through EkatmKonnect, while Excel-based responses can also be imported. The response process captures commercial information such as rate, tax, discount and other charges, giving the buyer a structured basis for quotation comparison. The sourcing history remains connected from RFQ through quotation, comparison and vendor selection.',
    enables: ['Multiple-vendor RFQs', 'Digital vendor response', 'Excel response import', 'Structured quotation comparison', 'Landed-cost comparison'],
  },
  {
    id: 'allocation',
    title: 'Vendor Allocation',
    icon: 'split',
    summary: 'Convert sourcing decisions into a controlled distribution of purchase quantities.',
    tagline: 'Convert sourcing decisions into a controlled distribution of purchase quantities.',
    body: 'A requirement does not always need to be awarded to a single supplier. Ekatm supports vendor-share allocation, where a percentage can be maintained for vendors associated with an item. During an MRP run, the configured vendor share can be used to split the requirement. Buyers retain the flexibility to change the proposed allocation based on the actual purchasing situation before orders are placed. This combines a repeatable sourcing policy with practical buyer control.',
    enables: ['Vendor-share based allocation', 'Automatic requirement split', 'Buyer-controlled adjustment', 'MRP-driven allocation'],
  },
  {
    id: 'purchase-orders',
    title: 'Purchase Order Management',
    icon: 'document',
    summary: 'Create Purchase Orders within defined business controls.',
    tagline: 'Create Purchase Orders within defined business controls.',
    body: 'Ekatm supports different purchasing routes, including Purchase Orders against Indents, MRP-driven procurement and controlled direct purchasing. Purchase Order Type Master can determine how a particular purchasing route is handled. Approval workflows can be configured by business context, including organizational level and value. Once approved, a PO can be amended through a controlled process, with the amended PO becoming effective after the configured approval requirements are completed. The result is flexibility for buyers without losing governance over committed purchases.',
    enables: ['Multiple PO creation routes', 'Configurable approval workflow', 'Value-based approval', 'Controlled amendment', 'Audit trail'],
  },
  {
    id: 'delivery',
    title: 'Delivery Schedule & Purchase Execution',
    icon: 'truck',
    summary: 'Manage what is expected, what has arrived and what remains open.',
    tagline: 'Manage what is expected, what has arrived and what remains open.',
    body: 'A Purchase Order is not complete when it is issued. Ekatm supports multiple delivery schedules, including recurring schedules for periodic supply, and tracks ordered, received and pending quantities. Partial receipts can be recorded against a PO, while item-level over-receipt tolerance provides a controlled way to handle acceptable quantity variation. Buyers can identify overdue quantities and pending deliveries through dashboards and automated BI reports or email. When a PO is no longer expected to be fulfilled, short-close and cancellation processes can be handled through configured controls.',
    enables: ['Multiple delivery schedules', 'Partial receipts', 'Over-receipt tolerance', 'Overdue visibility', 'Short close and cancellation'],
  },
  {
    id: 'subcontracting',
    title: 'Subcontracting / Job Work',
    icon: 'factory',
    summary: 'Keep company-owned material and subcontract processing commercially connected.',
    tagline: 'Keep company-owned material and subcontract processing commercially connected.',
    body: 'Ekatm connects subcontract purchasing with manufacturing material movement. Company-owned raw materials or components can be issued to the subcontractor, while the processed or finished material can be received back. Material consumption is recorded separately from the subcontracting charge. A Purchase Order can represent the subcontract charge while the Manufacturing Order handles the material movement and processed-item receipt. This gives the business a clearer relationship between material supplied, processing performed and material received back.',
    enables: ['Material issued to subcontractor', 'Company-owned material at vendor', 'Consumption tracking', 'Processed/finished receipt', 'Separate subcontract charges'],
  },
  {
    id: 'import',
    title: 'Import Purchasing',
    icon: 'ship',
    summary: 'Bring import procurement and additional costs into the purchasing process.',
    tagline: 'Bring import procurement and additional costs into the purchasing process.',
    body: 'Ekatm supports import purchases and the additional cost elements that can arise around an imported material, including freight, insurance, customs and clearing charges. These costs can be loaded into landed cost so that the purchase can be evaluated beyond the basic supplier rate. Import cost information may, however, become available at different stages, so the current process has limitations where final cost information is received later. The capability therefore supports import purchasing while leaving room for further enhancement of the end-to-end import lifecycle.',
    enables: ['Import purchase support', 'Freight and insurance', 'Customs and clearing costs', 'Landed-cost loading'],
  },
  {
    // DRAFT: the design repeats Subcontracting here; this text is ours to review.
    id: 'grn',
    title: 'GRN & Material Receipt',
    icon: 'box',
    summary: 'Turn supplier delivery into controlled inventory receipt and traceability.',
    tagline: 'Turn supplier delivery into controlled inventory receipt and traceability.',
    body: 'In Ekatm, a Goods Receipt Note is recorded against the Purchase Order and its delivery schedule, so every receipt is checked against what was ordered and what is still pending. Partial deliveries update the open quantity on the PO, and item-level tolerance controls how much variation can be accepted. Received material can be routed to inspection where quality checks apply, before it becomes available stock. Batch and serial details captured at receipt keep the material traceable from the supplier through inventory, and the GRN becomes the link between the Purchase Order and the Purchase Invoice.',
    enables: ['Receipt against PO and schedule', 'Partial receipt handling', 'Inspection routing', 'Batch and serial traceability', 'PO-GRN-invoice linkage'],
  },
  {
    id: 'quality',
    title: 'Purchase Quality',
    icon: 'shield',
    summary: 'Make incoming quality part of purchasing—not a separate afterthought.',
    tagline: 'Make incoming quality part of purchasing—not a separate afterthought.',
    body: 'Ekatm can determine whether purchased material requires inspection at item and plant level. This allows the same item to have different inspection requirements in different plants or purchasing contexts. Quality parameters can be defined at the Item Purchase Group level, while the actual specification can be maintained for the item. For example, a Steel Bar purchase group can define Diameter as a quality parameter, while an individual item can carry a specification such as 32 ± 0.03 mm. Inspection results remain connected with the received material, allowing partial acceptance or rejection, quality hold and rejection reasons. Supplier quality performance can then contribute to Vendor Performance analysis.',
    enables: ['Item and plant-level inspection control', 'Structured quality parameters', 'Item-specific specifications', 'Partial acceptance/rejection', 'Supplier quality visibility'],
  },
  {
    id: 'returns',
    title: 'Purchase Return',
    icon: 'return',
    summary: 'Handle rejected or unwanted material without breaking the purchase-to-finance trail.',
    tagline: 'Handle rejected or unwanted material without breaking the purchase-to-finance trail.',
    body: 'When received material is rejected, Ekatm can connect the quality disposition to a Purchase Return. The return can be processed with or without physical material movement. This is particularly useful where physical return may not be practical—for example, when the material is perishable or transport costs are disproportionately high. In such cases, the financial adjustment can still be handled through the purchase return/debit-note process. The resulting purchase and tax impact is carried into finance rather than being handled as an isolated manual adjustment.',
    enables: ['Quality-linked purchase return', 'Physical or non-physical return', 'Debit-note support', 'Finance and tax adjustment'],
  },
  {
    id: 'invoice',
    title: 'Purchase Invoice & Finance Integration',
    icon: 'invoice',
    summary: 'Connect purchase documents to Finance and vendor payables.',
    tagline: 'Connect purchasing documents to the financial obligation created by the purchase.',
    body: 'Ekatm connects the purchasing chain from PO through GRN to Purchase Invoice. Commercial information such as PO rate, tax and discount is carried into invoice processing, while freight and other applicable charges can also be handled. The system can identify rate differences between the PO and invoice and supports configurable tax treatment, including recoverable and non-recoverable ITC and tax embedded in purchase rates. Invoice posting creates the corresponding vendor payable in Finance, keeping the purchasing and financial records connected.',
    enables: ['PO-GRN-Invoice linkage', 'Rate difference visibility', 'Configurable tax treatment', 'Additional charges', 'Vendor payable integration'],
  },
  {
    id: 'payments',
    title: 'Vendor Payment Management',
    icon: 'wallet',
    summary: 'Move from invoice due dates to a controlled payment decision.',
    tagline: 'Move from invoice due dates to a controlled payment decision.',
    body: 'Ekatm provides Finance users with visibility of due vendor payment lines and allows the amount available for payment on a particular day to be defined. The system can help select invoices using FIFO, while the payment proposal can be sent through the configured approval workflow. Approvers can review payment context including due date and the related GRN, PO and Indent details. This connects the payment decision back to the original purchasing transaction rather than treating vendor payment as an isolated finance activity.',
    enables: ['Due-payment visibility', 'Available payment amount', 'FIFO invoice selection', 'Payment approval', 'Purchase-document context'],
  },
  {
    id: 'performance',
    title: 'Vendor Performance Management',
    icon: 'chart',
    summary: 'Measure supplier performance using actual purchasing outcomes.',
    tagline: 'Measure supplier performance using actual purchasing outcomes.',
    body: 'Vendor performance in Ekatm is based on operational purchasing experience rather than a standalone supplier score entered manually. Performance can be evaluated over a selected period using factors such as on-time delivery, quantity fulfillment, purchase price, quality rejection and service level. Analysis can be filtered by vendor, item, plant, branch and purchase group. Historical performance is retained, allowing the organization to build a longer-term view of supplier reliability and purchasing outcomes.',
    enables: ['On-time delivery', 'Quantity fulfilment', 'Purchase price', 'Quality performance', 'Multi-dimensional filtering'],
  },
  {
    id: 'special',
    title: 'Special Purchasing',
    icon: 'bag',
    summary: 'Handle purchasing situations that do not fit a single standard flow.',
    tagline: 'Handle purchasing situations that do not fit a single standard flow.',
    body: 'Real purchasing rarely follows one route. Ekatm supports special purchasing contexts including capital items, services and other non-stock purchases, consumables, recurring requirements and emergency/direct purchases. Service items can be configured as non-stockable where no physical inventory movement is required. Capital-item purchasing and fixed-asset handling are supported within the current scope, while emergency/direct purchasing can still pass through configured approval controls. This allows the purchase function to accommodate different business situations without abandoning governance.',
    enables: ['Capital-item purchasing', 'Service/non-stock purchasing', 'Consumables', 'Emergency/direct purchase', 'Recurring purchasing'],
  },
  {
    id: 'automation',
    title: 'Purchase Automation & Analytics',
    icon: 'bars',
    summary: 'Give buyers clear visibility into every transaction.',
    tagline: 'Give buyers visibility without making them manually check every transaction.',
    body: 'Ekatm uses automation to connect planning, purchasing and exception visibility. MRP can generate Purchase Requisitions and Manufacturing Orders, apply configured vendor relationships and vendor shares, and support procurement from actual material requirements. Recurring purchasing can use recurrence schedules, while BI reports can be scheduled and emailed. Automated visibility can highlight overdue purchase quantities and other purchasing exceptions. The result is a purchasing operation where routine requirements can move systematically while buyers and managers retain visibility of situations that need attention.',
    enables: ['MRP-driven automation', 'Recurring purchase schedules', 'Exception visibility', 'Scheduled BI reports', 'Email/dashboard notifications'],
  },
];

export const why = {
  eyebrow: 'Why Ekatm Purchase',
  title: 'Control every stage of purchasing.',
  text: 'Bring purchasing activities together with structured controls, connected workflows and better visibility across procurement.',
  points: [
    { icon: 'route', title: 'Controlled Procure-to-Pay', text: 'Connect requirements, sourcing, orders, receipts, invoices and payments with defined controls and traceability.' },
    { icon: 'sliders', title: 'MRP-Linked Purchasing', text: 'Generate purchase requirements from MRP and replenishment needs, with visibility of open PO coverage.' },
    { icon: 'trend', title: 'Supplier Performance Visibility', text: 'Review on-time delivery, quantity fulfillment, purchase price, quality rejection and service level.' },
    { icon: 'link', title: 'Connected with Finance', text: 'Link Purchase Orders, GRNs, invoices and vendor payments to maintain purchasing and financial traceability.' },
  ],
};

// FAQ, grouped by capability as in the design. Only the first answer is in
// the design; the rest are drafts written from the capability text above.
export const faqGroups: { title: string; items: { q: string; a: string }[] }[] = [
  { title: 'Purchase Planning & Requirements', items: [
    { q: 'Can Ekatm create Purchase Requisitions / Purchase Indents?', a: 'Yes. Ekatm supports Purchase Requisition / Purchase Indent creation with required dates at item level.' },
    { q: 'Can MRP create purchase requirements automatically?', a: 'Yes. MRP can generate purchase requirements automatically, and minimum-stock and reorder needs can be brought into the same purchasing process.' },
    { q: 'How does Ekatm avoid duplicate purchasing?', a: 'Before creating new procurement, buyers can review open Purchase Orders against outstanding requirements to see what is already covered.' },
  ] },
  { title: 'Vendor Management', items: [
    { q: 'Can I maintain vendor-specific rates for an item?', a: 'Yes. Vendor Contracts hold vendor-specific rates and quantity-break pricing, along with terms such as MOQ, lead time, packing, delivery and payment terms.' },
  ] },
  { title: 'RFQ & Vendor Sourcing', items: [
    { q: 'How do vendors respond to an RFQ?', a: 'Vendors can respond through EkatmKonnect, or their Excel-based responses can be imported into Ekatm.' },
    { q: 'Can quotations be compared side by side?', a: 'Yes. Rate, tax, discount and other charges are captured for each response, giving buyers a structured basis for quotation and landed-cost comparison.' },
  ] },
  { title: 'Vendor Allocation', items: [
    { q: 'Can one requirement be split across several vendors?', a: 'Yes. A vendor-share percentage can be maintained per item, and MRP uses it to split the requirement. Buyers can still adjust the proposed allocation before ordering.' },
  ] },
  { title: 'Purchase Order Management', items: [
    { q: 'Can PO approvals depend on value?', a: 'Yes. Approval workflows can be configured by business context, including organizational level and PO value.' },
    { q: 'Can an approved PO be changed?', a: 'Yes, through a controlled amendment. The amended PO becomes effective once the configured approvals are completed.' },
  ] },
  { title: 'Delivery Schedule & Purchase Execution', items: [
    { q: 'Can a PO have multiple delivery dates?', a: 'Yes. Ekatm supports multiple and recurring delivery schedules, and tracks ordered, received and pending quantities for each.' },
    { q: 'How are overdue deliveries flagged?', a: 'Overdue quantities and pending deliveries are visible on dashboards and can be sent as automated BI reports or email.' },
  ] },
  { title: 'Subcontracting / Job Work', items: [
    { q: 'Does Ekatm track material sent to subcontractors?', a: 'Yes. Company-owned material issued to the subcontractor and processed material received back are tracked, with consumption recorded separately from the subcontract charge.' },
  ] },
  { title: 'Import Purchasing', items: [
    { q: 'Can freight, customs and clearing charges be added to the material cost?', a: 'Yes. These costs can be loaded into landed cost so the import purchase is evaluated beyond the basic supplier rate.' },
  ] },
  { title: 'GRN & Material Receipt', items: [
    { q: 'Can partial deliveries be received against a PO?', a: 'Yes. Partial receipts are recorded against the PO, and item-level tolerance controls how much over-receipt is accepted.' },
  ] },
  { title: 'Purchase Quality', items: [
    { q: 'Can inspection rules differ by plant?', a: 'Yes. Inspection requirements are set at item and plant level, so the same item can be inspected differently in different plants.' },
    { q: 'Can part of a delivery be accepted?', a: 'Yes. Inspection supports partial acceptance or rejection, quality hold and rejection reasons.' },
  ] },
  { title: 'Purchase Return', items: [
    { q: 'Can a return be raised without sending material back?', a: 'Yes. A Purchase Return can be processed without physical movement, with the financial adjustment handled through the debit-note process.' },
  ] },
  { title: 'Purchase Invoice & Finance Integration', items: [
    { q: 'Does Ekatm flag differences between PO rate and invoice rate?', a: 'Yes. Rate differences between the PO and invoice are identified, and invoice posting creates the vendor payable in Finance.' },
    { q: 'How is GST input tax credit handled?', a: 'Tax treatment is configurable, including recoverable and non-recoverable ITC and tax embedded in purchase rates.' },
  ] },
  { title: 'Vendor Payment Management', items: [
    { q: 'Can vendor payments go through approval?', a: 'Yes. Payment proposals follow the configured approval workflow, and approvers see the due date and related GRN, PO and Indent details.' },
  ] },
  { title: 'Vendor Performance Management', items: [
    { q: 'How is vendor performance measured?', a: 'From actual purchasing outcomes: on-time delivery, quantity fulfillment, purchase price, quality rejection and service level, over a period you choose.' },
  ] },
  { title: 'Special Purchasing', items: [
    { q: 'Can services and capital items be purchased in Ekatm?', a: 'Yes. Service items can be non-stockable, and capital-item purchasing with fixed-asset handling is supported.' },
  ] },
  { title: 'Purchase Automation & Analytics', items: [
    { q: 'Can purchasing reports be emailed automatically?', a: 'Yes. BI reports can be scheduled and emailed, and automated alerts highlight overdue quantities and other exceptions.' },
  ] },
];
