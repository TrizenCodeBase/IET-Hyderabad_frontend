// Problem statements for Innothon 2025
export interface ProblemStatement {
  track: string;
  title: string;
  domain: string;
  abstract: string;
  expectedOutput: string;
  techStack: string;
  bonusPoints: string;
}

export const problemStatements: ProblemStatement[] = [
  {
    track: 'AI & Data Intelligence',
    title: 'AI-Powered Resume-to-Job Match Scorer',
    domain: 'AI/NLP',
    abstract: 'Build a smart matching system that evaluates resumes against job descriptions by analyzing semantic similarities and skill relevance. This tool will help recruiters save time by providing ranked candidate lists and highlighting skill gaps. It should handle diverse resume formats and job profiles for different industries.',
    expectedOutput: 'Interactive tool with backend matching engine and user-friendly UI.',
    techStack: 'NLP (SpaCy, Transformers), Python, FastAPI, React.',
    bonusPoints: 'Skill gap analysis and candidate improvement suggestions.'
  },
  {
    track: 'AI & Data Intelligence',
    title: 'Student Performance Predictor',
    domain: 'Machine Learning',
    abstract: 'Develop a predictive model that forecasts students’ semester grades based on historical attendance, assignment scores, and exam performance. Early identification of at-risk students will enable timely interventions to improve academic outcomes. Visualization dashboards will help educators monitor trends.',
    expectedOutput: 'Predictive model with a dashboard showing grades and risk levels.',
    techStack: 'Python (scikit-learn, Pandas), Flask, SQL, Plotly.',
    bonusPoints: 'Personalized study and resource recommendations.'
  }, 
  {
    track: 'AI & Data Intelligence',
    title: 'Financial Transaction Fraud Alarm',
    domain: 'AI/Data Analytics',
    abstract: 'Create an anomaly detection system that flags suspicious financial transactions in real time by analyzing patterns and deviations from normal behavior. The system will provide alerts to minimize fraud losses in banking and e-commerce.',
    expectedOutput: 'Backend system triggering alerts on fraud patterns with a notification dashboard.',
    techStack: 'PyOD, Kafka/Flask, PostgreSQL.',
    bonusPoints: 'Real-time alert dashboard with incident tracking.',
  }, 
  {
    track: 'AI & Data Intelligence',
    title: 'Voice-to-Text Meeting Summarizer',
    domain: 'Speech Processing / NLP',
    abstract: 'Build a tool that transcribes meeting audio recordings into text and generates concise summaries highlighting key discussion points and action items. This will improve meeting productivity by providing quick, readable records. Multi-speaker support is preferred.',
    expectedOutput: 'Audio upload interface, transcript generation, and summary display.',
    techStack: 'Whisper, Transformers, Streamlit.',
    bonusPoints: 'Speaker diarization and multilingual support.',
  }, 
  {
    track: 'AI & Data Intelligence',
    title: 'Campus News Sentiment Tracker',
    domain: 'NLP / Social Media Analytics',
    abstract: 'Design a system to collect and analyze campus-related social media posts and feedback to track sentiment trends over time. This will help institutions understand student moods and respond proactively to issues.',
    expectedOutput: 'Sentiment analytics dashboard with alerts on negative trends.',
    techStack: 'Twitter API, VADER/TextBlob, Dash, PostgreSQL.',
    bonusPoints: 'Early prediction of potential campus concerns.',
  },
  {
    track: 'ERP/CRM & Automation Track',
    title: 'Mini CRM for Student Queries',
    domain: 'ERP/CRM',
    abstract: 'Create a lightweight CRM platform to log, categorize, and track student queries with automated workflows and response templates. This will streamline communication between students and administration, improving query resolution speed and record management.',
    expectedOutput: 'CRM backend with query categorization and status tracking.',
    techStack: 'MERN Stack, Redis.',
    bonusPoints: 'AI-based query classification and chatbot integration.',
  },
  {
    track: 'ERP/CRM & Automation Track',
    title: 'Inventory Manager for Lab Equipment',
    domain: 'ERP / Inventory Management',
    abstract: 'Develop an inventory management system for tracking lab equipment stocks, generating reorder alerts, and forecasting future requirements based on usage trends. This tool will minimize equipment shortages and overstocking.',
    expectedOutput: 'Inventory dashboard with alerts and predictive analytics.',
    techStack: 'Django, PostgreSQL, Time-series forecasting.',
    bonusPoints: 'Mobile barcode scanning app integration.',
  }, 
  {
    track: 'ERP/CRM & Automation Track',
    title: 'RPA Fee Reminder & Payment Automation',
    domain: 'Automation / RPA',
    abstract: 'Build an automated bot that sends fee payment reminders via email and WhatsApp, updates payment statuses from transaction confirmations, and manages follow-ups. This will reduce manual administrative effort and improve collection rates.',
    expectedOutput: 'Messaging automation system integrated with fee database.',
    techStack: 'UiPath or Python (Selenium/Requests), Twilio API, OCR.',
    bonusPoints: 'Two-way communication for payment queries.',
  },
  {
    track: 'ERP/CRM & Automation Track',
    title: 'Digital Document Signing Workflow',
    domain: 'ERP / Security',
    abstract: 'Create a secure platform for digitally signing official certificates and documents with role-based approval workflows and audit trails. This reduces paper use and streamlines administrative processes.',
    expectedOutput: 'Web app for document upload, signing, and tracking.',
    techStack: 'Node.js, PDFLib, Firebase Auth, React.',
    bonusPoints: 'Blockchain integration for tamper-proof signatures.'
  },
  {
    track: 'ERP/CRM & Automation Track',
    title: 'Faculty Resource Scheduler & Booking System',
    domain: 'ERP / Scheduling',
    abstract: 'Develop a booking system for classrooms, labs, and other resources with conflict detection, approval workflows, and calendar views. This helps avoid scheduling conflicts and optimizes resource utilization.',
    expectedOutput: 'Scheduler with calendar UI, notifications, and admin dashboard.',
    techStack: 'Laravel/PHP or Django, PostgreSQL, React/Vue.js.',
    bonusPoints: 'Google Calendar API integration.'
  },
  {
    track: 'ERP/CRM & Automation Track',
    title: 'Automated Attendance Tracker with Face Recognition',
    domain: 'AI / Automation',
    abstract: 'Implement facial recognition-based attendance marking to automate classroom and lab attendance processes. The system should capture attendance accurately and provide reports.',
    expectedOutput: 'Attendance app with face detection and database updates.',
    techStack: 'OpenCV, Python, Flask, React Native.',
    bonusPoints: 'Real-time absentee notifications.'
  },
  {
    track: 'ERP/CRM & Automation Track',
    title: 'Expense Management System for Departments',
    domain: 'ERP / Finance',
    abstract: 'Create an expense tracking system with budget management, approval workflows, and detailed reporting for departmental spending control.',
    expectedOutput: 'Web app with expense submission, approval, and reports.',
    techStack: 'Django, PostgreSQL, React.',
    bonusPoints: 'ERP finance module integration.'
  },
  {
    track: 'Cloud & DevOps Track',
    title: 'Automated Cloud Cost Optimizer',
    domain: 'Cloud / DevOps',
    abstract: 'Develop a tool that analyzes cloud resource usage and recommends optimization strategies to reduce cost without compromising performance, helping enterprises manage cloud expenditure efficiently.',
    expectedOutput: 'Dashboard with cost analytics and optimization suggestions.',
    techStack: 'AWS/GCP/Azure SDKs, Python, React, Terraform.',
    bonusPoints: 'Auto-generated resource resizing scripts.'
  },
  {
    track: 'Cloud & DevOps Track',
    title: 'Secure Multi-Tenant LMS on Kubernetes',
    domain: 'Cloud / DevOps',
    abstract: 'Deploy a multi-tenant Learning Management System with container orchestration ensuring tenant isolation, scalability, and access control, ideal for educational institutions hosting multiple colleges.',
    expectedOutput: 'Containerized LMS app with CI/CD pipelines and monitoring.',
    techStack: 'Docker, Kubernetes, Helm, Jenkins, Prometheus.',
    bonusPoints: 'Auto-scaling based on user load.'
  },
  {
    track: 'Cloud & DevOps Track',
    title: 'Auto-Deploy LMS Container App',
    domain: 'Cloud / DevOps',
    abstract: 'Containerize an LMS application and automate deployment through continuous integration and delivery pipelines for easy updates and scalability.',
    expectedOutput: 'Dockerized LMS app with deployment automation.',
    techStack: 'Docker, Kubernetes, GitHub Actions, Node.js.',
    bonusPoints: 'Integrated monitoring and auto-scaling.'
  },
  {
    track: 'Cloud & DevOps Track',
    title: 'Infrastructure-as-Code Deployment Portal',
    domain: 'Cloud / DevOps',
    abstract: 'Build a portal that allows users to deploy and manage infrastructure resources via reusable Terraform scripts with version control and multi-cloud support.',
    expectedOutput: 'Web UI for managing infrastructure provisioning.',
    techStack: 'Terraform, Python (Flask/Django), React.',
    bonusPoints: 'Multi-cloud provider integration.'
  },
  {
    track: 'Cloud & DevOps Track',
    title: 'Real-time Log Monitoring & Alert System',
    domain: 'Cloud / Security',
    abstract: 'Design a system that ingests and visualizes application logs in real time, triggering alerts for predefined error patterns to facilitate faster troubleshooting.',
    expectedOutput: 'Dashboard with log visualization and alerts.',
    techStack: 'ELK stack (Elasticsearch, Logstash, Kibana), Python.',
    bonusPoints: 'AI-based anomaly detection in logs.'
  },
  {
    track: 'BI & Data Engineering Track',
    title: 'Placements Analytics Dashboard',
    domain: 'Data Analytics',
    abstract: 'Build an interactive dashboard to visualize placement trends, top recruiters, package distributions, and student demographics, helping placement officers strategize better.',
    expectedOutput: 'Interactive dashboards for placement insights.',
    techStack: 'Power BI, Tableau, SQL, Pandas.',
    bonusPoints: 'Predictive placement trend analysis.'
  },
  {
    track: 'BI & Data Engineering Track',
    title: 'Data Pipeline for Car Sales Forecasting',
    domain: 'Data Engineering / ML',
    abstract: 'Develop an automated data pipeline that cleans, aggregates, and forecasts car sales monthly by make and model, aiding dealers and manufacturers in inventory planning.',
    expectedOutput: 'ETL pipeline and forecasting dashboard.',
    techStack: 'Python, Airflow, Pandas, Prophet/ARIMA, Power BI.',
    bonusPoints: 'Incorporate promotions and economic indicators.'
  },
  {
    track: 'Cybersecurity & Compliance Track',
    title: 'Phishing Email Detector & Alert System',
    domain: 'Cybersecurity / AI',
    abstract: 'Build a phishing detection system that uses machine learning to classify incoming emails and alerts users to potential threats, increasing organizational email security.',
    expectedOutput: 'Email filter service with alert dashboard.',
    techStack: 'Python (scikit-learn, TensorFlow), Flask, IMAP integration, React.',
    bonusPoints: 'Integration with corporate email systems.'
  },
  {
    track: 'Cybersecurity & Compliance Track',
    title: 'Role-Based Access Control (RBAC) Management Tool',
    domain: 'Cybersecurity / ERP',
    abstract: 'Create an admin portal to manage user roles and permissions with audit logs, enabling organizations to enforce least privilege access and comply with security policies.',
    expectedOutput: 'RBAC management UI with audit logs.',
    techStack: 'Node.js, Express, MongoDB, React, JWT.',
    bonusPoints: 'LDAP/Active Directory integration.'
  },
  {
    track: 'Cybersecurity & Compliance Track',
    title: 'Secure Local Storage Encryptor',
    domain: 'Cybersecurity',
    abstract: 'Develop a tool to encrypt sensitive local data securely with key management integration, protecting user and enterprise data on devices.',
    expectedOutput: 'Encryption utility with secure key vault integration.',
    techStack: 'Python, AES encryption, Hashicorp Vault.',
    bonusPoints: 'Authentication system integration.'
  },
  {
    track: 'Cybersecurity & Compliance Track',
    title: 'Data Leak Prevention System for Cloud Storage',
    domain: 'Cybersecurity',
    abstract: 'Monitor and prevent unauthorized access or sharing of sensitive data stored in cloud services, enforcing compliance and protecting intellectual property.',
    expectedOutput: 'Monitoring tool with alerts and policy enforcement.',
    techStack: 'Python, AWS CloudTrail, Azure Security Center APIs.',
    bonusPoints: 'Auto-remediation capabilities.'
  },
  {
    track: 'Cybersecurity & Compliance Track',
    title: 'Multi-Factor Authentication (MFA) App',
    domain: 'Cybersecurity',
    abstract: 'Develop a secure multi-factor authentication app supporting TOTP and push notifications for enterprise logins to enhance security.',
    expectedOutput: 'Mobile and web app supporting MFA flows.',
    techStack: 'React Native, Node.js, Firebase Auth.',
    bonusPoints: 'Biometric integration.'
  },
  {
    track: 'EdTech & Sustainability Track',
    title: 'Smart Noticeboard Display',
    domain: 'IoT / EdTech',
    abstract: 'Create a digital noticeboard solution that cycles through announcements, events, and alerts with remote content control, improving campus communication.',
    expectedOutput: 'Raspberry Pi-based display controlled via a web dashboard.',
    techStack: 'Python, React, Raspberry Pi, WebSockets.',
    bonusPoints: 'Mobile notification sync.'
  },
  {
    track: 'EdTech & Sustainability Track',
    title: 'Energy Consumption Monitor & Advisor',
    domain: 'Sustainability / IoT',
    abstract: 'Monitor energy consumption across campus buildings using IoT sensors and provide actionable recommendations to reduce usage, promoting sustainability.',
    expectedOutput: 'Real-time metrics dashboard and periodic reports.',
    techStack: 'MQTT, Python, Power BI/Tableau, React Native.',
    bonusPoints: 'Gamification for energy-saving incentives.'
  },
  {
    track: 'EdTech & Sustainability Track',
    title: 'Interactive Virtual Lab Environment',
    domain: 'EdTech / Simulation',
    abstract: 'Build a web-based virtual lab for students to perform experiments safely and submit their results, enabling remote practical learning.',
    expectedOutput: 'Virtual lab UI with backend simulation and result tracking.',
    techStack: 'WebGL, React, Flask, Docker.',
    bonusPoints: 'Collaborative multi-user experiments.'
  },
  {
    track: 'EdTech & Sustainability Track',
    title: 'Personalized Learning Path Generator',
    domain: 'AI / EdTech',
    abstract: 'Create an adaptive learning platform that generates personalized study plans based on individual strengths, weaknesses, and preferences, enhancing student engagement.',
    expectedOutput: 'Recommendation engine with progress tracking dashboard.',
    techStack: 'Python, ML (scikit-learn), React.',
    bonusPoints: 'Gamification and peer collaboration features.'
  },
  {
    track: 'EdTech & Sustainability Track',
    title: 'Waste Segregation Monitoring System',
    domain: 'AI / Sustainability',
    abstract: 'Develop a mobile app that uses image classification to monitor and guide proper waste segregation on campus, encouraging environmental responsibility.',
    expectedOutput: 'Camera-based classification app with feedback system.',
    techStack: 'TensorFlow Lite, Android/iOS, Python.',
    bonusPoints: 'Rewards system for compliance.'
  },
  {
    track: 'EdTech & Sustainability Track',
    title: 'Smart College Helpdesk Chatbot',
    domain: 'AI/NLP',
    abstract: 'Develop an intelligent chatbot to assist students and applicants by answering queries about admissions, exam schedules, hostel facilities, and faculty details. The chatbot should understand natural language, handle multiple intents, and integrate seamlessly with the college website, reducing administrative workload.',
    expectedOutput: 'Working chatbot UI handling at least 10 intents integrated into a college website.',
    techStack: 'Rasa, Hugging Face, React, Python.',
    bonusPoints: 'Speech-to-text and voice responses using Whisper or Azure Cognitive Services.'
  },
]; 