export const portfolioData = {
  personal: {
    name: 'Dananjaya Atapattu',
    role: 'Software Engineering Undergraduate',
    bio: 'Passionate software engineering undergraduate with hands-on experience in full-stack development, building scalable web applications using technologies such as React.js, Vue.js, Node.js, Spring Boot, and Firebase. I enjoy transforming ideas into practical digital solutions and have experience developing real-world client projects from requirement gathering to deployment. Driven by problem-solving and continuous learning, I am committed to creating clean, efficient, and user-focused software solutions. ',
    avatar: '👨‍💻',
    avatarImage: '/src/assets/That one time.webp',
    location: 'Colombo, Sri Lanka',
    email: 'dananjaya24945@gmail.com',
    linkedin: 'linkedin.com/in/madhawa-dananjaya-/',
    github: 'github.com/it24104290',
    status: 'Open to opportunities',
  },
  

  skills: [
    'React',
    'Node.js',
    'Spring Boot',
    'Java',
    'MsSQL',
    'PostgreSQL',
    'Docker',
    'OOP',
    'Git',
    'Agile',
    'system administration',
    'device configuration',
    'troubleshooting',
  ],

  skillsWithProficiency: [
    { name: 'React', proficiency: 85 },
    { name: 'Node.js', proficiency: 80 },
    { name: 'Spring Boot', proficiency: 78 },
    { name: 'Java', proficiency: 82 },
    { name: 'SQL (MsSQL/PostgreSQL)', proficiency: 82 },
    { name: 'JavaScript/TypeScript', proficiency: 85 },
    { name: 'DevOps', proficiency: 75 },
    { name: 'System Administration', proficiency: 80 },
    { name: 'Git & Version Control', proficiency: 85 },
    { name: 'Troubleshooting & Support', proficiency: 88 },
  ],

  experience: [

    {
      id: 'exp1',
      role: 'Application Support Engineer - Trainee',
      company: 'Breadcrumbs Innovations (Pvt) Ltd',
      date: 'Nov 2025 – Feb 2026 · 3 months',
      description:
        'Collaborated with a Tech Lead and two Associate Engineers to deliver effective application support services. Supported system implementations and performed application configurations for client deployments. Deployed client systems using IIS and Docker, applying DevOps practices to ensure consistent, reliable, and efficient deployments. Assisted with environment setup, troubleshooting, and post-deployment support to ensure smooth client onboarding.',
      tags: ['React', '.Net', 'MsSQL', 'IIS', 'DevOps', 'SSRS'],
    },

    {
      id: 'exp2',
      role: 'IT Infrastructure Intern',
      company: 'Infomate (Pvt) Ltd',
      date: 'Feb 2025 – Aug 2025 · 6 months',
      description:
        "Delivered end-user technical support by troubleshooting software, login, and system issues while minimizing downtime. Streamlined onboarding processes by managing account creation, access provisioning, and permission control for new employees. Maintained and configured IT infrastructure including device setup and asset management. Managed helpdesk tickets and contributed to IT audits ensuring timely issue resolution, accurate asset tracking, and system compliance.",
      tags: ['System Administration', 'Device Configuration', 'Troubleshooting', 'MsSQL', 'React',],
    },
    
    {
      id: 'exp3',
      role: 'Internship Trainee',
      company: 'Sampath Bank PLC',
      date: 'Mar 2024 – Sep 2024 · 7 months',
      description:
        'Assisted in maintaining internal systems and wrote automation scripts in Python to reduce manual data entry tasks by 60%. Provided technical support and documented system workflows.',
      tags: ['Crib Analysis', 'SQL', 'Linux', 'Bash'],
    },
  ],

  projects: [
    {
      id: 'p1',
      icon: '🛒',
      title: 'Cakies! — Product and Order Management System',
      description:
        'A full-stack web application built for two local cake artists to manage products and orders. Designed and implemented both frontend and backend, working closely with the artists throughout the project to gather requirements and understand their business needs. Features include user-friendly product management, real-time order tracking, customer interactions, and integrated Stripe payment processing. Deployed with responsive design for seamless access across all devices.',
      tags: ['React', 'Node.js', 'Firebase', 'Stripe'],
      images: [
        'src/assets/cakies!.png',
        'src/assets/Cakies! artstPortal.png',
        'src/assets/cakies! order.png',
      ],
      links: [
        { label: 'GitHub', href: 'https://github.com/it24104290/cakies-react2' },
        { label: 'Live Demo', href: 'https://cakies-react2.web.app/' },
      ],
    },
    {
      id: 'p2',
      icon: '🏥',
      title: 'True Life — Health Insurance Management System',
      description:
        'A full-stack Health Insurance Management System developed as a Year 2 Semester 1 university group project, emphasizing enterprise-level backend architecture, database integration, and modular system design. Built with Java backend, HTML, CSS, and MSSQL database. Contributed by implementing the review and feedback management system, and containerized and deployed the entire system using Docker for scalable, consistent deployments across environments.',
      tags: ['Java', 'HTML', 'CSS', 'MSSQL', 'Docker'],
      images: [
        'src/assets/healthMain.jfif',
        'src/assets/healthFeed.jfif',
        'src/assets/HealthPol.jfif',
      ],
      liveNote: 'The system is deployed using Docker. You can try it by your ip address and port 8080 (e.g., http://localhost:8080) after running the Docker container.',
      links: [
        { label: 'GitHub', href: '#' },
        { label: 'Live Demo', href: '#' },
      ],
    },
    {
      id: 'p3',
      icon: '🤖',
      title: 'Personal Portfolio web application',
      description:
        'Developed and hosted a responsive personal portfolio website to showcase my projects, technical skills, and professional experience. Built using React.js and CSS with a clean, modern user interface focused on user experience and accessibility. Integrated EmailJS to enable direct communication through a functional contact form. Designed the portfolio to provide a professional overview of my background and development work.',
      tags: ['React', 'Vite', 'CSS', 'JavaScript'],
      images: [
        'https://via.placeholder.com/600x400?text=StudyBot+Chat',
        'https://via.placeholder.com/600x400?text=PDF+Upload',
        'https://via.placeholder.com/600x400?text=AI+Responses',
      ],
      links: [{ label: 'GitHub', href: '#' }],
    },
    {
      id: 'p5',
      icon: '📋',
      title: 'Student Course Management System',
      description:
        'Developed a comprehensive student course management system featuring login validation, user authentication, and CRUD operations with UI enhancements. Specifically led the review management feature, implementing both frontend and backend functionality with database integration to enable students to submit and view course reviews. ',
      tags: ['Java', 'Spring Boot', 'HTML', 'CSS',],
      images: [
        'https://via.placeholder.com/600x400?text=Course+Dashboard',
        'https://via.placeholder.com/600x400?text=Review+Management',
        'https://via.placeholder.com/600x400?text=Student+Portal',
      ],
      links: [{ label: 'GitHub', href: '#' }],
    },
    {
      id: 'p6',
      icon: '📊',
      title: 'Water Level Monitoring System - IOT Project',
      description: [
        ' Designed and developed a Water level monitoring System with Arduino and ultrasonic sensor which can measure the water level by indicating the LED of Red, Yellow and Green.(After the Red indicates motor will trigger and start pumping the water until the green LED turns on)',
        'Designed the structure and implemented the code with C++ to control the ultrasonic sensor and LED indicators, ensuring accurate water level detection and real-time monitoring.',
      ],
      tags: ['Arduino', 'C++', 'IOT'],
      video: 'path/to/your/video.mp4',
      links: [{ label: 'GitHub', href: '#' }],
    },
  ],

  education: [
    {
      id: 'edu1',
      icon: '🎓',
      degree: 'BSc (Hons) Software Engineering',
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      years: '2024 – Present · Year 3',
      note: [
        'OOP - A (91.6% of CA weight)'
      ],
    },
    {
      id: 'edu2',
      icon: '📚',
      degree: 'G.C.E. Advanced Level — Engineering Technology',
      institution: 'Nalanda College, Colombo 10',
      years: '2023',
      note: 'Results: 3Cs',
    },

    {
      id: 'edu3',
      icon: '📜',
      degree: 'G.C.E. Ordinary Level',
      institution: 'Nalanda College, Colombo 10',
      years: '2017',
      note: 'Results: 8As, 1B',
    }
  ],

  certifications: [
    {
      name: 'Web Development',
      issuer: 'Informatics Institute of Technology (IIT)',
      year: '2025',
    },
    {
      name: 'Cambridge English Level 2 - PET',
      issuer: 'Cambridge University',
      year: '2016',
    },
    
  ],

  social: [
    {
      id: 'c1',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
      label: 'Mobile',
      value: '0718923486/Whatsapp',
    },
    {
      id: 'c2',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
      label: 'Instagram',
      value: 'instagram.com/your_handle',
    },
    {
      id: 'c3',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
      label: 'LinkedIn',
      value: 'linkedin.com/in/madhawa-dananjaya-/',
    },
    {
      id: 'c4',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      label: 'GitHub',
      value: 'github.com/it24104290',
    },
  ],
}
