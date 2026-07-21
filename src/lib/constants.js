export const NAV_LINKS = ['About', 'Skills', 'Projects', 'Achievements', 'Contact']

export const ROLES = [
  'Full Stack Developer',
  'AI / LLM Builder',
  'Backend Engineer',
  'Django Developer',
  'Open Source Dev',
]

export const BADGES = [
  { icon: '🥇', cat: 'Hack AI · IIT Bombay',    label: 'Top 51 / 1400+ Teams'  },
  { icon: '⚡', cat: 'LeetCode DSA',             label: '100+ Problems Solved'   },
  { icon: '👑', cat: 'GHRCEMN Coding Club',      label: 'President'              },
]

export const SKILLS = [
  { icon: '{ }', name: 'Languages',   tags: ['Java', 'JavaScript', 'Python']                   },
  { icon: '⬡',   name: 'Frontend',    tags: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind']   },
  { icon: '⚙',   name: 'Backend',     tags: ['Node.js', 'Express.js', 'Django']                },
  { icon: '◈',   name: 'Databases',   tags: ['MongoDB', 'PostgreSQL', 'MySQL']                 },
  { icon: '⚒',   name: 'Tools',       tags: ['Git', 'GitHub', 'Docker', 'Postman']             },
  { icon: '◻',   name: 'CS Concepts', tags: ['DSA', 'OOP', 'DBMS', 'OS']                      },
  { icon: '✦',   name: 'GenAI',       tags: ['LangChain', 'RAG', 'LLM APIs', 'OpenAI']        },
]

export const MARQUEE_SKILLS = [
  'Java','JavaScript','Python','React','Next.js','Node.js','Django',
  'MongoDB','PostgreSQL','Docker','LangChain','OpenAI','Redis',
  'Express.js','Tailwind CSS','Git','GitHub',
]

export const PROJECTS = [
      {
  file: 'neurascan_ai.py',
  lang: 'AI / Machine Learning',
  icon: '🧠',
  cls: 'b4',
  image: '/neurascan_preview.png',
  name: 'NeuraScan – Early Parkinson’s Disease Detection',
  desc: 'Designed and developed an AI-powered healthcare platform for early Parkinson’s disease screening using multimodal biomarkers. Integrated voice signal analysis (MFCC, jitter, shimmer, pitch, HNR) and typing dynamics (dwell time, flight time, rhythm, WPM) with an ensemble Machine Learning model (SVM + Random Forest) to predict Parkinson’s risk. Built a FastAPI backend, React frontend, MongoDB database, JWT authentication, and automated PDF medical report generation.',
  tags: [
    'Python',
    'FastAPI',
    'React',
    'MongoDB',
    'Scikit-learn',
    'Librosa',
    'Machine Learning',
    'SVM',
    'Random Forest',
    'JWT',
    'ReportLab',
    'Recharts'
  ],
  links: [
    {
      label: '⌥ GitHub ↗',
      href: 'https://github.com/snipeet03/parkinsons-detection'
    },
    {
      label: '▶ Live Demo ↗',
      href: 'https://parkinson-s-disease-y28z.vercel.app/'
    }
  ],
  delay: '0.1s',
},
  {
  file: 'codesage_ai.py',
  lang: 'Python',
  icon: '💻',
  cls: 'b1',
  image: '/codesage_preview.png',
  name: 'CodeSage – AI Codebase Explainer',
  desc: 'Built an AI-powered codebase understanding platform using RAG, LangChain, and FAISS. Parses multi-file repositories, generates semantic vector embeddings, and provides context-aware explanations of source code using Groq LLaMA 3.',
  tags: ['Python', 'LangChain', 'FAISS', 'Groq LLaMA 3', 'React', 'RAG'],
  links: [
    { label: '⌥ GitHub ↗', href: 'https://github.com/snipeet03/GDPR-AI' },
    { label: '▶ Live Demo ↗', href: 'https://code-sage-orcin.vercel.app/' }
  ],
  delay: '',
},
  {
  file: 'gdpr_ai.js',
  lang: 'Full Stack',
  icon: '🛡️',
  cls: 'b2',
  image: '/gdpr_preview.png',
  name: 'GDPR-AI – AI-Powered GDPR Compliance Assistant',
  desc: 'Developed a full-stack GDPR compliance platform that analyzes legal documents using custom retrieval pipelines, TF-IDF matching, cosine similarity, PDF parsing, and AI-powered compliance assistance. Automates ingestion, processing, and retrieval of GDPR-related regulatory content.',
  tags: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Groq API', 'RAG', 'TF-IDF', 'Tailwind CSS'],
  links: [
    { label: '⌥ GitHub ↗', href: 'https://github.com/snipeet03/GDPR-AI' },
    { label: '▶ Live Demo ↗', href: 'https://gdpr-ai-y6h2.vercel.app/login' }
  ],
  delay: '0.1s',
},
   {
  file: 'movie_app.js',
  lang: 'Frontend',
  icon: '🎬',
  cls: 'b3',
  image: '/movie_preview.png',
  name: 'Movie Web Application',
  desc: 'Built a scalable React-based movie discovery platform leveraging Redux for state management and asynchronous API integrations. Implemented search, filtering, watchlist management, and dynamic content rendering while optimizing data flow and user interactions across multiple views.',
  tags: ['React', 'Redux', 'JavaScript', 'Tailwind CSS', 'REST API'],
  links: [
    { label: '⌥ GitHub ↗', href: 'https://github.com/snipeet03/react-movie-app' },
    { label: '▶ Live Demo ↗', href: 'https://react-movie-app-4to9.vercel.app/' }
  ],
  delay: '0.2s',
},


{
  file: 'multilingual_qna.py',
  lang: 'Generative AI',
  icon: '🌐',
  cls: 'b5',
  name: 'Multilingual QnA Generator',
  desc: 'Developed a Generative AI application that automatically extracts content from PDF, DOCX, and TXT documents to generate intelligent Question–Answer pairs using Groq LLaMA 3.3. Implemented multilingual translation into Hindi and Marathi, document chunking, duplicate removal, and automated Excel report generation through an interactive Streamlit interface.',
  tags: [
    'Python',
    'Streamlit',
    'Groq API',
    'Llama 3.3',
    'LLM',
    'Generative AI',
    'NLP',
    'PyPDF2',
    'python-docx',
    'deep-translator',
    'openpyxl',
    'Pandas'
  ],
  links: [
    {
      label: '⌥ GitHub ↗',
      href: 'https://github.com/snipeet03/multilingual-qna-generator'
    },
    {
      label: '▶ Live Demo ↗',
      href: '#'
    }
  ],
  delay: '0.2s',
},
]

export const ACHIEVEMENTS = [
  { emoji: '🏆', title: 'Top 51 / 1400+ Teams',    sub: 'Hack AI · IIT Bombay',      desc: "Competed against 1400+ teams at India's premier AI hackathon hosted by IIT Bombay. Placed in the top 51 nationwide.", delay: 'reveal-d1' },
  { emoji: '🚀', title: '20+ Hackathons',           sub: 'National & College Level',  desc: 'Active participant across national and college-level hackathons — building full products under tight 24-48 hour deadlines.', delay: 'reveal-d3' },
  { emoji: '📜', title: 'Full Stack Certification', sub: '100xDevs · Web Development',desc: 'Completed the rigorous 100xDevs full-stack web development program covering React, Node.js, databases, and system design.', delay: 'reveal-d4' },
  { emoji: '👑', title: 'President — Coding Club',  sub: 'GHRCEMN · 2024–2025',      desc: 'Leading the college coding club — organizing competitive programming contests, technical workshops, and industry talks.', delay: 'reveal-d5' },
]

export const CONTACT_LINKS = [
  { icon: '✉',  key: 'Email',    val: 'navneetlonare@gmail.com',        href: 'mailto:navneetlonare@gmail.com', accent: false },
  { icon: 'gh', key: 'GitHub',   val: 'github.com/navneet-lonare',      href: 'https://github.com/snipeet03', accent: false },
  { icon: 'li', key: 'LinkedIn', val: 'linkedin.com/in/navneet-lonare', href: 'https://www.linkedin.com/in/navneet-lonare-206b6726b/', accent: false },
  { icon: '↓',  key: 'Resume',   val: 'Download PDF',                   href: '#',                              accent: true  },
]
