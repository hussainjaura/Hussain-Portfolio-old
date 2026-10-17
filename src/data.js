// all my info lives here so i only have to change one file
export const profile = {
  name: 'Hussain',
  fullName: 'Muhammad Hussain Jaura',
  role: 'Full Stack Software Engineer',
  headline: 'Turning ideas into fast, reliable web apps with Full Stack Engineering',
  intro:
    "I'm a Software Engineering student at Solent University in Southampton. I build full stack apps with React, Node.js and Express, ship them to the cloud on AWS, and I'm always looking for the next hard problem to solve.",
  location: 'Southampton, UK',
  email: 'hussainjaura10@gmail.com',
  // put ur photo in public/ with this name
  photo: 'me.jpg',
  // drop the pdf in public/ and set this to 'cv.pdf'
  cv: '',
  socials: {
    github: 'https://github.com/hussainjaura',
    linkedin: 'https://www.linkedin.com/in/muhammad-hussain-jaura-b303482b1/',
    youtube: '',
  },
}

// placeholder till i add my linkedin stuff
export const experience = [
  {
    role: 'Full Stack Developer (Internship)',
    company: 'Jaura & Co',
    location: 'UK',
    period: 'Dates to add',
    logo: 'J&C',
    points: [
      'Built the full e-commerce site with Node.js, Express, MySQL and Sequelize.',
      'Integrated Stripe payments, a persistant cart and AJAX product search.',
      'Added Winston logging, Helmet security headers and Jest unit tests.',
      'Built a real time task manager with MongoDB and Socket.IO.',
    ],
  },
]

export const skills = [
  {
    title: 'Languages',
    items: ['JavaScript', 'SQL', 'Python', 'HTML5', 'CSS3'],
  },
  {
    title: 'Technologies & Frameworks',
    items: ['React', 'Node.js', 'Express.js', 'Vite', 'React Router', 'Socket.IO', 'EJS', 'Mongoose', 'Sequelize', 'Jest'],
  },
  {
    title: 'Cloud, DevOps & Databases',
    items: ['AWS Lambda', 'AWS Amplify', 'GitHub Actions', 'Render', 'Neon', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Git'],
  },
  {
    title: 'Core Competencies',
    items: ['REST API design', 'JWT & session auth', 'Serverless architecture', 'MVC', 'Payments (Stripe)', 'Real time apps', 'Testing & logging', 'Data structures & algorithms'],
  },
]

export const education = [
  {
    school: 'Solent University',
    degree: 'BSc (Hons) Software Engineering',
    location: 'Southampton, UK',
    period: 'Dates to add',
    note: 'Top mark (93%) on the full stack web assessment',
    logo: 'SU',
  },
]

export const different = [
  "I don't stop at the tutorial. Every project I build gets real auth, a real database and a real deploy, because thats where the actual learning happens.",
  "I'm comfortable across the whole stack, from designing a normalised schema and writing triggers, to building REST APIs in Express, to shipping a React UI on AWS. I care about clean code that the next person can read.",
  'I keep my problem solving sharp on LeetCode and I learn fast. Give me a new tool and I will have something running with it by the end of the day.',
]

export const achievements = [
  { title: 'Highest mark, 93%', desc: 'Top grade on the full stack Theme Park assessment at Solent University.', icon: '🏆' },
  { title: 'Serverless app in production', desc: 'HalalNearMe runs live on AWS Lambda and Amplify with real users and auth.', icon: '☁️' },
  { title: 'Internship delivery', desc: 'Shipped a Stripe powered e-commerce site and a real time task app during my internship.', icon: '🚀' },
]

export const projects = [
  {
    name: 'HalalNearMe',
    tag: 'Personal project',
    tech: ['React 19', 'Node.js', 'Express', 'AWS Lambda', 'AWS Amplify', 'PostgreSQL', 'JWT'],
    points: [
      'Finds halal restaurants near you anywhere in the UK with live GPS or city search.',
      'Serverless Express backend on AWS Lambda, frontend hosted on Amplify.',
      'JWT auth with protected routes and saved places in Neon Postgres.',
    ],
    live: 'https://main.d3uol1yp55se1c.amplifyapp.com',
    repo: 'https://github.com/hussainjaura/HalalNearMe',
  },
  {
    name: 'Jaura & Co Clothing',
    tag: 'Internship project',
    tech: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Stripe', 'Jest'],
    points: [
      'Full e-commerce store with accounts, cart and Stripe checkout.',
      'Persistant cart in MySQL through the Sequelize ORM.',
      'Winston logging, Helmet security and Jest tests.',
    ],
    live: 'https://jaura-co-website.onrender.com',
    repo: 'https://github.com/hussainjaura/Jaura-Co-Website',
  },
  {
    name: 'Online Retail Database',
    tag: 'University assessment',
    tech: ['SQLite', 'SQL', 'Python', 'Tkinter'],
    points: [
      'Taken from business requirements to 3NF with a 6 table ERD.',
      'Triggers keep stock in sync, views power the reports.',
      'Python desktop app with CRUD and parameterised queries.',
    ],
    repo: 'https://github.com/hussainjaura/online-retail-database',
  },
  {
    name: 'Task Manager',
    tag: 'Internship project',
    tech: ['Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    points: [
      'Add, edit, star and complete tasks with live updates.',
      'Real time sync across clients with WebSockets.',
      'Mongoose schemas with env based config.',
    ],
    live: 'https://task-manager-hoaa.onrender.com',
    repo: 'https://github.com/hussainjaura/Task-Manager',
  },
  {
    name: 'Theme Park Website',
    tag: 'University assessment · 93%',
    tech: ['Node.js', 'Express', 'SQLite3', 'EJS', 'AJAX'],
    points: [
      'Rides, tickets, events and FAQ pages driven by SQLite.',
      'AJAX filtering and a spin the wheel discount game.',
      'Got the highest mark in the assessment.',
    ],
    repo: 'https://github.com/hussainjaura/Theme-Park',
  },
]
