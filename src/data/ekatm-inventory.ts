// Content for the Ekatm Inventory Management module page.
// Edit text here, not in the page markup.
import { heroSlides } from './ekatm-erp';

// Product screenshots in the hero carousel. These are the Ekatm ERP screens
// for now: swap in Inventory screens when they are ready.
export const inventorySlides = heroSlides;

export const hero = {
  title: 'Inventory that moves with your business.',
  titleAccent: 'Control every step.',
  text: 'Connect receiving, quality, put-away, stock allocation, picking, packing and dispatch. Ekatm brings physical warehouse execution and digital inventory control together through HHD-enabled scanning and transaction-level validation.',
};

// Card grid: icon + title on one row, text, then small tags.
export const capabilities = {
  eyebrow: 'Inventory Capabilities',
  title: 'Everything Inventory Needs to',
  titleBreak: 'Execute with Control.',
  text: 'A connected inventory foundation covering receipt, quality, storage, movement, picking, packing, loading and physical inventory.',
  items: [
    { icon: 'box', title: 'Material Receipt & GRN', text: 'Receive material through desktop or HHD and connect the receipt to the purchasing transaction.', tags: ['GRN', 'HHD'] },
    { icon: 'inv-scan', title: 'AI-enabled Vendor Labels', text: 'Interpret configured vendor labels with OCR + AI and map vendor information into Ekatm receiving data.', tags: ['OCR', 'AI'] },
    { icon: 'inv-clipboard-check', title: 'Inward Quality Check', text: 'Handle regular and packet-level quality checking, QC updates and rejection-related claims.', tags: ['QC', 'Packet QC'] },
    { icon: 'pin', title: 'Intelligent Put-away', text: 'Suggest locations using configurable item, warehouse, location, batch, capacity and movement-related parameters.', tags: ['Put-away', 'Rules'] },
    { icon: 'cubes', title: 'Stock Management', text: 'Maintain detailed stock identity across item, warehouse, location, batch, FIFO date and QC status.', tags: ['Batch', 'FIFO'] },
    { icon: 'split', title: 'Stock Allocation', text: 'Deliberately allocate selected batch and warehouse stock to Sales Orders or Manufacturing Orders.', tags: ['Allocation', 'Demand'] },
    { icon: 'inv-qr', title: 'Guided HHD Picking', text: 'Guide operators through picking and validate item, batch, location, packet and quantity.', tags: ['HHD', 'Validation'] },
    { icon: 'cube', title: 'Hierarchical Packing', text: 'Build packet, inner-carton and outer-carton packaging hierarchy with weighing and label support.', tags: ['Packing', 'Cartons'] },
    { icon: 'truck', title: 'Route-aware Loading', text: 'Scan cartons or packets to vehicles, validate order and route, and follow the loading sequence.', tags: ['Loading', 'Route'] },
    { icon: 'clipboard', title: 'Physical Inventory', text: 'Use HHD scanning to compare physical stock with system stock and support perpetual inventory processes.', tags: ['PI', 'Bin Accuracy'] },
    { icon: 'inv-move', title: 'Material Movement', text: 'Support location changes, inter-warehouse transfer orders, reshuffle put-away and stock conversion processes.', tags: ['Movement', 'Transfer'] },
    { icon: 'inv-undo', title: 'Gate Pass & Returns', text: 'Manage outward gate passes, returnable inward movement, purchase returns and material return processes.', tags: ['OGP', 'Returns'] },
  ],
};

export const connected = {
  eyebrow: 'Connected Inventory',
  title: 'From Supplier Receipt to Customer Dispatch, Keep the Physical and Digital Inventory in Sync.',
  text: 'Inventory is more than a stock balance. Material arrives in packets, moves into locations, changes quality status, gets allocated to demand, is picked, packed and finally loaded into a vehicle. Ekatm connects these physical activities with the inventory transaction.',
  steps: ['Receive', 'Quality', 'Put-away', 'Allocate', 'Pick', 'Pack', 'Load', 'Count'],
  note: {
    title: 'Business outcome',
    text: 'A connected physical inventory flow in which material identification, location, batch, quality, picking, packing and loading are controlled as part of the inventory process.',
  },
};

export const receiving = {
  eyebrow: 'AI-enabled Receiving',
  title: 'Turn Configured Vendor Labels into Controlled GRN Data.',
  text: 'Supplier labels vary from vendor to vendor. Ekatm supports vendor-specific label configurations. Once the vendor is selected in the GRN header, OCR + AI interprets the configured label format and maps vendor information to Ekatm terms.',
  note: {
    title: 'Confirmed flow',
    text: 'Vendor selected in GRN → configured label interpretation → OCR + AI mapping → Ekatm item identification → PO validation → progressive packet-level GRN.',
  },
  panel: {
    title: 'Vendor Label Information',
    points: ['Vendor Item Code', 'Vendor Batch', 'Quantity', 'Manufacturing Date', 'Expiry Date', 'PO Number, when present', 'Vendor Part Number'],
    footLabel: 'Control:',
    foot: 'If the mapped Ekatm item does not match the PO item, Ekatm rejects the scan.',
  },
};

export const putAway = {
  eyebrow: 'Warehouse & Put-away',
  title: 'Put Material Where It Belongs⁠—⁠With Configurable Rules.',
  text: 'Ekatm can suggest a location using multiple configurable parameters rather than treating every put-away as a simple manual location choice.',
  items: [
    { icon: 'inv-box-search', title: 'Item & Item Class', text: 'Use item and item-class context when determining an appropriate location.' },
    { icon: 'inv-warehouse', title: 'Warehouse & Location Type', text: 'Consider the warehouse and configured location type⁠—⁠for example, different operational areas.' },
    { icon: 'inv-gauge', title: 'Capacity & Existing Stock', text: 'Capacity can consider maximum quantity and box/packet count, along with existing stock where configured.' },
    { icon: 'layers', title: 'Batch & Movement', text: 'Batch context and fast/slow movement can contribute to the location suggestion according to configuration.' },
    { icon: 'pin', title: 'Preferred Location', text: 'Preferred locations can be maintained and used by the suggestion process.' },
    { icon: 'shield', title: 'Quality Control', text: 'Each location permits one quality status, and incompatible put-away is prevented.' },
  ],
  note: {
    title: 'Important',
    text: 'The current confirmed capacity model covers maximum quantity and number of boxes/packets. Weight, volume and physical-dimension capacity are not included in the current claim.',
  },
};

export const stockIdentity = {
  eyebrow: 'Stock Identity & Quality',
  title: 'Know Which Stock You Have, Where It Is and What Its Status Is.',
  paragraphs: [
    'Ekatm maintains stock across Item Code, Warehouse, Location, Batch No, FIFO Date and QC Status. The same item can exist in multiple locations, including the same item and batch across multiple locations.',
    'FIFO Date defaults to Entry Date, can be changed, and is used in picking/issue selection. A batch can also be split by quality result⁠—⁠for example, 90 Available and 10 Rejected from a 100-piece batch⁠—⁠while retaining the batch identity.',
  ],
  panel: {
    title: 'Quality-aware Storage',
    points: [
      'One quality status per location',
      'Compatibility checked during put-away',
      'Incompatible transactions prevented',
      'Available / good material moved to the appropriate good location',
      'Rejected or quarantined material handled in the applicable location',
    ],
  },
};

export const allocation = {
  eyebrow: 'Stock Allocation',
  title: 'Reserve the Intended Batch for the Intended Demand.',
  text: 'Ekatm supports deliberate, user-driven stock allocation when the business does not want the normal FIFO picking behavior to determine the batch.',
  items: [
    { icon: 'clipboard', title: 'Sales Order Allocation', text: 'Allocate a selected batch and warehouse to a Sales Order before physical issue.' },
    { icon: 'factory', title: 'Manufacturing Order Allocation', text: 'Allocate a specified batch and warehouse to an MO before material issue.' },
    { icon: 'calculator', title: 'Controlled Quantity', text: 'Allocation is at Item + Batch + Warehouse level and over-allocation is prevented.' },
    { icon: 'inv-unlock', title: 'Release & Reduction', text: 'Allocation can be reduced or released, including when an order is cancelled.' },
    { icon: 'inv-barcode', title: 'HHD Validation', text: 'During HHD issue, the allocated batch is validated so the intended stock is used.' },
    { icon: 'inv-list-ordered', title: 'FIFO Remains Normal', text: 'Allocation is a deliberate exception to normal FIFO-based picking/issue behavior, not an automatic allocation engine.' },
  ],
};

export const picking = {
  eyebrow: 'Picking',
  title: 'Guide the Operator. Validate',
  titleBreak: 'the Transaction.',
  text: 'Ekatm supports Pick Lists for confirmed sources including Sales Orders, delivery/dispatch requirements, Manufacturing Orders and Purchase Returns. Sales Order schedules can be consolidated, and route-based order selection can be used for vehicle loading scenarios.',
  steps: ['Pick List', 'Warehouse', 'Location', 'Packet', 'Quantity', 'Material Issue'],
  items: [
    { icon: 'route', title: 'Guided Sequence', text: 'HHD can guide the operator through warehouse, location, packet and quantity.' },
    { icon: 'inv-scan', title: 'Five-point Validation', text: 'Item, Batch, Location, Packet and Quantity are validated during HHD picking.' },
    { icon: 'inv-box-search', title: 'Packet Selection', text: 'Specific packets can be selected and packet splitting is supported.' },
    { icon: 'layers', title: 'Consolidated Picking', text: 'Due schedules can be consolidated, or picking can be performed sales-order by sales-order.' },
    { icon: 'cube', title: 'Shortage Choice', text: 'Where stock is short, “Pick with shortages” is a user choice rather than an automatic partial-pick assumption.' },
    { icon: 'inv-clipboard-check', title: 'Pick-to-Issue', text: 'Successful Pick List picking automatically generates Material Issue.' },
  ],
};

export const packing = {
  eyebrow: 'Packing & Packaging',
  title: 'Know What Is Inside the Carton Without Opening It.',
  text: 'Ekatm maintains the nested packaging hierarchy from packets to inner cartons to outer cartons. This same hierarchy can be used during loading to identify carton contents and validate the material being moved to the vehicle.',
  note: {
    title: 'Operational continuity',
    text: 'The packet-level inventory record continues into the packing hierarchy and then into vehicle loading.',
  },
  panel: {
    title: 'Hierarchical Packing',
    points: [
      'Packet → Inner Carton → Outer Carton',
      'HHD packing execution',
      'Carton inside carton',
      'Gross weight from connected weighing scale',
      'Net weight from Item Master',
      'Carton label with gross and net weight',
      'Packing List printing',
    ],
  },
};

export const loading = {
  eyebrow: 'Route-aware Loading',
  title: 'Load the Right Material in the Right Sequence.',
  paragraphs: [
    'HHD operators can scan cartons or packets against the selected vehicle. Ekatm validates the carton against the selected Pick List / Sales Order and route and prevents wrong loading.',
    'Route information is used not only to identify eligible Sales Orders but also to determine the loading sequence. The practical rule is to load the last customer first so the first delivery remains accessible.',
  ],
  panel: {
    title: 'Loading Control',
    points: [
      'Carton/packet → vehicle scanning',
      'Pick List / Sales Order validation',
      'Route validation',
      'Loading sequence',
      'Wrong carton/order/route prevention',
      'Nested carton content retrieval',
    ],
    footLabel: 'Controlled completion:',
    foot: 'After cartons are scanned, Pick List completion still requires a separate confirmation.',
  },
};

export const physical = {
  eyebrow: 'Physical Inventory & Bin Accuracy',
  title: 'Bring Physical Stock Back to the Digital Record.',
  text: 'Ekatm supports perpetual inventory processes and HHD-based physical counting. Operators can scan material and location, compare physical stock with system stock and handle mismatch/posting workflows.',
  items: [
    { icon: 'inv-barcode', title: 'HHD Counting', text: 'Scan material and location during physical inventory activities.' },
    { icon: 'inv-scan', title: 'Batch / Serial Identification', text: 'Scanning can identify Item + Batch/Lot + Quantity + Location.' },
    { icon: 'clipboard', title: 'PI Workflow', text: 'PI Generation, mismatch update, posting and packet-based posting are available.' },
    { icon: 'pin', title: 'Bin Accuracy', text: 'Use the Bin Accuracy function to support location-level inventory accuracy.' },
  ],
};

export const hhd = {
  eyebrow: 'Connected HHD Operations',
  title: 'Extend Inventory Control to the Point Where Material Moves.',
  text: 'Ekatm supports HHD execution across the physical inventory flow rather than limiting scanning to a single transaction.',
  items: [
    { title: 'Receiving', text: 'Scan incoming material and build GRN information.' },
    { title: 'Put-away', text: 'Scan material and destination location.' },
    { title: 'Location Change', text: 'Move stock by scanning source and destination locations.' },
    { title: 'Picking', text: 'Follow guided picking and validate the transaction.' },
    { title: 'Packing', text: 'Build cartons and nested packaging on HHD.' },
    { title: 'Loading', text: 'Scan cartons/packets into the vehicle with route and order validation.' },
  ],
  note: {
    title: 'Online-first with a controlled exception',
    text: 'HHD transactions normally update the central Ekatm database immediately. When connectivity is unavailable, transactions can be stored locally and synchronized later. Concurrent conflicting offline transactions on the same stock can fail during synchronization.',
  },
};

// The design repeated the Physical Inventory heading here; this is a heading
// written for this section.
export const why = {
  eyebrow: 'Why Ekatm Inventory?',
  title: 'Control Built Into Every Physical Movement.',
  text: 'Ekatm Inventory is positioned around connected operational control rather than feature volume.',
  items: [
    { icon: 'inv-flow', title: 'Connected Physical Execution', text: 'Receipt, put-away, picking, packing, loading and physical inventory connect to the inventory record.' },
    { icon: 'inv-scan', title: 'AI-enabled Receiving', text: 'Configured vendor labels can be interpreted with OCR + AI and validated against the PO.' },
    { icon: 'inv-warehouse', title: 'Quality-aware Storage', text: 'Location quality status is part of the put-away control.' },
    { icon: 'inv-list-check', title: 'Controlled Picking', text: 'Guided HHD execution validates the material actually being picked.' },
    { icon: 'cube', title: 'Packaging Visibility', text: 'Nested carton hierarchy keeps packet and item content visible through loading.' },
    { icon: 'truck', title: 'Route-aware Loading', text: 'Loading sequence and validation connect warehouse execution with delivery routes.' },
  ],
};

// Numbered FAQ groups. The first `faqVisible` show; the rest sit behind
// "Read more". Answers are written from the page copy above.
export const faqVisible = 5;

export const faqGroups: { title: string; items: { q: string; a: string }[] }[] = [
  { title: 'General Inventory ERP', items: [
    { q: 'What is Ekatm Inventory ERP?', a: 'Ekatm Inventory connects inventory records with the physical movement of material across receiving, quality, put-away, allocation, picking, packing, loading and physical inventory.' },
    { q: 'What does Ekatm Inventory Management cover?', a: 'It covers Material Receipt & GRN, AI-enabled vendor label reading, inward quality check, put-away, stock management, stock allocation, guided HHD picking, hierarchical packing, route-aware loading, physical inventory, material movement, gate passes and returns.' },
    { q: 'How is Ekatm Inventory different from a basic stock management system?', a: 'A basic system records stock balances. Ekatm also controls how material physically moves: which location it goes to, which batch is picked, what is inside each carton and which vehicle it is loaded into, with each step validated by scanning.' },
    { q: 'Can Ekatm manage inventory from goods receipt to dispatch?', a: 'Yes. The flow runs from receipt and quality check through put-away, allocation, picking, packing and route-aware loading, with physical counting to keep the record accurate.' },
    { q: 'Can Ekatm connect Inventory with Purchase and Manufacturing?', a: 'Yes. Receipts are connected to the purchasing transaction and validated against the PO, stock can be allocated to Manufacturing Orders, and Pick Lists can be raised for Manufacturing Orders and Purchase Returns.' },
  ] },
  { title: 'HHD, QR, Barcode and RFID', items: [
    { q: 'What is an HHD and where is it used?', a: 'An HHD is a hand-held scanning device. Ekatm uses it for receiving, put-away, location change, picking, packing, loading and physical counting.' },
    { q: 'What does scanning validate?', a: 'Depending on the transaction, scanning validates item, batch, location, packet, quantity, order and route, so the wrong material cannot be moved silently.' },
    { q: 'Which labels and identification methods can be used?', a: 'Ekatm works with scanned labels on packets and cartons, and with configured vendor labels read through OCR + AI. The identification method for your site, including barcode, QR or RFID, can be discussed during the demo.' },
  ] },
  { title: 'Goods Receipt and Vendor Labels', items: [
    { q: 'Can material be received on an HHD?', a: 'Yes. Material can be received through desktop or HHD, and the receipt is connected to the purchasing transaction.' },
    { q: 'How does OCR + AI read vendor labels?', a: 'Vendor-specific label formats are configured in Ekatm. Once the vendor is selected in the GRN header, OCR + AI interprets the label and maps vendor information to Ekatm terms.' },
    { q: 'What happens if the scanned item does not match the PO?', a: 'If the mapped Ekatm item does not match the PO item, Ekatm rejects the scan.' },
    { q: 'Is GRN done at packet level?', a: 'Yes. Receiving builds a progressive packet-level GRN, so each packet keeps its own identity from receipt onwards.' },
  ] },
  { title: 'Warehouse, Location and Put-away', items: [
    { q: 'How does Ekatm suggest a put-away location?', a: 'The suggestion can use item and item class, warehouse and location type, capacity and existing stock, batch and fast/slow movement, preferred locations and the location’s quality status.' },
    { q: 'What does location capacity consider?', a: 'The current capacity model covers maximum quantity and number of boxes/packets. Weight, volume and physical-dimension capacity are not part of the current scope.' },
    { q: 'Can a location hold rejected and good material together?', a: 'No. Each location permits one quality status, and put-away that is incompatible with it is prevented.' },
  ] },
  { title: 'Stock Identity, Quality and FIFO', items: [
    { q: 'How does Ekatm identify stock?', a: 'Stock is maintained by Item Code, Warehouse, Location, Batch No, FIFO Date and QC Status. The same item and batch can sit in multiple locations.' },
    { q: 'How is the FIFO Date set?', a: 'FIFO Date defaults to the Entry Date, can be changed, and is used when selecting stock for picking and issue.' },
    { q: 'Can one batch have different quality results?', a: 'Yes. A batch can be split by quality result, for example 90 Available and 10 Rejected from a 100-piece batch, while keeping the batch identity.' },
  ] },
  { title: 'Inward Quality Check', items: [
    { q: 'Does Ekatm support packet-level quality checking?', a: 'Yes. Both regular and packet-level quality checks are supported, along with QC updates.' },
    { q: 'What happens to rejected material?', a: 'Rejected or quarantined material is handled in the applicable location, and rejection-related claims can be raised.' },
  ] },
  { title: 'Stock Allocation', items: [
    { q: 'When should stock be allocated?', a: 'When the business wants a specific batch and warehouse reserved for a Sales Order or Manufacturing Order instead of letting normal FIFO decide.' },
    { q: 'Can stock be over-allocated?', a: 'No. Allocation is held at Item + Batch + Warehouse level and over-allocation is prevented.' },
    { q: 'What happens to an allocation if the order is cancelled?', a: 'The allocation can be reduced or released, including when the order is cancelled.' },
    { q: 'Does allocation replace FIFO?', a: 'No. FIFO stays the normal behavior. Allocation is a deliberate, user-driven exception, not an automatic allocation engine.' },
  ] },
  { title: 'Picking and Material Issue', items: [
    { q: 'Which documents can a Pick List be raised for?', a: 'Pick Lists can be raised for Sales Orders, delivery/dispatch requirements, Manufacturing Orders and Purchase Returns.' },
    { q: 'What is validated during HHD picking?', a: 'Item, Batch, Location, Packet and Quantity are all validated during picking.' },
    { q: 'What happens when stock is short?', a: '“Pick with shortages” is a choice the user makes. Ekatm does not assume a partial pick automatically.' },
    { q: 'Is Material Issue created automatically?', a: 'Yes. Successful Pick List picking automatically generates the Material Issue.' },
  ] },
  { title: 'Packing and Packaging Hierarchy', items: [
    { q: 'What packaging levels are supported?', a: 'Packets can be packed into inner cartons and inner cartons into outer cartons, including carton inside carton.' },
    { q: 'How are carton weights captured?', a: 'Gross weight comes from a connected weighing scale and net weight from the Item Master. Both are printed on the carton label.' },
    { q: 'Can I see what is inside a carton without opening it?', a: 'Yes. The nested hierarchy records the contents of every carton, and it can be retrieved during loading.' },
  ] },
  { title: 'Route-aware Loading', items: [
    { q: 'How does Ekatm prevent wrong loading?', a: 'Each carton or packet is scanned against the selected vehicle and validated against the Pick List / Sales Order and route.' },
    { q: 'How is the loading sequence decided?', a: 'Route information determines the sequence. The practical rule is to load the last customer first so the first delivery stays accessible.' },
    { q: 'Does scanning all cartons complete the Pick List?', a: 'No. Pick List completion still needs a separate confirmation after the cartons are scanned.' },
  ] },
  { title: 'Material Movement and Transfers', items: [
    { q: 'Can stock be moved between locations?', a: 'Yes. Location changes are done by scanning the source and destination locations on the HHD.' },
    { q: 'Are inter-warehouse transfers supported?', a: 'Yes. Inter-warehouse transfer orders, reshuffle put-away and stock conversion processes are supported.' },
  ] },
  { title: 'Gate Pass and Returns', items: [
    { q: 'Does Ekatm handle outward gate passes?', a: 'Yes. Outward gate passes are managed, including material that is expected to come back.' },
    { q: 'Which return processes are covered?', a: 'Returnable inward movement, purchase returns and material return processes are covered.' },
  ] },
  { title: 'Physical Inventory and Bin Accuracy', items: [
    { q: 'How is physical inventory counted?', a: 'Operators scan material and location on the HHD, and Ekatm compares the physical count with system stock.' },
    { q: 'What happens when the count does not match?', a: 'The PI workflow covers PI generation, mismatch update, posting and packet-based posting.' },
    { q: 'Does Ekatm support perpetual inventory?', a: 'Yes. Perpetual inventory processes are supported, along with a Bin Accuracy function for location-level accuracy.' },
  ] },
  { title: 'Offline HHD Operations', items: [
    { q: 'Do HHD transactions update Ekatm immediately?', a: 'Yes. HHD transactions normally update the central Ekatm database immediately.' },
    { q: 'What if the network is unavailable?', a: 'Transactions can be stored locally on the HHD and synchronized later.' },
    { q: 'Can offline transactions conflict?', a: 'Yes. Concurrent conflicting offline transactions on the same stock can fail during synchronization, so online working stays the normal mode.' },
  ] },
  { title: 'Integration with Sales and Purchase', items: [
    { q: 'How does Inventory connect with Sales?', a: 'Stock can be allocated to Sales Orders, schedules can be consolidated into Pick Lists, and route-based order selection drives vehicle loading.' },
    { q: 'How does Inventory connect with Purchase?', a: 'Receipts are linked to the purchasing transaction, scans are validated against the PO, and purchase returns run through Pick Lists.' },
  ] },
  { title: 'Visibility and Traceability', items: [
    { q: 'Can I trace a packet from receipt to dispatch?', a: 'Yes. The packet-level record created at GRN continues through put-away, picking, the packing hierarchy and vehicle loading.' },
    { q: 'Can I see stock by location and quality status?', a: 'Yes. Stock is held by warehouse, location, batch, FIFO date and QC status, so each of these can be viewed.' },
  ] },
  { title: 'Getting Started', items: [
    { q: 'Can Ekatm be configured to our warehouse rules?', a: 'Yes. Put-away parameters, vendor label formats, location types and quality rules are configurable to match how your warehouse works.' },
    { q: 'How can I see Ekatm Inventory in action?', a: 'Request a free demo using the form below and our team will walk you through it.' },
  ] },
];
