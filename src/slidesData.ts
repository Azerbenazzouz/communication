export interface SlideItem {
  text: string;
  subtext?: string;
  example?: string;
}

export interface CardItem {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface StageItem {
  number: number;
  title: string;
  items: string[];
  color: string;
}

export interface ExampleItem {
  title: string;
  description: string;
  color: string;
}

export interface TimeBlock {
  fraction: string;
  label: string;
  color: string;
}

export interface SlideData {
  id: string;
  type: 'title' | 'outline' | 'definition' | 'importance' | 'features' | 'types' | 'stages' | 'advice' | 'timeManagement' | 'reminder' | 'thankyou';
  title: string;
  subtitle?: string;
  content: {
    mainText?: string;
    items?: SlideItem[];
    cards?: CardItem[];
    stages?: StageItem[];
    examples?: ExampleItem[];
    highlights?: { text: string; color: string }[];
    timeBlocks?: TimeBlock[];
    tips?: SlideItem[];
    checkItems?: string[];
    quoteText?: string;
    footerText?: string;
    author?: string;
    email?: string;
    institution?: string;
    department?: string;
    academicYear?: string;
  };
}

export interface Presentation {
  id: string;
  name: string;
  description?: string;
  slides: SlideData[];
}

export const presentations: Presentation[] = [
  {
    id: 'part1',
    name: 'Part 1: Introduction',
    description: 'Introduction to Scientific Writing and Communication',
    slides: [
  {
    id: 'intro',
    type: 'title',
    title: 'Scientific Writing and Communication',
    subtitle: 'Master 2026 - Part 1: Introduction',
    content: {
      author: 'Mr. Azer BEN AZZOUZ',
      institution: 'ISET Radés',
      academicYear: 'A.U: 2025/2026'
    }
  },
  {
    id: 'outline',
    type: 'outline',
    title: 'Course Outline',
    content: {
      items: [
        { text: 'Scientific communication and writing – Definitions' },
        { text: 'Writing: Main Stages' },
        { text: 'Some important language points' },
        { text: 'Organization of a scientific paper (IMRAD format)' },
        { text: 'Essential Parts of a Scientific paper' },
        { text: 'How to prepare the different sections' },
        { text: 'Where and how to submit the manuscript' },
        { text: 'The review process (by reviewers)' },
        { text: 'LaTeX' }
      ]
    }
  },
  {
    id: 'sci-comm-definition',
    type: 'definition',
    title: 'What is Scientific Communication?',
    content: {
      mainText: 'Scientific communication involves the exchange of information, ideas, and findings within the scientific community and beyond.',
      cards: [
        {
          icon: 'FileText',
          title: 'Written Papers',
          description: 'Research articles, review articles, etc.',
          color: 'green'
        },
        {
          icon: 'BookOpen',
          title: 'Presentations',
          description: 'Conferences, seminars, webinars',
          color: 'purple'
        },
        {
          icon: 'Edit',
          title: 'Other Mediums',
          description: 'Posters, blogs, podcasts, social media',
          color: 'orange'
        }
      ]
    }
  },
  {
    id: 'importance',
    type: 'importance',
    title: 'Why is it Important?',
    content: {
      highlights: [
        {
          text: 'Advances in science depend on the effective dissemination of knowledge.',
          color: 'blue'
        },
        {
          text: 'Clear communication ensures that research is understood, replicated, and built upon by others.',
          color: 'green'
        }
      ],
      examples: [
        {
          title: 'Example: DNA Structure',
          description: 'The discovery of the structure of DNA by Watson and Crick was communicated through a concise paper in Nature in 1953. This paper revolutionized biology and medicine.',
          color: 'yellow'
        },
        {
          title: 'Example: Transformer Architecture',
          description: '"Attention is All You Need" (Vaswani et al., 2017) revolutionized NLP. Clear communication allowed researchers worldwide to build GPT and BERT.',
          color: 'purple'
        }
      ]
    }
  },
  {
    id: 'features',
    type: 'features',
    title: 'Key Features of Scientific Writing',
    content: {
      cards: [
        {
          icon: 'check',
          title: '✓ Clarity',
          description: 'The writing must be clear and concise',
          color: 'blue'
        },
        {
          icon: 'check',
          title: '✓ Precision',
          description: 'Avoid ambiguity; use precise language',
          color: 'green'
        },
        {
          icon: 'check',
          title: '✓ Objectivity',
          description: 'Present facts without personal bias',
          color: 'purple'
        },
        {
          icon: 'check',
          title: '✓ Logical Flow',
          description: 'Ideas should follow a logical sequence',
          color: 'orange'
        }
      ],
      examples: [
        {
          title: '🔁 Repeatability',
          description: 'Research methods and materials must be described so clearly that other researchers can re-run the experiments.',
          color: 'red'
        }
      ]
    }
  },
  {
    id: 'types',
    type: 'types',
    title: 'Types of Scientific Writing',
    content: {
      items: [
        {
          text: 'Research Paper',
          subtext: 'Reports original research findings with experiments, data, and analysis',
          example: 'Example: New ML algorithm for image classification'
        },
        {
          text: 'Review Paper',
          subtext: 'Summarizes existing research, provides state of the art overview',
          example: 'Example: Review of deep learning techniques for NLP'
        },
        {
          text: 'Conference Paper',
          subtext: 'Presents preliminary findings, shorter than journal papers',
          example: 'Example: Early results presented at NeurIPS or CVPR'
        },
        {
          text: 'Thesis/Dissertation',
          subtext: 'Detailed document for academic degrees with extensive literature review',
          example: 'Example: PhD thesis on quantum computing algorithms'
        }
      ]
    }
  },
  {
    id: 'stages',
    type: 'stages',
    title: 'Main Stages of Writing',
    content: {
      stages: [
        {
          number: 1,
          title: 'Planning',
          items: ['Define research question/hypothesis', 'Outline structure (IMRAD format)'],
          color: 'blue'
        },
        {
          number: 2,
          title: 'Drafting',
          items: ['Write first draft', 'Focus on getting ideas down'],
          color: 'green'
        },
        {
          number: 3,
          title: 'Revising',
          items: ['Refine for clarity & coherence', 'Follow journal guidelines'],
          color: 'purple'
        },
        {
          number: 4,
          title: 'Editing',
          items: ['Check grammar & spelling', 'Format references correctly'],
          color: 'orange'
        },
        {
          number: 5,
          title: 'Finalizing',
          items: ['Submit to journal/conference and respond to reviewer comments'],
          color: 'red'
        }
      ]
    }
  },
  {
    id: 'advice',
    type: 'advice',
    title: 'Key Advice',
    content: {
      quoteText: 'Clear writing starts with clear thinking',
      tips: [
        { text: 'Before writing: "What am I trying to say?"' },
        { text: 'After writing: "Have I said it?"' }
      ],
      cards: [
        {
          icon: 'check',
          title: 'Clarity is Key',
          description: 'Avoid complex sentences, use simple language',
          color: 'blue'
        },
        {
          icon: 'check',
          title: 'Precision',
          description: 'Be specific, avoid vague terms',
          color: 'green'
        },
        {
          icon: 'check',
          title: 'Conciseness',
          description: 'Use fewest words, avoid redundancy',
          color: 'purple'
        },
        {
          icon: 'check',
          title: 'Paragraphs',
          description: 'Each paragraph = one idea/concept',
          color: 'orange'
        }
      ]
    }
  },
  {
    id: 'time-management',
    type: 'timeManagement',
    title: 'Writing Process',
    content: {
      mainText: 'Time Allocation Rule: 1/3 - 1/3 - 1/3',
      timeBlocks: [
        { fraction: '1/3', label: 'Planning', color: 'blue' },
        { fraction: '1/3', label: 'Writing', color: 'green' },
        { fraction: '1/3', label: 'Revising & Finishing', color: 'purple' }
      ],
      checkItems: [
        'Identify key findings and focus on them',
        'Avoid including irrelevant details',
        'Take time to revise and polish'
      ]
    }
  },
  {
    id: 'reminder',
    type: 'reminder',
    title: 'Important Reminder',
    content: {
      quoteText: 'Poor experimentation cannot be masked by brilliant writing; however, poor writing can mask brilliant experimentation',
      footerText: '→ Always keep the paragraph as the essential unit of thought'
    }
  },
  {
    id: 'thankyou',
    type: 'thankyou',
    title: 'Thank You!',
    content: {
      author: 'Mr. Azer BEN AZZOUZ',
      email: 'benazzouzazer@gmail.com',
      institution: 'ISET Radés',
      department: 'IT Department',
      academicYear: 'A.U: 2025/2026'
    }
  }
    ]
  },
  {
    id: 'part2',
    name: 'Part 2: IMRAD Format',
    description: 'Organization of a Scientific Paper - IMRAD Format',
    slides: [
      {
        id: 'part2-intro',
        type: 'title',
        title: 'Scientific Writing and Communication',
        subtitle: 'Master 2026 - Part 2: IMRAD Format',
        content: {
          author: 'Mr. Azer BEN AZZOUZ',
          institution: 'ISET Radés',
          academicYear: 'A.U: 2025/2026'
        }
      },
      {
        id: 'part2-outline',
        type: 'outline',
        title: 'Part 2 Outline',
        content: {
          items: [
            { text: 'What is IMRAD Format?' },
            { text: 'Why use IMRAD?' },
            { text: 'Introduction Section' },
            { text: 'Methods Section' },
            { text: 'Results Section' },
            { text: 'Discussion Section' },
            { text: 'Abstract & Title' },
            { text: 'References & Citations' },
            { text: 'Common Mistakes to Avoid' }
          ]
        }
      },
      {
        id: 'part2-what-is-imrad',
        type: 'definition',
        title: 'What is IMRAD Format?',
        content: {
          mainText: 'IMRAD is a standard format for structuring scientific papers, representing the logical flow of research.',
          cards: [
            {
              icon: 'FileText',
              title: 'I - Introduction',
              description: 'Why did you do it? Background & objectives',
              color: 'blue'
            },
            {
              icon: 'BookOpen',
              title: 'M - Methods',
              description: 'How did you do it? Procedures & materials',
              color: 'green'
            },
            {
              icon: 'Edit',
              title: 'R - Results',
              description: 'What did you find? Data & findings',
              color: 'purple'
            }
          ]
        }
      },
      {
        id: 'part2-imrad-continued',
        type: 'features',
        title: 'IMRAD Format (continued)',
        content: {
          cards: [
            {
              icon: 'check',
              title: 'A - And',
              description: 'Connects Results to Discussion',
              color: 'orange'
            },
            {
              icon: 'check',
              title: 'D - Discussion',
              description: 'What does it mean? Interpretation & implications',
              color: 'red'
            }
          ],
          examples: [
            {
              title: '📝 Additional Sections',
              description: 'Abstract, Title, Keywords, References, Acknowledgments, and Appendices complement the IMRAD structure.',
              color: 'blue'
            }
          ]
        }
      },
      {
        id: 'part2-why-imrad',
        type: 'importance',
        title: 'Why Use IMRAD Format?',
        content: {
          highlights: [
            {
              text: 'Provides a logical and consistent structure that readers expect and understand.',
              color: 'blue'
            },
            {
              text: 'Facilitates quick navigation - readers can jump to sections they need.',
              color: 'green'
            }
          ],
          examples: [
            {
              title: 'Benefits for Authors',
              description: 'Helps organize thoughts, ensures completeness, and makes writing more systematic. Reduces chances of missing important information.',
              color: 'purple'
            },
            {
              title: 'Benefits for Readers',
              description: 'Easy to locate specific information, compare studies, and evaluate research quality. Speeds up the peer review process.',
              color: 'orange'
            }
          ]
        }
      },
      {
        id: 'part2-introduction',
        type: 'stages',
        title: 'Introduction Section',
        content: {
          stages: [
            {
              number: 1,
              title: 'Context',
              items: ['Provide background information', 'Set the scene for your research'],
              color: 'blue'
            },
            {
              number: 2,
              title: 'Problem',
              items: ['Identify the gap in knowledge', 'State the research problem'],
              color: 'green'
            },
            {
              number: 3,
              title: 'Purpose',
              items: ['State objectives/hypothesis', 'Explain significance of the study'],
              color: 'purple'
            },
            {
              number: 4,
              title: 'Scope',
              items: ['Define boundaries of study', 'Preview the paper structure'],
              color: 'orange'
            }
          ]
        }
      },
      {
        id: 'part2-intro-tips',
        type: 'advice',
        title: 'Introduction Tips',
        content: {
          quoteText: 'Move from general to specific (funnel approach)',
          tips: [
            { text: 'Start broad, then narrow down to your specific research question' },
            { text: 'End with a clear statement of objectives or hypothesis' }
          ],
          cards: [
            {
              icon: 'check',
              title: 'Use Present Tense',
              description: 'For established facts and general truths',
              color: 'blue'
            },
            {
              icon: 'check',
              title: 'Cite Key Literature',
              description: 'Show awareness of existing research',
              color: 'green'
            },
            {
              icon: 'check',
              title: 'Be Concise',
              description: 'Typically 10-15% of total paper length',
              color: 'purple'
            },
            {
              icon: 'check',
              title: 'Hook the Reader',
              description: 'Make them want to read more',
              color: 'orange'
            }
          ]
        }
      },
      {
        id: 'part2-methods',
        type: 'definition',
        title: 'Methods Section',
        content: {
          mainText: 'Describes HOW you conducted your research. Must be detailed enough for replication.',
          cards: [
            {
              icon: 'FileText',
              title: 'Materials',
              description: 'Equipment, software, datasets, participants',
              color: 'blue'
            },
            {
              icon: 'BookOpen',
              title: 'Procedures',
              description: 'Step-by-step description of what you did',
              color: 'green'
            },
            {
              icon: 'Edit',
              title: 'Analysis',
              description: 'Statistical methods, data processing techniques',
              color: 'purple'
            }
          ]
        }
      },
      {
        id: 'part2-methods-tips',
        type: 'features',
        title: 'Methods Writing Tips',
        content: {
          cards: [
            {
              icon: 'check',
              title: 'Past Tense',
              description: 'Describe what WAS done',
              color: 'blue'
            },
            {
              icon: 'check',
              title: 'Passive Voice',
              description: '"Samples were collected..." (often preferred)',
              color: 'green'
            },
            {
              icon: 'check',
              title: 'Chronological Order',
              description: 'Present steps in the order performed',
              color: 'purple'
            },
            {
              icon: 'check',
              title: 'Reproducibility',
              description: 'Include all details needed to replicate',
              color: 'orange'
            }
          ],
          examples: [
            {
              title: '⚠️ Important',
              description: 'Do NOT include results in this section. Only describe what you did, not what you found.',
              color: 'red'
            }
          ]
        }
      },
      {
        id: 'part2-results',
        type: 'definition',
        title: 'Results Section',
        content: {
          mainText: 'Present your findings objectively WITHOUT interpretation. Let the data speak for itself.',
          cards: [
            {
              icon: 'FileText',
              title: 'Text',
              description: 'Narrative description of key findings',
              color: 'blue'
            },
            {
              icon: 'BookOpen',
              title: 'Tables',
              description: 'Precise numerical data in organized format',
              color: 'green'
            },
            {
              icon: 'Edit',
              title: 'Figures',
              description: 'Graphs, charts, images to visualize data',
              color: 'purple'
            }
          ]
        }
      },
      {
        id: 'part2-results-tips',
        type: 'advice',
        title: 'Results Writing Tips',
        content: {
          quoteText: 'Report what you found, not what it means',
          tips: [
            { text: 'Use past tense: "The results showed..."' },
            { text: 'Present most important findings first' }
          ],
          cards: [
            {
              icon: 'check',
              title: 'Be Objective',
              description: 'No interpretation or opinion here',
              color: 'blue'
            },
            {
              icon: 'check',
              title: 'Use Visuals',
              description: 'Tables and figures enhance clarity',
              color: 'green'
            },
            {
              icon: 'check',
              title: 'Highlight Key Data',
              description: 'Focus on most relevant findings',
              color: 'purple'
            },
            {
              icon: 'check',
              title: 'Reference All Visuals',
              description: 'Mention every table/figure in text',
              color: 'orange'
            }
          ]
        }
      },
      {
        id: 'part2-discussion',
        type: 'stages',
        title: 'Discussion Section',
        content: {
          stages: [
            {
              number: 1,
              title: 'Summarize',
              items: ['Restate main findings', 'Answer research questions'],
              color: 'blue'
            },
            {
              number: 2,
              title: 'Interpret',
              items: ['Explain what results mean', 'Connect to hypothesis'],
              color: 'green'
            },
            {
              number: 3,
              title: 'Compare',
              items: ['Relate to previous studies', 'Explain differences/similarities'],
              color: 'purple'
            },
            {
              number: 4,
              title: 'Implications',
              items: ['Theoretical contributions', 'Practical applications'],
              color: 'orange'
            },
            {
              number: 5,
              title: 'Limitations & Future',
              items: ['Acknowledge study limitations', 'Suggest future research'],
              color: 'red'
            }
          ]
        }
      },
      {
        id: 'part2-discussion-tips',
        type: 'features',
        title: 'Discussion Tips',
        content: {
          cards: [
            {
              icon: 'check',
              title: 'Be Critical',
              description: 'Acknowledge weaknesses honestly',
              color: 'blue'
            },
            {
              icon: 'check',
              title: 'Avoid Overclaiming',
              description: 'Don\'t overstate your findings',
              color: 'green'
            },
            {
              icon: 'check',
              title: 'Link to Introduction',
              description: 'Answer questions raised earlier',
              color: 'purple'
            },
            {
              icon: 'check',
              title: 'End Strong',
              description: 'Conclude with significance of work',
              color: 'orange'
            }
          ],
          examples: [
            {
              title: '💡 Pro Tip',
              description: 'The Discussion moves from specific (your results) to general (broader implications) - opposite of Introduction!',
              color: 'yellow'
            }
          ]
        }
      },
      {
        id: 'part2-abstract',
        type: 'definition',
        title: 'The Abstract',
        content: {
          mainText: 'A mini-version of your paper. Written LAST but appears FIRST. Usually 150-300 words.',
          cards: [
            {
              icon: 'FileText',
              title: 'Background',
              description: 'One sentence on context/problem',
              color: 'blue'
            },
            {
              icon: 'BookOpen',
              title: 'Methods',
              description: 'Brief overview of approach',
              color: 'green'
            },
            {
              icon: 'Edit',
              title: 'Results & Conclusion',
              description: 'Key findings and main conclusion',
              color: 'purple'
            }
          ]
        }
      },
      {
        id: 'part2-title',
        type: 'advice',
        title: 'Writing a Good Title',
        content: {
          quoteText: 'The title is the first thing readers see - make it count!',
          tips: [
            { text: 'Be specific and informative' },
            { text: 'Include key variables or findings' }
          ],
          cards: [
            {
              icon: 'check',
              title: 'Concise',
              description: '10-15 words maximum',
              color: 'blue'
            },
            {
              icon: 'check',
              title: 'Descriptive',
              description: 'Reflect the main topic/finding',
              color: 'green'
            },
            {
              icon: 'check',
              title: 'No Abbreviations',
              description: 'Avoid jargon and acronyms',
              color: 'purple'
            },
            {
              icon: 'check',
              title: 'Keywords',
              description: 'Include searchable terms',
              color: 'orange'
            }
          ]
        }
      },
      {
        id: 'part2-references',
        type: 'features',
        title: 'References & Citations',
        content: {
          cards: [
            {
              icon: 'check',
              title: 'Cite All Sources',
              description: 'Every claim needs evidence',
              color: 'blue'
            },
            {
              icon: 'check',
              title: 'Use Citation Style',
              description: 'APA, IEEE, Harvard, etc.',
              color: 'green'
            },
            {
              icon: 'check',
              title: 'Recent Sources',
              description: 'Prioritize recent publications',
              color: 'purple'
            },
            {
              icon: 'check',
              title: 'Primary Sources',
              description: 'Prefer original research papers',
              color: 'orange'
            }
          ],
          examples: [
            {
              title: '🔧 Tools',
              description: 'Use reference managers: Zotero, Mendeley, EndNote, or BibTeX for LaTeX users.',
              color: 'blue'
            }
          ]
        }
      },
      {
        id: 'part2-common-mistakes',
        type: 'reminder',
        title: 'Common Mistakes to Avoid',
        content: {
          quoteText: 'Mixing Results and Discussion | Incomplete Methods | Vague Introduction | Overclaiming in Discussion | Poor Abstract | Missing References',
          footerText: '→ Always proofread and follow journal guidelines!'
        }
      },
      {
        id: 'part2-structure-summary',
        type: 'timeManagement',
        title: 'IMRAD Structure Summary',
        content: {
          mainText: 'Typical Length Distribution',
          timeBlocks: [
            { fraction: '10-15%', label: 'Introduction', color: 'blue' },
            { fraction: '20-30%', label: 'Methods', color: 'green' },
            { fraction: '20-30%', label: 'Results', color: 'purple' }
          ],
          checkItems: [
            'Discussion: 25-35% of paper',
            'Abstract: 150-300 words',
            'Always check specific journal requirements'
          ]
        }
      },
      {
        id: 'part2-thankyou',
        type: 'thankyou',
        title: 'Thank You!',
        content: {
          author: 'Mr. Azer BEN AZZOUZ',
          email: 'benazzouzazer@gmail.com',
          institution: 'ISET Radés',
          department: 'IT Department',
          academicYear: 'A.U: 2025/2026'
        }
      }
    ]
  }
];

// Helper to get slides for backward compatibility
export const slidesData = presentations[0].slides;
