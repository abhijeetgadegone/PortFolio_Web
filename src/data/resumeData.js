const resumeData = {
  name: "Abhijeet Gadegone",
  role: "Full Stack Developer",
  tagline: "Java on the backend, React up front, and a habit of shipping things that actually get used.",
  email: "abhijeetgadegone@gmail.com",
  phone: "+91 73784 31660",
  github: "https://github.com/abhijeetgadegone",
  linkedin: "https://linkedin.com/in/abhijeet-gadegone-108a82214",

  about: `I build full-stack web applications end to end — designing the database, wiring up the REST APIs in Spring Boot, and shaping the interface in React. Across two internships I've shipped 5+ production-style applications, cut manual workflow time by up to 40%, and learned that the best code is the kind a real user never has to think about.`,

  stack: [
    { layer: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3"], color: "cyan" },
    { layer: "Backend", items: ["Java", "Spring Boot", "Hibernate", "REST APIs"], color: "amber" },
    { layer: "Database", items: ["MySQL"], color: "violet" },
    { layer: "Tooling", items: ["Git", "GitHub", "Postman", "VS Code", "STS"], color: "cyan" },
  ],

  skills: {
    languages: ["Java (Core & Advanced)", "SQL"],
    javaConcepts: ["OOP", "Collections Framework", "Exception Handling", "Multithreading"],
    frameworks: ["Spring Boot", "Hibernate", "REST APIs"],
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "Spring Tool Suite (STS)"],
    databases: ["MySQL"],
    soft: ["Teamwork & Collaboration", "Mentorship & Knowledge Sharing"],
  },

  experience: [
    {
      company: "INTERNMEETS",
      role: "Full Stack Developer (Intern)",
      period: "May 2025 — Aug 2025",
      stack: ["Java", "Spring Boot", "React", "MySQL", "GitHub"],
      points: [
        "Built 2 full-stack web applications (Zomato & Shaadi.com inspired) with user authentication, search filters, and responsive UI, improving usability for 100+ test users.",
        "Contributed to a live Homoeopathy wellness project by designing 4+ interactive frontend modules and integrating 5+ backend REST APIs, reducing page load time by 30% and enhancing user experience.",
      ],
    },
    {
      company: "Stoic & Salamander Global Corporation",
      role: "Software Developer (Intern)",
      period: "Dec 2024 — Mar 2025",
      stack: ["Java", "Spring Boot", "HTML", "CSS", "React", "MySQL"],
      points: [
        "Developed 3 enterprise-level applications (Payslip Generator, CRM Portal, Expense Report System) that streamlined internal workflows and reduced manual work by 40%.",
        "Designed and implemented 10+ backend APIs and optimized SQL queries, improving data retrieval speed by 25%.",
      ],
    },
  ],

  projects: [
    {
      name: "College Quiz Application",
      description: "A full-stack quiz management system with user registration, login, and score tracking.",
      points: [
        "Implemented REST APIs for quiz creation, question management, and result evaluation.",
        "Designed a relational database schema for storing users, quizzes, and performance data.",
      ],
      tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    },
    {
      name: "CRM Portal",
      description: "A CRM system for managing leads and client interactions.",
      points: [
        "Built secure authentication and role-based access control.",
        "Integrated dynamic data fetching using REST APIs for real-time updates.",
      ],
      tags: ["React", "Spring Boot", "MySQL", "Auth"],
    },
    {
      name: "Homeopathy Wellness",
      description: "A live wellness platform with appointment booking, built around 5+ core modules.",
      points: [
        "Implemented an appointment booking system integrated with backend APIs.",
        "Created 5+ core modules: Home, About Us, Services, Contact, Book Appointment.",
        "Improved navigation efficiency and reduced manual updates through dynamic content rendering.",
      ],
      tags: ["React", "REST API", "UI/UX"],
    },
  ],

  education: [
    {
      school: "Anantrao Pawar College of Engineering and Research (Pune University)",
      degree: "Master of Computer Application (MCA)",
      period: "2023 — 2025",
      detail: "CGPA 8.23",
    },
    {
      school: "Bajaj College of Science, Wardha (Nagpur University)",
      degree: "B.Sc. Computer Science & Electronics",
      period: "2019 — 2022",
      detail: "CGPA 7.72",
    },
  ],

  certificates: [
    "Gen AI Academy — Google Cloud",
    "TCS's Career Edge — Young Professional",
    "Azure Fundamentals — Microsoft",
    "Java Full Stack — Symbiosis University",
  ],
};

export default resumeData;
