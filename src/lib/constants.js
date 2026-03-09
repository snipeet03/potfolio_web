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
    file: 'pdf_qa_rag.py', lang: 'Python', icon: '📄', cls: 'b1',
    name: 'PDF Question Answering System (RAG)',
    desc: 'A system that answers questions from PDF documents using Retrieval Augmented Generation and vector search. Combines semantic similarity search with LLM reasoning for accurate, context-aware answers.',
    tags: ['Python', 'LangChain', 'Astra DB', 'OpenAI API', 'RAG'],
    links: [{ label: '⌥ GitHub ↗', href: '#' }, { label: '▶ Live Demo ↗', href: '#' }],
    delay: '',
  },
  {
    file: 'movie_app.jsx', lang: 'React', icon: '🎬', cls: 'b2',
    name: 'Movie Web Application',
    desc: 'Trending and popular movies browser with global state management and smooth navigation using Redux.',
    tags: ['React', 'Redux', 'React Router'],
    links: [{ label: '⌥ GitHub ↗', href: 'https://github.com/snipeet03/react-movie-app' },  { label: '▶ Live Demo ↗', href: 'https://react-movie-app-4to9.vercel.app/' }],
    delay: 'reveal-d2',
  },
  {
    file: 'video_platform.js', lang: 'Node.js', icon: '▶', cls: 'b3',
    name: 'Video Hosting Platform',
    desc: 'Full backend platform with video uploads, comments, likes, subscriptions and JWT-based authentication.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    links: [{ label: '⌥ GitHub ↗', href: 'https://github.com/snipeet03/videoTube-backend' }],
    delay: 'reveal-d1',
  },
  {
    file: 'inventory_mgmt.py', lang: 'Django', icon: '🏭', cls: 'b4',
    name: 'Inventory & Assembly Management System',
    desc: 'Manufacturing system built during Bosch internship to automate machine performance tracking, workflow analytics, and real-time dashboards for manufacturing data monitoring.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Bosch Limited'],
    links: [{ label: '⌥ GitHub ↗', href: 'https://github.com/snipeet03/Inventory-Management-' }, { label: '📄 Case Study ↗', href: '#' }],
    delay: 'reveal-d2',
  },
  
]

export const ACHIEVEMENTS = [
  { emoji: '🏆', title: 'Top 51 / 1400+ Teams',    sub: 'Hack AI · IIT Bombay',      desc: "Competed against 1400+ teams at India's premier AI hackathon hosted by IIT Bombay. Placed in the top 51 nationwide.", delay: 'reveal-d1' },
  { emoji: '⚡', title: '150+ Problems Solved',     sub: 'LeetCode · DSA',            desc: 'Consistent problem-solving discipline across arrays, trees, graphs, DP, and system design fundamentals on LeetCode.', delay: 'reveal-d2' },
  { emoji: '🚀', title: '20+ Hackathons',           sub: 'National & College Level',  desc: 'Active participant across national and college-level hackathons — building full products under tight 24-48 hour deadlines.', delay: 'reveal-d3' },
  { emoji: '📜', title: 'Full Stack Certification', sub: '100xDevs · Web Development',desc: 'Completed the rigorous 100xDevs full-stack web development program covering React, Node.js, databases, and system design.', delay: 'reveal-d4' },
  { emoji: '👑', title: 'President — Coding Club',  sub: 'GHRCEMN · 2024–2025',      desc: 'Leading the college coding club — organizing competitive programming contests, technical workshops, and industry talks.', delay: 'reveal-d5' },
]

export const CONTACT_LINKS = [
  { icon: '✉',  key: 'Email',    val: 'navneetlonare@gmail.com',        href: 'mailto:navneetlonare@gmail.com', accent: false },
  { icon: 'gh', key: 'GitHub',   val: 'github.com/navneet-lonare',      href: 'https://github.com/',            accent: false },
  { icon: 'li', key: 'LinkedIn', val: 'linkedin.com/in/navneet-lonare', href: 'https://linkedin.com/',          accent: false },
  { icon: '↓',  key: 'Resume',   val: 'Download PDF',                   href: '#',                              accent: true  },
]
