export type Project = {
  number: string;
  title: string;
  category: string;
  summary: string;
  capabilities: string[];
  status: 'In development' | 'Professional experience' | 'Independent work';
  slug: string;
  link?: string;
};

// Replace or refine these summaries before publishing. Do not include confidential employer information.
export const projects: Project[] = [
  {
    number: '01',
    title: 'Hope — Enterprise Intelligence Platform',
    category: 'Product vision · Architecture · Data & AI',
    summary: 'An independent platform concept exploring how enterprise metrics, knowledge and intelligent workflows can come together to support better decisions.',
    capabilities: ['Multi-tenant architecture', 'KPI investigation', 'Knowledge retrieval', 'Governance by design'],
    status: 'In development',
    slug: 'hope-enterprise-intelligence',
  },
  {
    number: '02',
    title: 'Remit Claims — Intelligent Document Processing',
    category: 'Document AI · Python · Data Privacy',
    summary: 'An intelligent document-processing workflow combining OCR, entity detection and contextual resolution to identify and mask sensitive information in remittance documents.',
    capabilities: [
      'Docling OCR',
      'Microsoft Presidio',
      'Regex-based detection',
      'PII entity resolution',
      'Automated data masking',
    ],
    status: 'In development',
    slug: 'hope-enterprise-intelligence',
  },
  {
    number: '04',
    title: "India's Power Sector: The Biggest Investment Story Nobody Is Talking About",
    category: 'Finance · Energy · Industry Analysis',
    summary:
      'An exploration of Indias power sector and the investment opportunities emerging from the countrys evolving energy landscape.',
    capabilities: [
      'Financial Markets',
      'Energy Sector',
      'Industry Research',
    ],
    status: 'Independent work',
    slug: 'indias-power-sector',
    link: 'https://medium.com/@eshannaik96/indias-power-sector-the-biggest-investment-story-nobody-is-talking-about-4bd006f77f1a',
  },
  {
    number: '05',
    title: 'Understanding Post-Earnings Drift Through Volume and Reaction Regimes',
    category: 'Finance · Equity Markets · Research',
    summary:
      'An exploration of post-earnings price behaviour, examining volume and market reaction regimes to understand how stocks respond to earnings announcements.',
    capabilities: [
      'Equity Markets',
      'Market Behaviour',
      'Quantitative Analysis',
    ],
    status: 'Independent work',
    slug: 'post-earnings-drift',
    link: 'https://medium.com/@eshannaik96/understanding-post-earnings-drift-through-volume-and-reaction-regimes-562f28b88cae',
  },
  {
    number: '06',
    title: 'Portfolio Management',
    category: 'Finance · Investing · Portfolio Strategy',
    summary:
      'An article exploring portfolio management and the principles involved in structuring and managing investments.',
    capabilities: [
      'Portfolio Management',
      'Investment Strategy',
      'Financial Markets',
    ],
    status: 'Independent work',
    slug: 'portfolio-management',
    link: 'https://medium.com/@eshannaik96/portfolio-management-087208428a52',
  },
];
