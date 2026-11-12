// Content for the Ekatm Product Data Management (PDM) module page.
// Edit text here, not in the page markup.
import { heroSlides } from './ekatm-erp';

// Product screenshots in the hero carousel. These are the Ekatm ERP screens
// for now: swap in PDM screens when they are ready.
export const pdmSlides = heroSlides;

export const hero = {
  title: 'Product Data Management for',
  titleAccent: 'Manufacturing',
  text: 'Connect product engineering with manufacturing. Ekatm brings product definition, BOMs, processes, routings, machines, production lines, quality parameters and costing together in one connected ERP environment.',
};

export const workflow = {
  eyebrow: 'Workflow',
  title: 'Define What the Product Is—',
  titleBreak: 'and How It Will Be Manufactured.',
  text: 'Product engineering does not stop with an item number or a drawing. Manufacturing needs the product structure, process sequence, machines and lines, quality parameters and the cost created by the engineered definition.',
  // In flow order. Shown as two rows of five on desktop.
  steps: [
    { label: 'Product', icon: 'cube' },
    { label: 'BOM', icon: 'tree' },
    { label: 'Process', icon: 'process' },
    { label: 'Routing', icon: 'route' },
    { label: 'Machine', icon: 'gear' },
    { label: 'Line', icon: 'line' },
    { label: 'Quality', icon: 'check' },
    { label: 'Costing', icon: 'calculator' },
    { label: 'MRP', icon: 'analytics' },
    { label: 'Production', icon: 'cubes' },
  ],
};

export const capabilities = {
  eyebrow: 'Capabilities',
  title: 'Everything Manufacturing',
  titleBreak: 'Needs to Define the Product',
  text: 'A connected engineering foundation inside Ekatm ERP.',
  items: [
    {
      icon: 'cube', title: 'Product & Item Definition',
      text: 'Build structured product definitions for manufactured and purchased items.',
      points: ['Central Item Master', 'Technical product specifications', 'Classification and grouping', 'UOM and UOM conversion', 'Customer-specific item relationships', 'Engineering drawing number'],
    },
    {
      icon: 'files', title: 'Engineering Documents',
      text: 'Keep engineering drawings and related documents connected to the product.',
      points: ['Drawing/file storage', 'All file formats', 'Attachments on masters', 'Access for relevant approvers, vendors, QC and production'],
    },
    {
      icon: 'tree', title: 'BOM Engineering',
      text: 'Build and control product structures from components to complete assemblies.',
      points: ['Multi-level and multiple BOMs', 'Revision and effective-date control', 'Alternate and substitute components', 'Scrap and process loss', 'Batch-size quantities', 'Co-products/by-products', 'Phantom and subassembly structures'],
    },
    {
      icon: 'process', title: 'Process & Routing Engineering',
      text: 'Define how the product will be manufactured—not only what it contains.',
      points: ['Manufacturing routing', 'Multiple routings', 'Item Process: BOM + routing sequence', 'Machine groups and individual machines', 'Production lines and alternatives', 'Setup, run, labour, queue and machine time', 'Operation, labour and machine costing'],
    },
    {
      icon: 'shield', title: 'Engineering-Driven Quality',
      text: 'Define quality requirements as part of the product and manufacturing definition.',
      points: ['Component, semi-finished and finished-product QC parameters', 'Operation-specific QC parameters', 'Central QC Parameter Master', 'QC integration with product/process execution'],
    },
    {
      icon: 'building', title: 'Plant-Specific Engineering',
      text: 'Reflect manufacturing differences from one plant to another.',
      points: ['Plant-specific product definition', 'Lead time, machines and operation times', 'Plant-level stock', 'Plant-level transaction release', 'Plant-level user authority'],
    },
  ],
};

export const changes = {
  title: 'Control Engineering Changes',
  titleBreak: 'Before They Reach the Shop Floor',
  text: 'Engineering changes need controlled approval, traceability and a defined point of effect.',
  items: [
    { title: 'Engineering Change Note', text: 'Track engineering changes.' },
    { title: 'Approval Workflow', text: 'Route changes through controlled approval.' },
    { title: 'Revision Control', text: 'Maintain engineering revisions.' },
    { title: 'Effective Date', text: 'Define when a change becomes applicable.' },
    { title: 'Impact Tracking', text: 'Record impact on drawings, BOM, routing/process and QC-related engineering.' },
    { title: 'Audit Traceability', text: 'Track who changed what, when, who approved and when effective.' },
  ],
  highlight: {
    title: 'Protect Existing Production During Engineering Changes',
    paragraphs: [
      'When a new engineering change becomes effective, existing production orders can retain their applicable/current engineering version.',
      'This supports a controlled transition to the new engineering definition while preserving engineering history and revision traceability.',
    ],
  },
};

export const costing = {
  title: 'Engineering-Based Product Costing',
  text: 'Connect product structure and manufacturing process to product cost.',
  items: [
    { icon: 'layers', title: 'BOM Costing', text: 'Product cost derives from the BOM definition.' },
    { icon: 'route', title: 'Routing Costing', text: 'Product cost derives from routing/process data.' },
    { icon: 'calculator', title: 'Integrated Cost', text: 'BOM + routing data contribute to the engineered product cost.' },
  ],
};

export const execution = {
  title: 'Engineering Data That Moves into Execution',
  text: 'Ekatm connects engineering definitions to the operational ERP processes that depend on them.',
  items: [
    { icon: 'analytics', title: 'MRP', text: 'Engineering definitions feed material requirements planning.' },
    { icon: 'line', title: 'Production', text: 'Engineering definitions feed production execution.' },
    { icon: 'shield', title: 'Quality', text: 'QC definitions are integrated into product and process execution.' },
  ],
};

export const why = {
  title: 'Why Ekatm PDM?',
  text: 'The value is in the connected engineering model—not simply the number of features.',
  items: [
    { icon: 'process', title: 'Connected Engineering-to-Production', text: 'Product, BOM, process, routing, machines, lines, quality and costing connect with MRP and production.' },
    { icon: 'change', title: 'Controlled Engineering Changes', text: 'ECN combines approval, revision, effective date and impact tracking.' },
    { icon: 'line', title: 'Engineering Built for Manufacturing', text: 'The model includes machines, machine groups, production lines, operation times and manufacturing costs.' },
    { icon: 'pin', title: 'Plant-Aware Definition', text: 'Engineering and execution can reflect differences between plants.' },
    { icon: 'shield', title: 'Engineering-Driven Quality & Costing', text: 'Quality parameters and product costs are connected to engineered product/process definitions.' },
    { icon: 'history', title: 'Traceability', text: 'Engineering changes and revisions retain an auditable history.' },
  ],
};

// Only the first answer is in the design; the others are drafts written from
// the page text above, for OM to review.
export const faqs = [
  {
    q: 'What is Product Data Management (PDM)?',
    a: 'PDM is the structured management of product and engineering information such as item definitions, specifications, drawings, BOMs, processes, routings and engineering changes. In Ekatm, these definitions are connected directly to manufacturing, MRP, quality and costing.',
  },
  {
    q: 'What does Ekatm PDM include?',
    a: 'Item definition, engineering documents, BOM engineering, process and routing engineering, engineering-driven quality, plant-specific engineering, engineering change control and engineering-based product costing.',
  },
  {
    q: 'Does Ekatm support multi-level BOMs?',
    a: 'Yes. Ekatm supports multi-level and multiple BOMs, with revision and effective-date control, alternate and substitute components, scrap and process loss, co-products/by-products and phantom or subassembly structures.',
  },
  {
    q: 'Does Ekatm support Engineering Change Notes?',
    a: 'Yes. An Engineering Change Note brings together approval workflow, revision control, effective date and impact tracking on drawings, BOM, routing/process and QC-related engineering.',
  },
  {
    q: 'Can engineering changes affect existing production orders?',
    a: 'Existing production orders can retain their applicable engineering version when a change becomes effective, so the move to the new definition is controlled and revision history is preserved.',
  },
  {
    q: 'Can Ekatm handle plant-specific engineering?',
    a: 'Yes. Product definition, lead times, machines and operation times can differ by plant, along with plant-level stock, transaction release and user authority.',
  },
  {
    q: 'Is Ekatm PDM integrated with manufacturing?',
    a: 'Yes. Engineering definitions feed MRP and production execution directly, and QC definitions are integrated into product and process execution.',
  },
  {
    q: 'How is product costing connected to engineering?',
    a: 'Product cost is derived from the BOM definition and from routing/process data, so the engineered product cost reflects both materials and operations.',
  },
];
