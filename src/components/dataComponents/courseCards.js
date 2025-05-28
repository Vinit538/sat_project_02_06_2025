const courseCards = [
  {
    id: "satC1",
    title: "DATA ENGINEERING",
    image: "/images/Data_Engineering.jpg",
    subCourses: ["DATA ENGINEERING with AWS", "DATA ENGINEERING with AZURE"],
    technologies: ["Python", "SQL", "Apache Spark", "Hadoop", "Airflow", "AWS", "Azure", "Data Warehousing","MongoDB"],
    duration: "3 months",
    highlights: [
      "Real-time data pipeline projects",
      "Beginner to job-ready",
      "Industry experts as mentors"
    ],
    courseLink: "/courses/data-engineering",
    brochureLink: "/brochures/data-engineering.pdf",
    description: "Master the art of building scalable data pipelines, managing big data infrastructure, and using modern cloud platforms.",
    audience: ["Graduates", "IT Professionals", "Career Switchers"],
    toolsUsed: ["Apache Airflow", "Kafka", "Glue", "Athena","Python","Sql"],
    modules: [
      { title: "Python for Data Engineering", content: "Core Python, Data Wrangling" },
      { title: "Batch & Stream Processing", content: "Spark, Kafka, Hadoop" }
    ],
    outcomes: [
      "Design scalable data pipelines",
      "Work with cloud-native data tools",
      "Handle large-scale data processing"
    ],
    capstoneProject: "End-to-end Data Lake on AWS with batch + streaming ingestion",
    fee: {
      amount: "₹24,999",
      discount: "₹19,999",
      emiAvailable: true
    },
    tags: ["data", "cloud", "etl", "big data"],
  },
  {
    id: "satC2",
    title: "DATA ANALYST",
    image: "/images/Data_Analyst.jpg",
    subCourses: ["DATA ANALYST with Business Intelligence"],
    technologies: ["Excel", "My SQL","SQLite","PostgreSQL", "Tableau", "Power BI", "Python", "Data Visualization"],
    duration: "2.5 months",
    highlights: [
      "Hands-on dashboards & reports",
      "Business-focused real-time datasets",
      "Mock interviews & resume support"
    ],
    courseLink: "/courses/data-analyst",
    brochureLink: "/brochures/data-analyst.pdf",
    description: "Learn to analyze data, generate actionable insights, and create impactful dashboards and reports using modern BI tools.",
    audience: ["Graduates", "Business Analysts", "Aspiring Data Professionals"],
    toolsUsed: ["Excel", "Tableau", "Power BI", "SQL", "Python"],
    modules: [
      { title: "Data Analysis Fundamentals", content: "Excel basics, SQL querying" },
      { title: "Data Visualization", content: "Tableau, Power BI dashboards" },
      { title: "Advanced Analytics", content: "Python for data analysis, statistical concepts" }
    ],
    outcomes: [
      "Create interactive dashboards",
      "Perform complex data queries",
      "Communicate data-driven insights effectively"
    ],
    capstoneProject: "Business Intelligence dashboard for sales and marketing data",
    fee: {
      amount: "₹19,999",
      discount: "₹15,999",
      emiAvailable: true
    },
    tags: ["data", "business intelligence", "analytics", "visualization"],
  },
  {
    id: "satC3",
    title: "DATABASE ADMINISTRATION",
    image: "/images/Data_Adaministration.jpg",
    subCourses: [
      "DATABASE ADMINISTRATION with MS SQL",
      "DATABASE ADMINISTRATION with AZURE",
      "DATABASE ADMINISTRATION with AWS",
      "DATABASE ADMINISTRATION with GCP",
      "Oracle DB",
      "MySQL DB"
    ],
    technologies: ["MS SQL Server", "Oracle", "MySQL", "Cloud DB", "Backup & Recovery", "Performance Tuning"],
    duration: "3 months",
    highlights: [
      "Multi-platform cloud DB training",
      "Hands-on admin tasks & monitoring",
      "Job-ready certification assistance"
    ],
    courseLink: "/courses/database-administration",
    brochureLink: "/brochures/database-administration.pdf",
    description: "Master administration and maintenance of databases across cloud and on-premise platforms.",
    audience: ["IT Professionals", "DBAs", "System Administrators"],
    toolsUsed: ["MS SQL Server", "Oracle", "MySQL", "AWS RDS", "Azure SQL", "Cloud Monitoring Tools"],
    modules: [
      { title: "Database Fundamentals", content: "SQL, normalization, schema design" },
      { title: "DB Administration", content: "Backup, recovery, performance tuning" },
      { title: "Cloud Databases", content: "AWS RDS, Azure SQL, monitoring and scaling" }
    ],
    outcomes: [
      "Manage enterprise databases effectively",
      "Implement backup and recovery strategies",
      "Optimize database performance"
    ],
    capstoneProject: "Deploy and monitor a cloud-based multi-database solution",
    fee: {
      amount: "₹22,999",
      discount: "₹18,499",
      emiAvailable: true
    },
    tags: ["database", "admin", "cloud", "sql"],
  },
  {
    id: "satC4",
    title: "CAD DESIGNING",
    image: "/images/CadCourse.jpg",
    subCourses: [],
    technologies: ["AutoCAD", "SolidWorks", "Fusion 360", "CATIA","Creo (Pro/ENGINEER)","SketchUp","Revit","ANSYS/Autodesk Inventor "],
    duration: "2 months",
    highlights: [
      "Industry-standard CAD tools",
      "Design to prototype workflows",
      "Live mechanical & civil projects"
    ],
    courseLink: "/courses/cad-designing",
    brochureLink: "/brochures/cad-designing.pdf",
    description: "Learn 2D and 3D design and drafting using leading CAD software for engineering applications.",
    audience: ["Engineering Students", "Designers", "Mechanical & Civil Engineers"],
    toolsUsed: ["AutoCAD", "SolidWorks", "Fusion 360", "CATIA"],
    modules: [
      { title: "2D Drafting", content: "Basic drawing, dimensioning, annotation in AutoCAD" },
      { title: "3D Modeling", content: "SolidWorks and Fusion 360 basics" },
      { title: "Advanced CAD", content: "CATIA design and assemblies" }
    ],
    outcomes: [
      "Create professional engineering drawings",
      "Develop 3D models and prototypes",
      "Use CAD tools for project workflows"
    ],
    capstoneProject: "Design and prototype a mechanical assembly using SolidWorks",
    fee: {
      amount: "₹14,999",
      discount: "₹11,999",
      emiAvailable: false
    },
    tags: ["design", "cad", "engineering", "drafting"],
  },
  {
    id: "satC5",
    title: "FULLSTACK DEVELOPER",
    image: "/images/Fullstack_Developer.jpg",
    subCourses: [],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Core Java","Spring Boot", "REST API","My Sql","Git","Vercel Deployment"],
    duration: "4 months",
    highlights: [
      "Frontend + Backend projects",
      "Deploy on cloud (Netlify, Vercel)",
      "Git, CI/CD, Agile practices"
    ],
    courseLink: "/courses/java-fullstack",
    brochureLink: "/brochures/java-fullstack.pdf",
    description: "Become a proficient full stack developer building modern web applications from frontend to backend.",
    audience: ["Beginners", "Web Developers", "Software Engineers"],
    toolsUsed: ["VS Code", "Git", "Node.js", "MongoDB", "React"],
    modules: [
      { title: "Frontend Development", content: "HTML, CSS, JavaScript, React basics" },
      { title: "Backend Development", content: "Node.js, Express, REST APIs" },
      { title: "Database & Deployment", content: "MongoDB, cloud deployment, CI/CD" }
    ],
    outcomes: [
      "Build responsive web applications",
      "Develop RESTful APIs",
      "Deploy applications on cloud platforms"
    ],
    capstoneProject: "Fullstack MERN web app with user authentication and API integration",
    fee: {
      amount: "₹29,999",
      discount: "₹24,999",
      emiAvailable: true
    },
    tags: ["web", "fullstack", "javascript", "mern"],
  },
  {
    id: "satC6",
    title: "ARTIFICIAL INTELLIGENCE",
    image: "/images/AI.jpg",
    subCourses: [],
    technologies: ["Python", "NumPy", "Pandas","Keras","PyTorch","OpenCV","TensorFlow", "Scikit-learn", "Neural Networks"],
    duration: "3.5 months",
    highlights: [
      "Real-world AI & ML models",
      "Deep Learning basics to advanced",
      "Mini AI projects with deployment"
    ],
    courseLink: "/courses/artificial-intelligence",
    brochureLink: "/brochures/artificial-intelligence.pdf",
    description: "Dive into AI concepts, machine learning algorithms, and deep learning frameworks to build intelligent systems.",
    audience: ["Students", "Developers", "Data Scientists"],
    toolsUsed: ["Python", "TensorFlow", "Scikit-learn", "Keras"],
    modules: [
      { title: "Machine Learning Basics", content: "Supervised & unsupervised learning" },
      { title: "Deep Learning", content: "Neural networks, CNNs, RNNs" },
      { title: "AI Applications", content: "NLP, computer vision, AI project deployment" }
    ],
    outcomes: [
      "Build ML models using Python",
      "Design neural network architectures",
      "Deploy AI applications"
    ],
    capstoneProject: "AI-powered image classification and sentiment analysis projects",
    fee: {
      amount: "₹34,999",
      discount: "₹29,999",
      emiAvailable: true
    },
    tags: ["ai", "ml", "deeplearning", "python"],
  },
  {
    id: "satC7",
    title: "SAP",
    image: "/images/Sap.jpg",
    subCourses: ["SAP S/4 HANA", "SAP BW/4 HANA"],
    technologies: ["SAP FICO", "SAP HANA", "SAP ABAP", "SAP BI","SAP MM","SAP HCM","SAP CRM","SAP PM","SAP ABAP"],
    duration: "3 months",
    highlights: [
      "ERP solution-focused training",
      "Live SAP environment access",
      "Modules with business process flows"
    ],
    courseLink: "/courses/sap",
    brochureLink: "/brochures/sap.pdf",
    description: "Learn SAP ERP with experience, core modules, real-time workflows, system configuration, and functional integration.",
    audience: ["Finance Professionals", "Consultants", "IT Professionals"],
    toolsUsed: ["SAP GUI", "SAP HANA Studio", "SAP FICO modules"],
    modules: [
      { title: "SAP Basics & Navigation", content: "SAP environment and modules overview" },
      { title: "SAP FICO", content: "Financial Accounting & Controlling" },
      { title: "SAP BW/4 HANA", content: "Data warehousing and reporting" }
    ],
    outcomes: [
      "Use SAP ERP tools effectively",
      "Understand business process integration",
      "Manage financial and data modules"
    ],
    capstoneProject: "Implement SAP FICO scenario for business process simulation",
    fee: {
      amount: "₹27,999",
      discount: "₹22,999",
      emiAvailable: true
    },
    tags: ["erp", "sap", "finance", "business"],
  },
  {
    id: "satC8",
    title: "IT SERVICE DESK MANAGER",
    image: "/images/it_desk.jpg",
    subCourses: [
      "IT Service Management with ITIL",
      "Helpdesk Operations & Support",
      "Incident & Change Management"
    ],
    technologies: [
      "ITIL Framework", "ServiceNow", "Ticketing Tools", "Active Directory",
      "Remote Support Tools", "Monitoring Tools"
    ],
    duration: "2.5 months",
    highlights: [
      "Real-world service desk simulations",
      "ITIL process lifecycle training",
      "Ticket handling and escalation flows"
    ],
    courseLink: "/courses/it-service-desk",
    brochureLink: "/brochures/it-service-desk.pdf",
    description: "Learn ITIL-based service desk management, helpdesk operations, and incident/change management.",
    audience: ["IT Professionals", "Support Engineers", "Service Desk Managers"],
    toolsUsed: ["ServiceNow", "JIRA", "Active Directory", "Remote Desktop Tools"],
    modules: [
      { title: "ITIL Foundations", content: "Service management concepts and lifecycle" },
      { title: "Helpdesk Operations", content: "Ticketing, incident management" },
      { title: "Tools & Monitoring", content: "ServiceNow, monitoring dashboards" }
    ],
    outcomes: [
      "Manage IT service desk operations",
      "Implement ITIL best practices",
      "Handle service incidents efficiently"
    ],
    capstoneProject: "Simulate IT service desk operations using ServiceNow",
    fee: {
      amount: "₹17,999",
      discount: "₹14,999",
      emiAvailable: true
    },
    tags: ["itil", "helpdesk", "service desk", "it"],
  },
  {
    id: "satC9",
    title: "DIGITAL MARKETING",
    image: "/images/digital-marketing.jpg",
    subCourses: [
      "SEO & SEM",
      "Social Media Marketing",
      "Email & Content Marketing",
      "Analytics & Campaign Optimization"
    ],
    technologies: [
      "Google Ads", "Facebook Ads", "SEO Tools", "Google Analytics",
      "Canva", "WordPress", "Ahrefs", "Mailchimp"
    ],
    duration: "2.5 months",
    highlights: [
      "Live ad campaign management",
      "SEO & analytics tools hands-on",
      "Portfolio-ready marketing strategies"
    ],
    courseLink: "/courses/digital-marketing",
    brochureLink: "/brochures/digital-marketing.pdf",
    description: "Learn to create, manage, and optimize digital marketing campaigns across multiple platforms.",
    audience: ["Marketing Students", "Entrepreneurs", "Marketing Professionals"],
    toolsUsed: ["Google Ads", "Facebook Ads Manager", "Google Analytics", "Mailchimp"],
    modules: [
      { title: "SEO & SEM", content: "Search engine optimization and marketing basics" },
      { title: "Social Media Marketing", content: "Campaigns on Facebook, Instagram" },
      { title: "Email & Content Marketing", content: "Email campaigns, content strategy" },
      { title: "Analytics & Reporting", content: "Tracking and optimization using tools" }
    ],
    outcomes: [
      "Run effective digital campaigns",
      "Analyze marketing data",
      "Create marketing content strategies"
    ],
    capstoneProject: "Develop and manage a multi-channel digital marketing campaign",
    fee: {
      amount: "₹16,999",
      discount: "₹13,999",
      emiAvailable: false
    },
    tags: ["marketing", "seo", "sem", "digital"],
  },
  {
    id: "satC10",
    title: "MAINFRAME TECHNOLOGIES",
    image: "/images/Mainframe_Tech.jpg",
    subCourses: ["Mainframe Programming", "COBOL", "JCL", "CICS", "DB2"],
    technologies: ["COBOL", "JCL", "CICS", "DB2", "z/OS","IMS","VSAM","TSO","ISPF","IBM Utilities","File-AID","Xpediter"],
    duration: "3 months",
    highlights: [
      "Mainframe programming and batch processing",
      "Hands-on COBOL & JCL",
      "Enterprise-grade system understanding"
    ],
    courseLink: "/courses/mainframe-technologies",
    brochureLink: "/brochures/mainframe-technologies.pdf",
    description: "Learn mainframe systems, batch processing, and enterprise transaction programming with COBOL and JCL.",
    audience: ["IT Professionals", "System Programmers", "Developers"],
    toolsUsed: ["COBOL Compiler", "JCL Editor", "CICS Simulator", "DB2"],
    modules: [
      { title: "Mainframe Basics", content: "z/OS environment and mainframe overview" },
      { title: "COBOL Programming", content: "Batch and online COBOL programming" },
      { title: "JCL & CICS", content: "Job control language and online transaction processing" }
    ],
    outcomes: [
      "Write COBOL programs for batch and online jobs",
      "Understand mainframe job control and transactions",
      "Manage DB2 databases on mainframe"
    ],
    capstoneProject: "Develop a mainframe batch processing and transaction management project",
    fee: {
      amount: "₹21,999",
      discount: "₹18,499",
      emiAvailable: true
    },
    tags: ["mainframe", "cobol", "enterprise", "batch"],
  }
];
export default courseCards;