export const courseModules = [
  {
    id: "satC1",
    title: "DATA ENGINEERING",
    objective: "Learn to build scalable data pipelines, work with big data tools, perform data wrangling, and manage ETL workflows.",
    modules: [
      {
        title: "1. Introduction to Data Engineering",
        topics: [
          "Data Engineering Overview and Lifecycle",
          "Roles and Responsibilities",
          "ETL vs ELT Concepts",
          "Batch vs Stream Processing"
        ]
      },
      {
        title: "2. SQL for Data Engineering",
        topics: [
          "SQL Basics & Advanced Queries",
          "Joins, Window Functions, Aggregations",
          "Data Cleaning using SQL",
          "Query Optimization"
        ]
      },
      {
        title: "3. Python for Data Engineers",
        topics: [
          "Python Essentials: Lists, Dicts, Loops, Functions",
          "File Handling, Data Structures",
          "Working with Pandas & NumPy",
          "Data Cleaning, Transformation with Python"
        ]
      },
      {
        title: "4. Big Data Tools (Hadoop Ecosystem)",
        topics: [
          "Hadoop HDFS Architecture",
          "MapReduce Fundamentals",
          "Apache Hive & Pig",
          "Apache Sqoop for Data Transfer"
        ]
      },
      {
        title: "5. Apache Spark",
        topics: [
          "Introduction to Spark Core & RDDs",
          "Spark SQL & DataFrames",
          "PySpark Basics",
          "Performance Optimization"
        ]
      },
      {
        title: "6. Data Pipelines & Workflow Automation",
        topics: [
          "Apache Airflow: DAGs, Operators, Scheduling",
          "Data Ingestion Tools: Kafka Basics",
          "Orchestrating ETL Workflows",
          "Real-time Data Processing"
        ]
      },
      {
        title: "7. Cloud Platforms & Deployment",
        topics: [
          "AWS S3, EC2, RDS Basics",
          "GCP BigQuery Overview (Optional)",
          "Deploying Data Pipelines on Cloud",
          "Git, GitHub, Docker for Deployment"
        ]
      }
    ],
  },

  {
    id: "satC2",
    title: "DATA ANALYST",
    objective: "Analyze, visualize, and present data using tools like Excel, SQL, Power BI, and Python.",
    modules: [
      {
        title: "1. Excel for Data Analysis",
        topics: [
          "Excel Basics to Advanced",
          "Formulas, Functions, Pivot Tables",
          "Charts, Dashboards, Data Cleaning"
        ]
      },
      {
        title: "2. SQL for Data Analytics",
        topics: [
          "Writing Complex SQL Queries",
          "Aggregation, Grouping, Joins",
          "Data Transformation using SQL",
          "Use Cases with Real Datasets"
        ]
      },
      {
        title: "3. Power BI / Tableau",
        topics: [
          "Connecting Data Sources",
          "Data Modeling & DAX",
          "Creating Interactive Dashboards",
          "Publishing Reports"
        ]
      },
      {
        title: "4. Statistics & Analytics Concepts",
        topics: [
          "Descriptive & Inferential Statistics",
          "Probability, Distributions",
          "Hypothesis Testing"
        ]
      },
      {
        title: "5. Python for Data Analysis",
        topics: [
          "Python Basics, Pandas, NumPy",
          "Data Wrangling & Cleaning",
          "Matplotlib, Seaborn for Visualization"
        ]
      },
      {
        title: "6. Mini Projects & Case Studies",
        topics: [
          "Sales Data Analysis",
          "Customer Segmentation",
          "KPI Dashboard Development"
        ]
      }
    ]
  },
  {
    id: "satC3",
    title: "DATABASE ADMINISTRATION",
    objective: "Master relational database design, maintenance, security, and performance tuning.",
    modules: [
      {
        title: "1. Database Basics & SQL",
        topics: [
          "DBMS vs RDBMS",
          "ER Modeling, Normalization",
          "SQL Queries: SELECT, JOIN, GROUP BY"
        ]
      },
      {
        title: "2. Oracle / MySQL / PostgreSQL",
        topics: [
          "Installation & Configuration",
          "Schema Creation, Indexing",
          "Stored Procedures, Triggers",
          "User & Role Management"
        ]
      },
      {
        title: "3. Database Administration",
        topics: [
          "Backup & Recovery Strategies",
          "Performance Tuning Techniques",
          "Query Optimization",
          "Logs & Monitoring"
        ]
      },
      {
        title: "4. Security & Access Control",
        topics: [
          "User Permissions & Auditing",
          "SQL Injection Prevention",
          "Encryption Techniques"
        ]
      },
      {
        title: "5. Cloud Database Services",
        topics: [
          "AWS RDS Basics",
          "Connecting Apps to Cloud DB",
          "Database Migration Tools"
        ]
      }
    ]
  },
  {
    id: "satC4",
    title: "CAD DESIGNING",
    duration: "2.5 Months",
    objective: "Gain practical expertise in computer-aided design (CAD) software for engineering drawings.",
    modules: [
      {
        title: "1. Basics of Drafting",
        topics: [
          "Introduction to Engineering Drawing",
          "CAD Software Interface (AutoCAD)",
          "Coordinate Systems"
        ]
      },
      {
        title: "2. 2D Drafting",
        topics: [
          "Lines, Arcs, Circles, Polygons",
          "Dimensions, Layers, Blocks",
          "Orthographic Projections"
        ]
      },
      {
        title: "3. 3D Modeling",
        topics: [
          "Isometric Views, Extrusion",
          "Solid Modeling Techniques",
          "Rendering & Visualization"
        ]
      },
      {
        title: "4. Advanced Tools & Layouts",
        topics: [
          "Paper Space & Viewports",
          "Annotations & Hatching",
          "Templates & Plotting"
        ]
      },
      {
        title: "6. Projects",
        topics: [
          "Civil/Mechanical/Electrical Drawing Projects",
          "Industry-oriented CAD Tasks"
        ]
      }
    ]
  },
  {
    id: "satC5",
    title: "FULL STACK DEVELOPER",
    objective: "Build complete web applications with frontend, backend, databases, DevOps, and deployment.",
    modules: [
      {
        title: "1. UI Development (HTML & CSS)",
        topics: [
          "Basics of Web & Front-End Development",
          "HTML5: Tags, Forms, Tables, Multimedia",
          "CSS3: Selectors, Box Model, Layouts (Flexbox, Grid)",
          "Responsive Web Design with Media Queries",
          "Animations, Transitions & Preprocessors (SASS)"
        ]
      },
      {
        title: "2. JavaScript Programming",
        topics: [
          "JavaScript Fundamentals (Syntax, Variables, Loops)",
          "Functions, Scope, and Events",
          "DOM Manipulation & Event Handling",
          "Modern JS (ES6+): Arrow Functions, Spread, Destructuring",
          "Promises, Async/Await, Fetch API"
        ]
      },
      {
        title: "3. React.js Frontend Framework",
        topics: [
          "JSX and Component-Based Architecture",
          "Props, State, and Lifecycle",
          "Forms, Event Handling in React",
          "React Router for Navigation",
          "React Hooks (useState, useEffect, etc.)",
          "Redux for State Management",
          "Project: Single Page Application (SPA)"
        ]
      },
      {
        title: "4. Backend Development (Node.js & Express.js)",
        topics: [
          "Node.js Basics, NPM",
          "Express.js Framework",
          "Creating RESTful APIs",
          "Middleware, Routing, Error Handling",
          "Authentication & Authorization (JWT)"
        ]
      },
      {
        title: "5. Database Integration",
        topics: [
          "MongoDB: Collections, CRUD, Mongoose",
          "MySQL/PostgreSQL Basics (optional)",
          "Connecting Frontend + Backend + DB",
          "Data Validation and Security"
        ]
      },
      {
        title: "6. DevOps & Deployment",
        topics: [
          "Git & GitHub Version Control",
          "CI/CD Concepts (Jenkins overview)",
          "Docker Basics (Containerization)",
          "Deployment on Netlify, Vercel, Render, or Heroku"
        ]
      }
    ],
  },
  {
    id: "satC6",
    title: "ARTIFICIAL INTELLIGENCE",
    duration: "4 Months",
    objective: "Develop intelligent systems using Python, explore Machine Learning, Deep Learning, and real-world AI applications with hands-on projects.",
    modules: [
      {
        title: "1. Introduction to AI & Python Programming",
        topics: [
          "History & Scope of AI",
          "Python Programming Basics",
          "Data Structures & Libraries (NumPy, Pandas)"
        ]
      },
      {
        title: "2. Machine Learning Basics",
        topics: [
          "Supervised vs Unsupervised Learning",
          "Regression, Classification",
          "Scikit-learn Library"
        ]
      },
      {
        title: "3. Deep Learning Fundamentals",
        topics: [
          "Neural Networks Concepts",
          "TensorFlow & Keras Introduction",
          "Building Simple Neural Networks"
        ]
      },
      {
        title: "4. Natural Language Processing",
        topics: [
          "Text Processing & Tokenization",
          "Sentiment Analysis",
          "Chatbots & NLP Applications"
        ]
      },
      {
        title: "5. Computer Vision",
        topics: [
          "Image Processing Basics",
          "OpenCV Library",
          "Object Detection & Recognition"
        ]
      },
      {
        title: "6. AI Projects",
        topics: [
          "AI Chatbot",
          "Image Classifier",
          "Recommendation Systems"
        ]
      }
    ]
  },
  {
    id: "satC7",
    title: "SAP",
    duration: "3.5 Months",
    objective: "Learn SAP modules and end-to-end business processes with hands-on experience.",
    modules: [
      {
        title: "1. SAP Introduction",
        topics: [
          "SAP Overview & Architecture",
          "Navigation & Basic Transactions"
        ]
      },
      {
        title: "2. SAP Modules Overview",
        topics: [
          "Finance (FI), Controlling (CO)",
          "Materials Management (MM)",
          "Sales and Distribution (SD)",
          "Production Planning (PP)"
        ]
      },
      {
        title: "3. Business Process Integration",
        topics: [
          "Order to Cash (O2C)",
          "Procure to Pay (P2P)",
          "Record to Report (R2R)"
        ]
      },
      {
        title: "4. SAP Fiori & UI5 Basics",
        topics: [
          "User Experience in SAP",
          "Fiori Launchpad Overview"
        ]
      },
      {
        title: "5. SAP Project Work",
        topics: [
          "End-to-End Business Process Implementation",
          "SAP Simulation Projects"
        ]
      }
    ]
  }
  ,
  {
    id: "satC8",
    "title": "IT SERVICE DESK MANAGER",
    "duration": "3 Months",
    "objective": "Prepare for service desk operations, ITSM tools, ticketing systems, and customer support processes with real-world scenarios.",
    "modules": [
      {
        "title": "1. IT Service Desk Fundamentals",
        "topics": [
          "Roles and Responsibilities",
          "Service Desk vs Help Desk",
          "ITIL Overview and Terminologies"
        ]
      },
      {
        "title": "2. ITSM Tools & Ticketing Systems",
        "topics": [
          "Overview of ITSM Tools (ServiceNow, JIRA)",
          "Incident, Problem, Change Management",
          "Ticket Lifecycle and SLAs"
        ]
      },
      {
        "title": "3. Communication & Customer Handling",
        "topics": [
          "Email and Chat Etiquette",
          "Handling Difficult Customers",
          "Escalation Procedures"
        ]
      },
      {
        "title": "4. Monitoring & Support Tools",
        "topics": [
          "Remote Access Tools (TeamViewer, AnyDesk)",
          "Network Monitoring Basics",
          "Asset Management Tools"
        ]
      },
      {
        "title": "5. Troubleshooting Techniques",
        "topics": [
          "OS and Software Troubleshooting",
          "Network & Connectivity Issues",
          "Hardware Problem Diagnosis"
        ]
      },
      {
        "title": "6. Capstone Project",
        "topics": [
          "Simulated Ticket Resolution",
          "Customer Interaction Case Studies"
        ]
      }
    ]
  },
  {
    id: "satC9",
    "title": "DIGITAL MARKETING",
    "duration": "3 Months",
    "objective": "Master modern digital marketing channels including SEO, SEM, Social Media, Content Marketing, and Analytics.",
    "modules": [
      {
        "title": "1. Digital Marketing Fundamentals",
        "topics": [
          "Digital vs Traditional Marketing",
          "Customer Journey & Funnel",
          "Marketing Strategies"
        ]
      },
      {
        "title": "2. Search Engine Optimization (SEO)",
        "topics": [
          "On-page & Off-page SEO",
          "Technical SEO",
          "Tools: Google Search Console, SEMrush"
        ]
      },
      {
        "title": "3. Search Engine Marketing (SEM)",
        "topics": [
          "Google Ads Campaigns",
          "Keyword Research & Bidding",
          "Ad Copy, Extensions, Landing Pages"
        ]
      },
      {
        "title": "4. Social Media Marketing",
        "topics": [
          "Facebook, Instagram, LinkedIn Ads",
          "Content Calendar & Management",
          "Influencer & Viral Marketing"
        ]
      },
      {
        "title": "5. Content Marketing & Blogging",
        "topics": [
          "Content Strategy & Creation",
          "Copywriting Basics",
          "WordPress Blogging"
        ]
      },
      {
        "title": "6. Email Marketing & Automation",
        "topics": [
          "Email Campaign Tools (Mailchimp)",
          "Audience Segmentation",
          "Email Funnels & A/B Testing"
        ]
      },
      {
        "title": "7. Web Analytics",
        "topics": [
          "Google Analytics Basics",
          "Tracking KPIs",
          "Campaign Performance Reporting"
        ]
      },
      {
        "title": "8. Capstone Project",
        "topics": [
          "Run & Analyze a Live Campaign",
          "Prepare a Digital Strategy Plan"
        ]
      }
    ]
  },
  {
    id: "satC10",
    "title": "MAINFRAME TECHNOLOGIES",
    "duration": "4 Months",
    "objective": "Gain in-depth knowledge of IBM Mainframe systems including COBOL, JCL, VSAM, and DB2 used in enterprise systems.",
    "modules": [
      {
        "title": "1. Introduction to Mainframes",
        "topics": [
          "IBM Mainframe Architecture",
          "ISPF, TSO Basics",
          "Batch vs Online Processing"
        ]
      },
      {
        "title": "2. COBOL Programming",
        "topics": [
          "COBOL Syntax & Structure",
          "File Handling & Arrays",
          "Subprograms and File Processing"
        ]
      },
      {
        "title": "3. Job Control Language (JCL)",
        "topics": [
          "JCL Basics & Statements",
          "JOB, EXEC, DD Statements",
          "Conditional Processing & Utilities"
        ]
      },
      {
        "title": "4. VSAM and Dataset Management",
        "topics": [
          "KSDS, ESDS, RRDS Structures",
          "IDCAMS Utility",
          "VSAM File Access from COBOL"
        ]
      },
      {
        "title": "5. DB2 for Mainframe",
        "topics": [
          "DB2 Basics, DDL/DML",
          "Embedded SQL in COBOL",
          "CICS Overview (Optional)"
        ]
      },
      {
        "title": "5. Capstone Project",
        "topics": [
          "End-to-End Batch Processing System",
          "Data Handling using COBOL + JCL + DB2"
        ]
      }
    ]
  }
];

export default courseModules;