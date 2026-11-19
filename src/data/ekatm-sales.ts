// Content for the Ekatm Sales Management module page.
// Edit text here, not in the page markup.
import { heroSlides } from './ekatm-erp';

// Product screenshots in the hero carousel. These are the Ekatm ERP screens
// for now: swap in Sales screens when they are ready.
export const salesSlides = heroSlides;

export const hero = {
  title: 'Sales. Controlled from',
  titleAccent: 'Quotation to Revenue.',
  text: 'Connect customers, quotations, controlled pricing, Sales Orders, fulfilment, invoicing and revenue in one connected Sales process.',
};

// Centred paragraph under the hero. `lead` is shown in bold.
export const intro = {
  lead: 'Ekatm Sales',
  text: 'is designed for organizations that need commercial flexibility without losing process control. From customer-specific pricing and quotation configuration to Sales Order scheduling, shipment, invoicing, returns, contracts, commission, warranty and project revenue, Ekatm connects the Sales lifecycle across functions.',
};

export const capabilities = {
  eyebrow: 'Capabilities',
  title: 'Everything Sales Needs to Move',
  titleBreak: 'Business Forward',
  text: 'Connected customer, commercial and fulfilment workflows – built to keep every transaction controlled.',
  items: [
    { icon: 'contact', title: 'Know the Customer', text: 'Maintain customer-specific Item Codes, descriptions, drawings/references and UOM while retaining the Ekatm Item identity.' },
    { icon: 'currency', title: 'Control Commercials', text: 'Use customer or segment Price Lists, quantity slabs, validity, discounts, Credit Terms and Credit Limits to govern Sales transactions.' },
    { icon: 'file-check', title: 'Quote with Confidence', text: 'Build Quotations using Direct Items, Price Lists, Sales Families and Feature/Option configuration, with estimation and controlled approval.' },
    { icon: 'clipboard-check', title: 'Manage the Order', text: 'Use Order Type-driven controls, multi-level approval, credit hold, amendments, schedules and controlled short close.' },
    { icon: 'calendar-check', title: 'Fulfil to Schedule', text: 'Split Sales Orders into quantity/date schedules and execute shipment while tracking ordered, scheduled, shipped and remaining quantities.' },
    { icon: 'document', title: 'Invoice with Control', text: 'Connect shipment to invoicing, E-Invoice/E-Way Bill processing, Sales Returns, Credit Notes and controlled invoice reversal.' },
  ],
};

// Illustrated Order to Cash journey. Images are in public/images/ekatm-sales/.
export const journey = {
  badge: 'Order to Cash Journey',
  title: 'Schedule-led Fulfilment & Billing',
  text: 'From order to invoice – with flexibility to manage multiple shipments and consolidate billing.',
  steps: [
    { image: 'schedule', title: 'Sales Order Schedule', text: 'Plan and schedule your orders' },
    { image: 'pick-list', title: 'Pick List', text: 'Prepare items for fulfilment' },
    { image: 'packing', title: 'Packing / Picking', text: 'Pack orders accurately' },
    { image: 'shipment', title: 'Shipment', text: 'Dispatch goods efficiently' },
    { image: 'invoice', title: 'Invoice', text: 'Generate invoice automatically' },
    { image: 'e-invoice', title: 'E\u2011Invoice / E\u2011Way Bill', text: 'Comply with e\u2011regulations' },
  ],
};

export const customerControl = {
  title: 'Customer & Commercial Control',
  items: [
    {
      icon: 'users',
      title: 'Customer-specific Sales',
      points: [
        'Customer-specific Item Codes can map different customer identities to the same Ekatm Item.',
        'Customer-specific descriptions, drawings/references and UOM can be maintained.',
        'Customer Item Code can be used to search and identify the corresponding Ekatm Item.',
        'Customers can be organized through Sales Category, Territory, Business Segment and large-account grouping.',
      ],
    },
    {
      icon: 'file-check',
      title: 'Commercial Governance',
      points: [
        'Credit Terms can contain multiple payment stages such as advance, delivery and post-delivery milestones.',
        'Customer Credit Terms flow to Sales Orders and Invoice due dates are calculated automatically.',
        'Current-order Credit Limit checks consider existing outstanding plus the current Sales Order.',
        'Customer and segment Price Lists support multiple Items, quantity slabs, validity and discounts.',
      ],
    },
  ],
};

export const quotation = {
  title: 'Quotation Management',
  text: 'Give Sales teams different ways to build the right commercial offer while keeping controlled pricing and approval in place.',
  items: [
    { title: 'Direct Item', text: 'Select a known Item and enter the Unit Rate manually when controlled Price List pricing is not used.' },
    { title: 'Price List', text: 'Select Items from controlled commercial pricing; Price List-derived rates are protected from salesperson editing.' },
    { title: 'Sales Family', text: 'Discover matching Items using Sales Family criteria.' },
    { title: 'Feature & Option Configuration', text: 'Select product options against configured Features, with the configuration retained through Sales Order and Manufacturing where applicable.' },
    { title: 'Estimation', text: 'Calculate cost and selling price using configured margin/profit logic and transfer the calculated price to the quotation.' },
    { title: 'Approval & Revision', text: 'Use configurable approval, preserve quotation revisions and progressively convert approved revisions into Sales Orders.' },
  ],
};

export const orderControl = {
  title: 'Sales Order Control',
  items: [
    { icon: 'sliders', title: 'Order Type Governance', text: 'Configure approvals, commercial terms, Customer PO requirements, quotation linkage, schedules, shipment/invoice behaviour, warranty, project applicability and related Sales rules.' },
    { icon: 'shield-alert', title: 'Credit Hold', text: 'Credit Limit checks can place a Sales Order under credit control, with approval required to release it.' },
    { icon: 'approval', title: 'Multi-Level Approval', text: 'Use configurable value-based and hierarchy-based Sales Order approval according to the Order Type and organizational context.' },
    { icon: 'file-edit', title: 'Controlled Amendment', text: 'Approved Sales Orders can be amended through a controlled process with reapproval and history.' },
    { icon: 'calendar', title: 'Multiple Schedules', text: 'Split order quantities across delivery schedules with independent dates and controlled quantity totals.' },
    { icon: 'check', title: 'Short Close', text: 'Close full or partial unfulfilled quantities with a mandatory reason and approval, preventing further shipment/invoice against the closed balance.' },
  ],
};

export const continuity = {
  title: 'Contracts, Returns & Commercial Continuity',
  items: [
    { icon: 'file-edit', title: 'Customer Contracts', text: 'Customer Contracts can control Items, rates, quantity slabs and validity. Multiple Sales Orders can progressively consume contracted quantities until the available balance is exhausted.' },
    { icon: 'return', title: 'Sales Returns', text: 'Invoice-linked Sales Returns preserve the relationship to original Sales documents and can validate batch, serial and packet/box identity before quality-controlled receipt and Credit Note.' },
  ],
};

export const beyond = {
  title: 'Beyond the Sales Order',
  items: [
    { icon: 'commission', title: 'Sales Commission', text: 'Manage multi-recipient, event-based commission with configurable calculation bases, allocation, preparation, approval and Finance posting.' },
    { icon: 'shield', title: 'Warranty Continuity', text: 'Generate Sales-linked Warranty records with configurable commencement based on Invoice, Installation or Sign-off and continue the relationship into Service.' },
    { icon: 'factory', title: 'Customer Material Processing', text: 'Process customer-owned material through a Subcontracting Sales Order, linked Manufacturing Order, consumption, output, return and processing-charge billing.' },
    { icon: 'chart', title: 'Project Revenue', text: 'Link Sales Orders to Workbench Projects so Sales Order value contributes to Projected Income and posted Invoice value contributes to Actual Income.' },
    { icon: 'calendar-clock', title: 'Periodic Resource Billing', text: 'Use Workbench Timesheet hours and agreed Sales Order resource rates to generate periodic invoices with supporting detail.' },
    { icon: 'office', title: 'Inter-company Sales', text: 'Sales in one Ekatm entity can automatically create the corresponding Purchase Order in the buying Ekatm entity, with both sides continuing through their normal processes.' },
  ],
};

export const konnect = {
  title: 'Customer Collaboration with EkatmKonnect',
  text: 'Authorized customers can access selected activities requiring customer input, Sales Order status, Service Desk ticket status, customer ledger, complaints and document exchange through EkatmKonnect.',
  // The design repeats the section title on this box; its points are about territories.
  boxTitle: 'Sales Territories & Responsibility',
  points: [
    'Hierarchical Sales Territories support planning and management.',
    'Customers can be assigned to Territories for Sales planning and achievement.',
    'Sales Executive responsibility can span multiple Territories and Customers.',
    'Historical Sales and achievement remain associated with the original responsibility when Territory or Sales Executive responsibility changes.',
    'Sales planning and reporting can use Sales Family, Business Segment and large-account groupings.',
  ],
};

// FAQ groups. The first `faqVisible` groups show; the rest sit behind "Read more".
export const faqVisible = 5;
export const faqGroups: { title: string; items: { q: string; a: string }[] }[] = [
  { title: 'Sales Overview & Process', items: [
    { q: 'What does Ekatm Sales cover?', a: 'Ekatm Sales covers the full commercial lifecycle: customers, price lists, quotations, Sales Orders, schedules, shipment, invoicing, E-Invoice/E-Way Bill, returns, contracts, commission, warranty and project revenue.' },
    { q: 'What is the overall Sales process in Ekatm?', a: 'A typical flow runs from Quotation to Sales Order, Sales Order Schedule, Pick List, Packing, Shipment and Invoice, followed by E-Invoice/E-Way Bill processing. Each step updates the remaining quantities on the order.' },
    { q: 'Can Ekatm Sales be used without a quotation?', a: 'Yes. Whether a quotation is required is controlled by the Order Type, so some orders can be created directly while others must be linked to an approved quotation.' },
    { q: 'Can a Sales Order be created directly for a known Item?', a: 'Yes. A known Item can be selected directly, with the rate entered manually or taken from the applicable Price List.' },
    { q: 'Does Ekatm Sales support configuration-driven processes?', a: 'Yes. Order Types define approvals, commercial terms, Customer PO requirements, quotation linkage, schedules, shipment and invoice behaviour, warranty and project applicability.' },
    { q: 'Can Sales processes differ by Order Type?', a: 'Yes. Each Order Type carries its own rules, so domestic, export, project, service or subcontracting sales can follow different processes in the same system.' },
  ] },
  { title: 'Customer, Territory & Sales Responsibility', items: [
    { q: 'Can customers be grouped for planning and reporting?', a: 'Yes. Customers can be organized by Sales Category, Territory, Business Segment and large-account grouping.' },
    { q: 'Does Ekatm support hierarchical Sales Territories?', a: 'Yes. Territories can be arranged in a hierarchy, customers assigned to them, and Sales Executive responsibility can span multiple Territories and Customers.' },
    { q: 'What happens to past sales when responsibility changes?', a: 'Historical Sales and achievement stay with the original responsibility, so reports remain accurate when a Territory or Sales Executive assignment changes.' },
  ] },
  { title: 'Customer-specific Item Information', items: [
    { q: 'Can a customer use its own item codes?', a: 'Yes. Customer-specific Item Codes map the customer’s identity for a product to the same Ekatm Item.' },
    { q: 'Can descriptions, drawings and UOM differ by customer?', a: 'Yes. Customer-specific descriptions, drawings/references and UOM can be maintained while the Ekatm Item identity is retained.' },
    { q: 'Can I search by the customer’s item code?', a: 'Yes. The Customer Item Code can be used to search for and identify the corresponding Ekatm Item.' },
  ] },
  { title: 'Credit Terms & Credit Control', items: [
    { q: 'Can Credit Terms have more than one payment stage?', a: 'Yes. Credit Terms can include multiple stages such as advance, delivery and post-delivery milestones.' },
    { q: 'How are invoice due dates calculated?', a: 'Customer Credit Terms flow to the Sales Order, and Invoice due dates are calculated automatically from them.' },
    { q: 'How does the Credit Limit check work?', a: 'The check considers the customer’s existing outstanding plus the current Sales Order. If the limit is exceeded, the order is placed on credit hold until it is approved for release.' },
  ] },
  { title: 'Price Lists & Pricing', items: [
    { q: 'Can prices differ by customer or segment?', a: 'Yes. Customer and segment Price Lists support multiple Items, quantity slabs, validity periods and discounts.' },
    { q: 'Can salespeople change Price List rates?', a: 'No. Rates derived from a Price List are protected from salesperson editing, keeping commercial pricing controlled.' },
  ] },
  { title: 'Quotation Management', items: [
    { q: 'What ways are there to build a quotation?', a: 'Quotations can use Direct Items, Price Lists, Sales Family search and Feature/Option configuration, with estimation where needed.' },
    { q: 'Are quotation revisions kept?', a: 'Yes. Revisions are preserved, and approved revisions can be progressively converted into Sales Orders.' },
    { q: 'Can Ekatm estimate a selling price?', a: 'Yes. Estimation calculates cost and selling price using configured margin/profit logic and transfers the price to the quotation.' },
  ] },
  { title: 'Product Configuration', items: [
    { q: 'Can customers choose product options?', a: 'Yes. Product options are selected against configured Features, and the configuration is carried through the Sales Order into Manufacturing where applicable.' },
  ] },
  { title: 'Sales Order Approval & Amendment', items: [
    { q: 'Can Sales Order approval depend on value?', a: 'Yes. Approval can be value-based and hierarchy-based, according to the Order Type and organizational context.' },
    { q: 'Can an approved Sales Order be changed?', a: 'Yes, through a controlled amendment with reapproval and a full history of changes.' },
    { q: 'Can unfulfilled quantities be closed?', a: 'Yes. Full or partial balances can be short closed with a mandatory reason and approval, which prevents further shipment or invoicing against them.' },
  ] },
  { title: 'Schedules, Shipment & Invoicing', items: [
    { q: 'Can one Sales Order have several delivery dates?', a: 'Yes. Order quantities can be split across schedules with independent dates and controlled quantity totals.' },
    { q: 'Can one schedule ship in parts?', a: 'Yes. A schedule can be fulfilled through multiple shipments, and each shipment updates the remaining quantity and completion status.' },
    { q: 'Can several shipments be billed on one invoice?', a: 'Yes. Multiple shipments can be consolidated into one Invoice where the validated billing conditions are met.' },
  ] },
  { title: 'E-Invoice & E-Way Bill', items: [
    { q: 'Does Ekatm handle E-Invoice and E-Way Bill?', a: 'Yes. E-Invoice and E-Way Bill processing is connected to invoicing, and invoice printability can be held until statutory processing succeeds.' },
  ] },
  { title: 'Customer Contracts', items: [
    { q: 'How do Customer Contracts work?', a: 'A contract controls Items, rates, quantity slabs and validity. Multiple Sales Orders can consume the contracted quantity until the balance is exhausted.' },
  ] },
  { title: 'Sales Returns & Credit Notes', items: [
    { q: 'Are Sales Returns linked to the original invoice?', a: 'Yes. Invoice-linked returns keep the relationship to the original Sales documents and can validate batch, serial and packet/box identity before quality-controlled receipt and Credit Note.' },
    { q: 'Can an invoice be reversed?', a: 'Yes, through a controlled invoice reversal process.' },
  ] },
  { title: 'Sales Commission', items: [
    { q: 'Can commission go to more than one person?', a: 'Yes. Commission can be multi-recipient and event-based, with configurable calculation bases, allocation, approval and Finance posting.' },
  ] },
  { title: 'Warranty', items: [
    { q: 'When does a warranty start?', a: 'Warranty commencement is configurable and can be based on Invoice, Installation or Sign-off. The warranty record then continues into Service.' },
  ] },
  { title: 'Customer Material & Subcontracting', items: [
    { q: 'Can we process material supplied by the customer?', a: 'Yes. A Subcontracting Sales Order links to a Manufacturing Order and tracks consumption, output, return and processing-charge billing.' },
  ] },
  { title: 'Projects & Resource Billing', items: [
    { q: 'Can Sales Orders be linked to projects?', a: 'Yes. Sales Orders linked to Workbench Projects contribute to Projected Income, and posted Invoices contribute to Actual Income.' },
    { q: 'Can we bill for time spent?', a: 'Yes. Workbench Timesheet hours and agreed Sales Order resource rates can generate periodic invoices with supporting detail.' },
  ] },
  { title: 'Inter-company Sales', items: [
    { q: 'How are sales between group companies handled?', a: 'A sale in one Ekatm entity can automatically create the matching Purchase Order in the buying entity, and both sides continue through their normal processes.' },
  ] },
  { title: 'EkatmKonnect Customer Portal', items: [
    { q: 'What can customers see in EkatmKonnect?', a: 'Authorized customers can see Sales Order status, Service Desk ticket status, their ledger and complaints, respond to activities that need their input and exchange documents.' },
  ] },
];
