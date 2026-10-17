// all my info lives here so i only have to change one file
export const profile = {
  name: 'Hussain Jaura',
  fullName: 'Muhammad Hussain Jaura',
  role: 'Full Stack Software Engineer',
  location: 'Southampton, UK',
  email: 'hussainjaura10@gmail.com',
  tagline:
    'Software Engineering student at Solent University building full stack web apps with React, Node.js, Express and the cloud.',
  // drop the pdf in public/ and set this to 'cv.pdf'
  cv: '',
  socials: {
    github: 'https://github.com/hussainjaura',
    linkedin: 'https://www.linkedin.com/in/muhammad-hussain-jaura-b303482b1/',
    youtube: '',
  },
}

export const about = [
  "I'm a Software Engineering student at Solent University, Southampton, with a real interest in full stack web development and backend engineering. I mostly build with Node.js, Express, MongoDB, MySQL and PostgreSQL on the backend and React on the front, and I care a lot about clean, responsive UIs that actually feel nice to use.",
  "I've built RESTful APIs, auth systems with JWT and sessions, real time features with Socket.IO and payments with Stripe, and I've shipped serverless apps on AWS Lambda and Amplify. Outside uni I keep sharp on LeetCode working through data structures and algorithms.",
  "I like clean code, working in a team and learning new stuff all the time. Right now I'm looking for a full stack engineering role where I can ship real products and keep growing as a developer.",
]

export const stats = [
  { value: '5+', label: 'Projects shipped' },
  { value: '2', label: 'Years building' },
  { value: '93%', label: 'Top assessment mark' },
]

// placeholder till i add my linkedin stuff
export const experience = [
  {
    title: 'Full Stack Developer (Internship / Placement)',
    company: 'Jaura & Co',
    period: 'Dates to add',
    location: 'UK',
    points: [
      'Built a full e-commerce site with Node.js, Express, MySQL and Sequelize.',
      'Integrated Stripe payments, a persistant cart and AJAX product search.',
      'Added Winston logging, Helmet security and Jest unit tests.',
      'Also built a real time task manager with MongoDB and Socket.IO.',
    ],
  },
]

export const education = [
  {
    school: 'Solent University, Southampton',
    degree: 'BSc (Hons) Software Engineering',
    period: 'Dates to add',
    points: [
      'Full stack theme park site got 93%, the highest mark in the assessment.',
      'Relational database design, normalisation to 3NF, SQL and Python.',
    ],
  },
]

export const projects = [
  {
    name: 'HalalNearMe',
    tag: 'Personal project',
    desc: 'Full stack app that finds halal restaurants near you anywhere in the UK using live GPS or a city search, with accounts and saved places.',
    tech: ['React 19', 'Vite', 'Node.js', 'Express', 'AWS Lambda', 'AWS Amplify', 'PostgreSQL', 'JWT'],
    points: [
      'Serverless backend on AWS Lambda, frontend on Amplify',
      'JWT auth with protected routes and saved restaurants in Neon Postgres',
      'Haversine distance filter and Foursquare Places API',
    ],
    live: 'https://main.d3uol1yp55se1c.amplifyapp.com',
    repo: 'https://github.com/hussainjaura/HalalNearMe',
    featured: true,
  },
  {
    name: 'Jaura & Co Clothing',
    tag: 'Internship project',
    desc: 'E-commerce clothing store with accounts, a persistant cart, Stripe checkout and a secure, tested backend.',
    tech: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'EJS', 'Stripe', 'Jest', 'Winston'],
    points: [
      'Stripe payments and session based auth',
      'Cart saved in MySQL via Sequelize ORM',
      'Logging, error handling and unit tests',
    ],
    live: 'https://jaura-co-website.onrender.com',
    repo: 'https://github.com/hussainjaura/Jaura-Co-Website',
    featured: true,
  },
  {
    name: 'Online Retail Database',
    tag: 'University assessment',
    desc: 'Relational database for an online store taken from requirements to 3NF, an ERD and a working SQLite build with a Python desktop app on top.',
    tech: ['SQLite', 'SQL', 'Python', 'Tkinter', 'XML'],
    points: [
      'Triggers that keep stock in sync and log every movement',
      'Reporting views, indexes checked with EXPLAIN QUERY PLAN',
      'Tkinter CRUD app with parameterised queries',
    ],
    repo: 'https://github.com/hussainjaura/online-retail-database',
  },
  {
    name: 'Task Manager',
    tag: 'Internship project',
    desc: 'Real time productivity app for adding, starring and completing tasks with live updates across clients.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Socket.IO'],
    points: [
      'Real time sync with WebSockets',
      'Priority indicators and live date and time',
      'Mongoose schemas and env based config',
    ],
    live: 'https://task-manager-hoaa.onrender.com',
    repo: 'https://github.com/hussainjaura/Task-Manager',
  },
  {
    name: 'Theme Park Website',
    tag: 'University assessment · 93%',
    desc: 'Database driven theme park site with rides, tickets and events pages plus a spin the wheel discount game.',
    tech: ['Node.js', 'Express', 'SQLite3', 'EJS', 'AJAX'],
    points: [
      'AJAX filtering for events and rides',
      'Coupon generator game',
      'Highest mark in the assessment',
    ],
    repo: 'https://github.com/hussainjaura/Theme-Park',
  },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'SQL', 'Python', 'HTML5', 'CSS3'] },
  { group: 'Frontend', items: ['React', 'Vite', 'React Router', 'EJS', 'AJAX', 'Responsive design'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT auth', 'Socket.IO', 'Stripe'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Sequelize', 'Mongoose'] },
  { group: 'Cloud & DevOps', items: ['AWS Lambda', 'AWS Amplify', 'Neon', 'Render', 'GitHub Actions', 'GitHub Pages'] },
  { group: 'Tools & practices', items: ['Git & GitHub', 'Postman', 'Jest', 'Winston', 'Helmet', 'MVC', 'npm'] },
]
