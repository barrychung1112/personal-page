import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    elixir,
    access,
    threejs,
    vue,
    java,
    ucfunnel,
    cathaylife,
    googlecloud,
    n8n,
    nestjs,
    salesforce,
    sitecore,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI Agent Engineer",
      icon: creator,
    },
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "System Analyst",
      icon: backend,
    },
    {
      title: "Cloud & Automation Builder",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue JS",
      icon: vue,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "elixir",
      icon: elixir,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "AI Agent Engineer",
      company_name: "GroundShift",
      icon: creator,
      iconBg: "#FFFFFF",
      date: "Jul 2025 - Jan 2026",
      points: [
        "Built a multi-AI-agent product from 0 to 1 to calculate, optimize, and report carbon emissions against ISO 14067 requirements.",
        "Developed workflows and product features with n8n, prompt engineering, Google ADK, Nest.js, MCP tools, and React.js.",
        "Led product development strategy and growth planning for a company selected by the Google Startup 100 program.",
      ],
    },
    {
      title: "Student Developer - University IT Team",
      company_name: "Oregon State University",
      icon: backend,
      iconBg: "#FFFFFF",
      date: "Nov 2024 - Present",
      points: [
        "Built Salesforce Apex services and Lightning Web Components that simplified committee-member lookup and status actions.",
        "Reduced average request handling time by about 35% using Apex, LWC, HTML, and CSS.",
        "Managed Slate application workflows with partner departments while maintaining a 100% case-solving rate.",
      ],
    },
    {
      title: "Software Programmer - E-Commerce Information Department",
      company_name: "Cathay Life Insurance Company, Ltd.",
      icon: cathaylife,
      iconBg: "#FFFFFF",
      date: "Mar 2022 - Jul 2024",
      points: [
        "Maintained a large-scale Java financial information system and created batch and inspection systems to reduce risk of company losses.",
        "Revamped a Vue + Sitecore marketing site, improving online insurance penetration by 17% and O2O conversion by 20% within 3 months.",
        "Launched a remote time-clock feature that scaled to 60k daily check-ins with peaks above 1k check-ins per minute using Java and DB2.",
        "Co-developed Cathay Walker Plus, connecting activity data to premium incentives for 570k+ users while mentoring new engineers.",
      ],
    },
    {
      title: "Master of Engineering, Computer Science",
      company_name: "Oregon State University",
      icon: web,
      iconBg: "#E6DEDD",
      date: "Sep 2024 - Jun 2026",
      points: [
        "Pursuing graduate work in computer science in Corvallis, Oregon with a 3.5 GPA.",
        "Focused coursework includes Parallel Programming, Explainable AI, and Graph Neural Networks.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "ACCESS Taiwan Lab Co., Ltd.",
      icon: access,
      iconBg: "#FFFFFF",
      date: "Jul 2020 - Feb 2021",
      points: [
        "Developed and maintained web applications with React.js and related frontend technologies.",
        "Built backend systems with Elixir and MongoDB while collaborating across product and engineering teams.",
      ],
    },
    {
      title: "React Developer",
      company_name: "ucfunnel Co., Ltd.",
      icon: ucfunnel,
      iconBg: "#FFFFFF",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developed and maintained a KOL e-commerce system with React.js.",
        "Integrated social media APIs and payment gateway APIs to improve user experience.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Carbon Emissions AI Agent Platform",
      description:
        "A multi-agent system for GroundShift that calculates and optimizes carbon emissions, then generates ISO 14067-aligned professional reports.",
      tags: [
        {
          name: "google-adk",
          color: "blue-text-gradient",
        },
        {
          name: "n8n",
          color: "green-text-gradient",
        },
        {
          name: "nestjs",
          color: "pink-text-gradient",
        },
      ],
      metric: "ISO 14067",
      accent: "from-emerald-400 via-cyan-400 to-sky-500",
      visual: "AI",
      icons: [
        { name: "Google Cloud", icon: googlecloud },
        { name: "n8n", icon: n8n },
        { name: "NestJS", icon: nestjs },
      ],
      source_code_link: "",
    },
    {
      name: "Cathay Digital Insurance Growth",
      description:
        "A Vue + Sitecore marketing-site revamp that improved SEO and customer flows, lifting online insurance penetration by 17% and O2O conversion by 20%.",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "sitecore",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      metric: "+20% O2O conversion",
      accent: "from-indigo-400 via-violet-400 to-fuchsia-500",
      visual: "17%",
      icons: [
        { name: "Sitecore", icon: sitecore },
        { name: "Vue", icon: vue },
      ],
      source_code_link: "",
    },
    {
      name: "Salesforce University IT Workflow",
      description:
        "A Salesforce Apex and Lightning Web Components workflow that simplified committee-member lookup and status actions, reducing request handling time by about 35%.",
      tags: [
        {
          name: "apex",
          color: "blue-text-gradient",
        },
        {
          name: "lwc",
          color: "green-text-gradient",
        },
        {
          name: "html-css",
          color: "pink-text-gradient",
        },
      ],
      metric: "-35% handling time",
      accent: "from-amber-300 via-orange-400 to-rose-500",
      visual: "LWC",
      icons: [
        { name: "Salesforce", icon: salesforce },
      ],
      source_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
