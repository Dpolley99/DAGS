export interface Product {
  id: string;
  voltageClass: string;
  designation: string;
  ratedVoltage: string;
  ratedCurrent: string;
  breakingCapacity: string;
  standard: string;
  application: string;
  imageUrl: string;
  imageAlt: string;
}

export const products: Product[] = [
  {
    id: 'hv-ais-33kv',
    voltageClass: 'HV',
    designation: '33 kV AIS Outdoor Switchgear',
    ratedVoltage: '36 kV (Um)',
    ratedCurrent: 'Up to 3150 A',
    breakingCapacity: '25 / 31.5 kA',
    standard: 'IEC 62271-100 / IEC 62271-200',
    application: 'Primary distribution substations, DNO ring main units, ICP connection points',
    imageUrl: 'https://www.balajiengineers.in/balaji-engineers/services-we-offer/isolator-maintenance-service/33kv-800-amp-offload-isolator.jpg',
    imageAlt: 'Close-up of insulators and power lines on a transmission tower',
  },
  {
    id: 'hv-ais-66kv',
    voltageClass: 'HV',
    designation: '66 kV AIS Outdoor Switchgear',
    ratedVoltage: '72.5 kV (Um)',
    ratedCurrent: 'Up to 3150 A',
    breakingCapacity: '31.5 / 40 kA',
    standard: 'IEC 62271-100',
    application: 'Bulk supply points, grid entry substations, EPC turnkey projects',
    imageUrl: 'https://images.pexels.com/photos/5532834/pexels-photo-5532834.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Close-up of a stainless steel main switch with red safety warnings in an industrial setting',
  },
  {
    id: 'hv-ais-132kv',
    voltageClass: 'HV',
    designation: '132 kV AIS Outdoor Switchgear',
    ratedVoltage: '145 kV (Um)',
    ratedCurrent: 'Up to 4000 A',
    breakingCapacity: '40 / 50 kA',
    standard: 'IEC 62271-100',
    application: 'Transmission-distribution interface, grid reinforcement schemes',
    imageUrl: 'https://images.pexels.com/photos/36137477/pexels-photo-36137477.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Steel high voltage tower with insulators and cables, surrounded by trees against a clear sky',
  },
  {
    id: 'uhv-ais-275kv',
    voltageClass: 'UHV',
    designation: '275 kV AIS Outdoor Switchgear',
    ratedVoltage: '300 kV (Um)',
    ratedCurrent: 'Up to 4000 A',
    breakingCapacity: '50 / 63 kA',
    standard: 'IEC 62271-100',
    application: 'National transmission network, large-scale generation connection',
    imageUrl: 'https://i.ytimg.com/vi/YPk0Ym1Ng64/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGF4gXiheMA8=&rs=AOn4CLCza-nZ9P8pT3IvLG7jsR7md9dvUQ',
    imageAlt: 'Rustic open field showcasing a high voltage electrical substation during daytime',
  },
  {
    id: 'uhv-ais-400kv',
    voltageClass: 'UHV',
    designation: '400 kV AIS Outdoor Switchgear',
    ratedVoltage: '420 kV (Um)',
    ratedCurrent: 'Up to 5000 A',
    breakingCapacity: '63 kA',
    standard: 'IEC 62271-100',
    application: 'Supergrid interconnects, offshore wind collection, HVDC converter stations',
    imageUrl: 'https://images.pexels.com/photos/24375924/pexels-photo-24375924.png?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Close-up view of a steel transmission tower in foggy weather, displaying intricate lattice design',
  },
];

export interface ValuePillar {
  id: string;
  title: string;
  body: string;
}

export const valuePillars: ValuePillar[] = [
  {
    id: 'manufacturer',
    title: 'Direct Manufacturer Backing',
    body: 'DA Grid Solutions operates with full manufacturer backing, giving clients access to factory-certified equipment, OEM technical support, and supply chain transparency that independent distributors cannot match.',
  },
  {
    id: 'quality',
    title: 'IEC-Compliant, Type-Tested Equipment',
    body: 'Every switchgear assembly supplied is fully type-tested to IEC 62271 series standards. Factory Acceptance Testing (FAT) documentation, routine test certificates, and type test reports are provided as standard.',
  },
  {
    id: 'pricing',
    title: 'Competitive Whole-Life Cost',
    body: 'Manufacturer-direct procurement eliminates intermediary margin. Clients receive competitive unit pricing without concession on specification, warranty terms, or post-delivery technical support.',
  },
  {
    id: 'delivery',
    title: 'Programme-Aware Supply',
    body: 'We understand that switchgear delivery is on the critical path of any substation build. Our supply model is structured around agreed programme milestones, with proactive lead-time management from order placement.',
  },
  {
    id: 'technical',
    title: 'Technical Pre-Sales Support',
    body: 'Our team includes engineers with DNO and EPC project backgrounds. We engage at specification stage to ensure equipment selection, protection coordination, and interface requirements are resolved before order.',
  },
  {
    id: 'documentation',
    title: 'Full Documentation Package',
    body: 'Supplied equipment is accompanied by a complete documentation set: general arrangement drawings, single-line diagrams, operation and maintenance manuals, and spare parts schedules — aligned to DNO asset management requirements.',
  },
];
