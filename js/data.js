// ===================================================
// LEARNIX AI – Rich Platform Data v3.0
// ===================================================

const internshipsData = [
  { id:"i1", company:"Google", logo:"G", color:"#4285F4", title:"Software Engineer Intern", domain:"Software Development", location:"Hyderabad / Remote", type:"hybrid", stipend:"₹1,20,000/mo", deadline:"2026-08-31", branch:"CS/IT", year:"3rd/4th Year", applyUrl:"https://careers.google.com/students/", description:"Work on real Google products used by billions. Build scalable backend systems and contribute to open-source.", tags:["Paid","Top Company","Hybrid"] },
  { id:"i2", company:"Microsoft", logo:"M", color:"#00A4EF", title:"Product Intern – Azure", domain:"Cloud & DevOps", location:"Bengaluru", type:"onsite", stipend:"₹1,00,000/mo", deadline:"2026-09-15", branch:"CS/IT/ECE", year:"3rd/4th Year", applyUrl:"https://careers.microsoft.com/students/us/en/usuniversityinternship", description:"Join the Azure team to build cloud infrastructure products used by Fortune 500 companies.", tags:["Paid","Remote Option","Top Company"] },
  { id:"i3", company:"Amazon", logo:"A", color:"#FF9900", title:"SDE Intern", domain:"Software Development", location:"Remote", type:"remote", stipend:"₹80,000/mo", deadline:"2026-10-01", branch:"CS/IT", year:"Any Year", applyUrl:"https://www.amazon.jobs/en/students", description:"Build distributed systems and microservices in Amazon's world-class engineering teams.", tags:["Paid","Remote","Top Company"] },
  { id:"i4", company:"Flipkart", logo:"F", color:"#F74040", title:"Data Science Intern", domain:"AI / ML", location:"Bengaluru", type:"onsite", stipend:"₹70,000/mo", deadline:"2026-08-20", branch:"CS/IT/Maths", year:"3rd Year", applyUrl:"https://www.flipkartcareers.com/#!/joblist", description:"Work with Flipkart's data team to build recommendation systems and analytics dashboards.", tags:["Paid","Data Science"] },
  { id:"i5", company:"Infosys", logo:"I", color:"#007CC3", title:"Digital Specialist Intern", domain:"Web Development", location:"Remote", type:"remote", stipend:"₹25,000/mo", deadline:"2026-09-30", branch:"All Branches", year:"All Years", applyUrl:"https://www.infosys.com/careers/", description:"Be part of Infosys digital transformation projects serving global clients.", tags:["Paid","Remote","Open to All"] },
  { id:"i6", company:"IBM", logo:"I", color:"#1F70C1", title:"AI Research Intern", domain:"AI / ML", location:"Bengaluru", type:"hybrid", stipend:"₹60,000/mo", deadline:"2026-08-15", branch:"CS/IT", year:"3rd/4th Year", applyUrl:"https://www.ibm.com/employment/internship/", description:"Research and build next-gen AI models at IBM Research Labs.", tags:["Paid","AI","Research"] },
  { id:"i7", company:"Zomato", logo:"Z", color:"#E23744", title:"Backend Intern", domain:"Software Development", location:"Gurugram", type:"onsite", stipend:"₹45,000/mo", deadline:"2026-09-10", branch:"CS/IT", year:"3rd Year", applyUrl:"https://www.zomato.com/careers", description:"Build APIs and backend services powering Zomato's food delivery platform.", tags:["Paid","Startup","Onsite"] },
  { id:"i8", company:"CRED", logo:"C", color:"#1C1C1C", title:"Frontend Engineer Intern", domain:"Web Development", location:"Remote", type:"remote", stipend:"₹50,000/mo", deadline:"2026-10-05", branch:"CS/IT", year:"3rd/4th Year", applyUrl:"https://careers.cred.club/", description:"Build beautiful, pixel-perfect UI for CRED's fintech platform.", tags:["Paid","Remote","UI/UX"] },
  { id:"i9", company:"Razorpay", logo:"R", color:"#2ECC71", title:"Full Stack Intern", domain:"FinTech", location:"Bengaluru", type:"hybrid", stipend:"₹55,000/mo", deadline:"2026-08-25", branch:"CS/IT", year:"3rd/4th Year", applyUrl:"https://razorpay.com/careers/", description:"Work on Razorpay's payment gateway products serving millions of merchants.", tags:["Paid","Hybrid","FinTech"] },
  { id:"i10", company:"Meesho", logo:"M", color:"#9B59B6", title:"Android Dev Intern", domain:"Mobile Development", location:"Bengaluru", type:"onsite", stipend:"₹40,000/mo", deadline:"2026-09-20", branch:"CS/IT", year:"Any Year", applyUrl:"https://meesho.io/careers", description:"Build Android features for Meesho's e-commerce platform with 130M+ users.", tags:["Paid","Mobile","Startup"] },
  { id:"i11", company:"Unstop", logo:"U", color:"#FF6B35", title:"Community Manager Intern", domain:"Operations", location:"Remote", type:"remote", stipend:"Free + Certificate", deadline:"2026-10-15", branch:"All Branches", year:"All Years", applyUrl:"https://unstop.com/", description:"Manage student communities, host webinars, and grow Unstop's ecosystem.", tags:["Free","Remote","Certificate"] },
  { id:"i12", company:"Internshala", logo:"I", color:"#009B77", title:"Content Writing Intern", domain:"Content / Marketing", location:"Remote", type:"remote", stipend:"₹5,000/mo", deadline:"2026-09-05", branch:"All Branches", year:"1st/2nd Year", applyUrl:"https://internshala.com/", description:"Write blogs, articles, and guides for Internshala's student audience.", tags:["Paid","Remote","Content"] },
  { id:"i13", company:"PhonePe", logo:"P", color:"#5F259F", title:"ML Engineer Intern", domain:"AI / ML", location:"Bengaluru", type:"onsite", stipend:"₹80,000/mo", deadline:"2026-08-10", branch:"CS/IT/Maths", year:"4th Year", applyUrl:"https://www.phonepe.com/careers/", description:"Build ML models for fraud detection and transaction analytics at PhonePe.", tags:["Paid","ML","Top Company"] },
  { id:"i14", company:"Ola Electric", logo:"O", color:"#EF5350", title:"Hardware Intern", domain:"Electrical / Electronics", location:"Bengaluru", type:"onsite", stipend:"₹30,000/mo", deadline:"2026-09-25", branch:"EEE/ECE/Mech", year:"3rd/4th Year", applyUrl:"https://olaelectric.com/careers", description:"Work on EV battery systems and power electronics at Ola Electric.", tags:["Paid","Hardware","EV"] },
  { id:"i15", company:"ISRO", logo:"I", color:"#FF7043", title:"Space Technology Intern", domain:"Aerospace / Research", location:"Bengaluru / Ahmedabad", type:"onsite", stipend:"Free + Certificate", deadline:"2026-09-01", branch:"Aerospace/Mech/EEE", year:"3rd/4th Year", applyUrl:"https://www.isro.gov.in/careers.html", description:"Research and develop space technology at India's premier space agency.", tags:["Prestigious","Research","Certificate"] },
];

const certificatesData = [
  { id:"c1", provider:"Google", title:"Google IT Support Professional Certificate", category:"it", duration:"6 months", difficulty:"Beginner", rating:4.8, enrollUrl:"https://www.coursera.org/google-certificates/it-support-certificate", description:"Build job-ready skills for a career in IT support. Earn a credential from Google." },
  { id:"c2", provider:"Google", title:"Google Data Analytics Certificate", category:"data", duration:"6 months", difficulty:"Beginner", rating:4.8, enrollUrl:"https://www.coursera.org/google-certificates/data-analytics-certificate", description:"Learn data analysis tools including spreadsheets, SQL, Tableau, and R." },
  { id:"c3", provider:"Google", title:"Google UX Design Certificate", category:"design", duration:"6 months", difficulty:"Beginner", rating:4.7, enrollUrl:"https://www.coursera.org/google-certificates/ux-design-certificate", description:"Design thinking, wireframing, prototyping — complete UX design workflow." },
  { id:"c4", provider:"Meta", title:"Meta Front-End Developer Professional Certificate", category:"web", duration:"7 months", difficulty:"Intermediate", rating:4.7, enrollUrl:"https://www.coursera.org/meta-certificates/meta-front-end-developer", description:"Learn HTML, CSS, JavaScript, React — build job-ready frontend skills." },
  { id:"c5", provider:"IBM", title:"IBM Data Science Professional Certificate", category:"data", duration:"10 months", difficulty:"Beginner", rating:4.6, enrollUrl:"https://www.coursera.org/ibm-professional-certificates/ibm-data-science-professional-certificate", description:"Python, SQL, Machine Learning, Data Visualization with IBM tools." },
  { id:"c6", provider:"AWS", title:"AWS Cloud Practitioner Essentials", category:"cloud", duration:"6 hours", difficulty:"Beginner", rating:4.9, enrollUrl:"https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/", description:"Free foundational course for AWS Cloud concepts, core services, security." },
  { id:"c7", provider:"Microsoft", title:"Microsoft Azure Fundamentals (AZ-900)", category:"cloud", duration:"8 hours", difficulty:"Beginner", rating:4.7, enrollUrl:"https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/", description:"Official Microsoft free learning path for Azure cloud fundamentals." },
  { id:"c8", provider:"Harvard", title:"CS50x: Introduction to Computer Science", category:"programming", duration:"12 weeks", difficulty:"Beginner", rating:4.9, enrollUrl:"https://cs50.harvard.edu/x/", description:"Harvard's legendary free CS course. Best introduction to programming ever made." },
  { id:"c9", provider:"Stanford / Coursera", title:"Machine Learning Specialization", category:"ai", duration:"3 months", difficulty:"Intermediate", rating:4.9, enrollUrl:"https://www.coursera.org/specializations/machine-learning-introduction", description:"Andrew Ng's world-famous ML course. Audit for FREE on Coursera." },
  { id:"c10", provider:"DeepLearning.AI", title:"Deep Learning Specialization", category:"ai", duration:"4 months", difficulty:"Intermediate", rating:4.8, enrollUrl:"https://www.coursera.org/specializations/deep-learning", description:"Neural networks, CNNs, RNNs, transformers — audit for free." },
  { id:"c11", provider:"Cisco", title:"Cybersecurity Essentials", category:"cybersecurity", duration:"4 weeks", difficulty:"Beginner", rating:4.6, enrollUrl:"https://www.netacad.com/courses/cybersecurity/cybersecurity-essentials", description:"Cisco's free cybersecurity training covering threats, defenses, and best practices." },
  { id:"c12", provider:"freecodecamp", title:"Responsive Web Design Certification", category:"web", duration:"300 hours", difficulty:"Beginner", rating:4.8, enrollUrl:"https://www.freecodecamp.org/learn/2022/responsive-web-design/", description:"Build real projects to earn your free web design certification." },
  { id:"c13", provider:"freecodecamp", title:"JavaScript Algorithms & Data Structures", category:"programming", duration:"300 hours", difficulty:"Intermediate", rating:4.8, enrollUrl:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/", description:"Learn JS fundamentals, ES6, regular expressions, debugging, data structures." },
  { id:"c14", provider:"Google Cloud", title:"Google Cloud Fundamentals: Core Infrastructure", category:"cloud", duration:"8 hours", difficulty:"Beginner", rating:4.7, enrollUrl:"https://www.cloudskillsboost.google/course_templates/60", description:"Free Google Cloud course covering core infrastructure services." },
  { id:"c15", provider:"Kaggle", title:"Python Course (Free)", category:"programming", duration:"5 hours", difficulty:"Beginner", rating:4.7, enrollUrl:"https://www.kaggle.com/learn/python", description:"Free hands-on Python course with Kaggle Notebooks. Certificate included." },
  { id:"c16", provider:"Kaggle", title:"Intro to Machine Learning", category:"ai", duration:"3 hours", difficulty:"Beginner", rating:4.8, enrollUrl:"https://www.kaggle.com/learn/intro-to-machine-learning", description:"Your first machine learning model, model validation, underfitting and overfitting." },
  { id:"c17", provider:"NPTEL", title:"Data Structures & Algorithms", category:"programming", duration:"12 weeks", difficulty:"Intermediate", rating:4.5, enrollUrl:"https://nptel.ac.in/courses/106102064", description:"IIT faculty-taught DSA course. Earn an NPTEL certificate with exam." },
  { id:"c18", provider:"NPTEL", title:"Introduction to Python Programming", category:"programming", duration:"8 weeks", difficulty:"Beginner", rating:4.6, enrollUrl:"https://nptel.ac.in/courses/106106145", description:"Python basics taught by IIT faculty with NPTEL certification." },
  { id:"c19", provider:"LinkedIn Learning", title:"Become a Full-Stack Web Developer", category:"web", duration:"20 hours", difficulty:"Intermediate", rating:4.6, enrollUrl:"https://www.linkedin.com/learning/paths/become-a-full-stack-web-developer", description:"LinkedIn Learning path covering HTML, CSS, JS, Node.js, React and more." },
  { id:"c20", provider:"Udacity", title:"Intro to Programming Nanodegree (Free Audit)", category:"programming", duration:"2 months", difficulty:"Beginner", rating:4.5, enrollUrl:"https://www.udacity.com/course/intro-to-programming-nanodegree--nd000", description:"Audit the Udacity Nanodegree for free and learn web fundamentals." },
];

const roadmapsData = [
  {
    id:"r1", title:"Frontend Developer", emoji:"🎨", color:"#3b82f6",
    duration:"6-8 months", level:"Beginner → Advanced",
    description:"Build beautiful, interactive web interfaces using modern technologies.",
    steps:[
      { title:"HTML & CSS Fundamentals", desc:"Learn semantic HTML5, CSS3, flexbox, grid, responsive design", resources:["MDN Web Docs","freeCodeCamp","W3Schools"] },
      { title:"JavaScript (ES6+)", desc:"Variables, functions, DOM, events, async/await, fetch API", resources:["JavaScript.info","Eloquent JS","freeCodeCamp"] },
      { title:"Version Control – Git & GitHub", desc:"Git basics, branching, pull requests, GitHub workflow", resources:["GitHub Docs","Atlassian Git"] },
      { title:"React.js", desc:"Components, hooks, state management, React Router", resources:["React Docs","Scrimba React","Fullstackopen"] },
      { title:"CSS Frameworks & Styling", desc:"Tailwind CSS, styled-components, animation libraries", resources:["Tailwind Docs","Framer Motion"] },
      { title:"Build Tools & Deployment", desc:"Vite, npm, Vercel, Netlify deployment", resources:["Vite Docs","Vercel Docs"] },
      { title:"Portfolio + Projects", desc:"Build 3-5 real projects and deploy them publicly", resources:["Frontend Mentor","Devchallenge.io"] },
    ]
  },
  {
    id:"r2", title:"Backend Developer", emoji:"⚙️", color:"#10b981",
    duration:"8-10 months", level:"Beginner → Advanced",
    description:"Build powerful server-side applications, APIs, and databases.",
    steps:[
      { title:"Programming Fundamentals", desc:"Python or JavaScript (Node.js) — basics, OOP, data structures", resources:["CS50","Python.org","Node.js Docs"] },
      { title:"Databases – SQL & NoSQL", desc:"PostgreSQL, MySQL, MongoDB, schema design, queries", resources:["PostgreSQLTutorial","MongoDB University"] },
      { title:"RESTful API Design", desc:"HTTP methods, status codes, JSON, authentication, API design principles", resources:["REST API Tutorial","Postman Learning"] },
      { title:"Node.js / Django / Flask", desc:"Choose a framework and build your first web server", resources:["Express Docs","Django Docs","Flask Docs"] },
      { title:"Authentication & Security", desc:"JWT, OAuth, bcrypt, HTTPS, SQL injection prevention", resources:["OWASP","JWT.io"] },
      { title:"Caching & Performance", desc:"Redis, CDN, rate limiting, database indexing", resources:["Redis Docs","Web Performance MDN"] },
      { title:"Cloud Deployment", desc:"Docker, AWS/GCP/Azure, CI/CD pipelines", resources:["Docker Docs","AWS Free Tier"] },
    ]
  },
  {
    id:"r3", title:"AI / ML Engineer", emoji:"🤖", color:"#8b5cf6",
    duration:"12 months", level:"Intermediate → Advanced",
    description:"Build intelligent systems using machine learning and deep learning.",
    steps:[
      { title:"Python & Math Foundations", desc:"NumPy, Pandas, linear algebra, calculus, statistics", resources:["Khan Academy Math","NumPy Docs","3Blue1Brown"] },
      { title:"Machine Learning Basics", desc:"Supervised/unsupervised learning, scikit-learn, model evaluation", resources:["Andrew Ng ML Course","Kaggle Learn"] },
      { title:"Deep Learning & Neural Networks", desc:"TensorFlow, PyTorch, CNNs, RNNs, transformers", resources:["fast.ai","Deep Learning Specialization","PyTorch Tutorials"] },
      { title:"Natural Language Processing", desc:"Text preprocessing, BERT, GPT, HuggingFace", resources:["HuggingFace Course","spaCy Docs"] },
      { title:"MLOps & Deployment", desc:"MLflow, model serving, FastAPI, Docker", resources:["MLflow Docs","FastAPI Docs"] },
      { title:"Real-World Projects", desc:"Kaggle competitions, end-to-end ML projects", resources:["Kaggle","Paperswithcode"] },
    ]
  },
  {
    id:"r4", title:"Full Stack Developer", emoji:"🚀", color:"#f59e0b",
    duration:"10-12 months", level:"Beginner → Advanced",
    description:"Master both frontend and backend to build complete web applications.",
    steps:[
      { title:"HTML, CSS & JavaScript", desc:"Web fundamentals, responsive design, ES6+", resources:["freeCodeCamp","MDN Docs"] },
      { title:"React.js Frontend", desc:"Components, hooks, state, routing, API integration", resources:["React Docs","Fullstackopen"] },
      { title:"Node.js + Express Backend", desc:"REST APIs, middleware, authentication", resources:["Node Docs","Express Guide"] },
      { title:"Database Design", desc:"SQL with PostgreSQL, NoSQL with MongoDB", resources:["PostgreSQL Tutorial","MongoDB University"] },
      { title:"Authentication & Security", desc:"JWT, session management, OAuth, security best practices", resources:["Auth0 Docs","OWASP"] },
      { title:"Testing & CI/CD", desc:"Jest, testing libraries, GitHub Actions", resources:["Jest Docs","GitHub Actions"] },
      { title:"Cloud & Deployment", desc:"Heroku, Vercel, AWS, Docker, domain setup", resources:["Vercel Docs","AWS Educate"] },
    ]
  },
  {
    id:"r5", title:"Cloud & DevOps Engineer", emoji:"☁️", color:"#06b6d4",
    duration:"8-12 months", level:"Intermediate → Advanced",
    description:"Automate infrastructure, manage deployments, and scale applications in the cloud.",
    steps:[
      { title:"Linux & Shell Scripting", desc:"Linux commands, bash scripting, file system, permissions", resources:["Linux Journey","The Missing Semester"] },
      { title:"Networking Fundamentals", desc:"TCP/IP, DNS, HTTP, load balancing, firewalls", resources:["Networking Tutorial","Cisco NetAcad"] },
      { title:"Version Control & Collaboration", desc:"Git, branching strategies, code review", resources:["GitHub Docs","Atlassian Git"] },
      { title:"Docker & Containerization", desc:"Dockerfiles, images, containers, docker-compose", resources:["Docker Docs","Play with Docker"] },
      { title:"Kubernetes", desc:"Pods, deployments, services, ingress, Helm charts", resources:["Kubernetes Docs","KillerCoda"] },
      { title:"CI/CD Pipelines", desc:"GitHub Actions, Jenkins, GitLab CI", resources:["GitHub Actions Docs"] },
      { title:"Cloud Provider (AWS/GCP/Azure)", desc:"Core services, IAM, S3, EC2, Lambda", resources:["AWS Free Tier","Google Cloud Skills Boost"] },
    ]
  },
  {
    id:"r6", title:"Cybersecurity Analyst", emoji:"🛡️", color:"#ef4444",
    duration:"8-10 months", level:"Beginner → Intermediate",
    description:"Protect systems, networks, and data from digital attacks.",
    steps:[
      { title:"Networking Fundamentals", desc:"TCP/IP, OSI model, DNS, firewalls, VPNs", resources:["Cisco NetAcad","Professor Messer"] },
      { title:"Linux & Command Line", desc:"Linux basics, bash, file permissions, processes", resources:["Linux Journey","OverTheWire"] },
      { title:"Cybersecurity Essentials", desc:"CIA triad, threats, vulnerabilities, attack types", resources:["Cisco CyberEssentials","NIST Framework"] },
      { title:"Ethical Hacking & Penetration Testing", desc:"Kali Linux, Metasploit, Nmap, SQLmap", resources:["TryHackMe","HackTheBox","TCM Security"] },
      { title:"Web Application Security", desc:"OWASP Top 10, XSS, CSRF, SQL Injection, Burp Suite", resources:["OWASP WebGoat","PortSwigger Academy"] },
      { title:"Certifications", desc:"CompTIA Security+, CEH, OSCP preparation", resources:["CompTIA","EC-Council"] },
    ]
  },
  {
    id:"r7", title:"Data Analyst", emoji:"📊", color:"#ec4899",
    duration:"5-7 months", level:"Beginner → Intermediate",
    description:"Transform raw data into actionable insights using analytics tools.",
    steps:[
      { title:"Excel & Google Sheets", desc:"Formulas, pivot tables, charts, data cleaning", resources:["Microsoft Learn Excel","Exceljet"] },
      { title:"SQL Fundamentals", desc:"SELECT, JOINs, GROUP BY, subqueries, window functions", resources:["Mode SQL Tutorial","SQLZoo","W3Schools SQL"] },
      { title:"Python for Data Analysis", desc:"Pandas, NumPy, data cleaning, exploratory analysis", resources:["Kaggle Python","Pandas Docs"] },
      { title:"Data Visualization", desc:"Matplotlib, Seaborn, Tableau Public, Power BI", resources:["Tableau Public Docs","Matplotlib Docs"] },
      { title:"Statistics & Probability", desc:"Descriptive stats, distributions, hypothesis testing", resources:["Khan Academy Stats","StatQuest YouTube"] },
      { title:"Dashboard Projects", desc:"Build 3-5 real dashboards and publish them", resources:["Tableau Public","Google Data Studio"] },
    ]
  },
  {
    id:"r8", title:"Android Developer", emoji:"📱", color:"#84cc16",
    duration:"6-8 months", level:"Beginner → Advanced",
    description:"Build native Android applications using Kotlin and Jetpack Compose.",
    steps:[
      { title:"Kotlin Fundamentals", desc:"Syntax, OOP, coroutines, null safety", resources:["Kotlin Docs","Kotlin Koans","Kotlinlang.org"] },
      { title:"Android Basics", desc:"Activities, fragments, layouts, views, intents", resources:["Android Developers","Google Codelabs"] },
      { title:"Jetpack Compose", desc:"Declarative UI, state management, navigation", resources:["Compose Docs","Android Codelabs"] },
      { title:"Data & Networking", desc:"Room database, Retrofit, REST APIs, JSON", resources:["Android Architecture Guide","Retrofit Docs"] },
      { title:"Firebase & Auth", desc:"Firebase Authentication, Firestore, Cloud Messaging", resources:["Firebase Docs"] },
      { title:"Play Store Deployment", desc:"App signing, release builds, Play Console", resources:["Google Play Docs"] },
    ]
  },
  {
    id:"r9", title:"UI/UX Designer", emoji:"✏️", color:"#f97316",
    duration:"5-7 months", level:"Beginner → Intermediate",
    description:"Design beautiful, user-centered digital products and experiences.",
    steps:[
      { title:"Design Fundamentals", desc:"Typography, color theory, spacing, visual hierarchy", resources:["Design.google","Refactoring UI","Canva Design School"] },
      { title:"User Research & UX", desc:"User interviews, personas, user journeys, wireframing", resources:["Nielsen Norman Group","UX Mastery"] },
      { title:"Figma Mastery", desc:"Components, auto-layout, prototyping, design systems", resources:["Figma YouTube","Figma Help Docs"] },
      { title:"Prototyping & Testing", desc:"Interactive prototypes, usability testing, A/B testing", resources:["Figma Prototype","UserTesting"] },
      { title:"UI Design Patterns", desc:"Mobile UI, web UI, dark mode, accessibility (a11y)", resources:["Material Design","Apple HIG"] },
      { title:"Portfolio Building", desc:"3-5 case studies on Behance or personal website", resources:["Behance","Dribbble","Figma Community"] },
    ]
  },
  {
    id:"r10", title:"Blockchain Developer", emoji:"⛓️", color:"#a78bfa",
    duration:"8-12 months", level:"Intermediate → Advanced",
    description:"Build decentralized applications (DApps) and smart contracts.",
    steps:[
      { title:"Blockchain Fundamentals", desc:"How blockchain works, consensus, cryptography basics", resources:["MIT OpenCourseWare Blockchain","Binance Academy"] },
      { title:"Solidity & Smart Contracts", desc:"Solidity syntax, ERC-20 tokens, deployment", resources:["Solidity Docs","CryptoZombies"] },
      { title:"Ethereum & Web3.js", desc:"Ethereum ecosystem, Web3.js, ethers.js, Metamask", resources:["Ethereum Docs","Scaffold-ETH"] },
      { title:"DeFi & NFT Protocols", desc:"Uniswap, OpenSea, ERC-721, DeFi primitives", resources:["DeFi Developer Roadmap"] },
      { title:"Security & Auditing", desc:"Common vulnerabilities, reentrancy, Slither", resources:["Trail of Bits","ConsenSys Academy"] },
      { title:"Build & Deploy DApps", desc:"Full DApp with React + Solidity + IPFS", resources:["Hardhat Docs","Moralis Docs"] },
    ]
  },
];

const projectsData = [
  { id:"p1", title:"AI-Powered Job Portal", difficulty:"Advanced", domain:"Full Stack + AI", desc:"Build a job portal with AI-based resume scoring, job matching, and skill gap analysis.", tech:["React","Node.js","Python","OpenAI API","MongoDB"], videoId:"w7ejDZ8SWv8", github:"https://github.com/topics/job-portal" },
  { id:"p2", title:"Real-Time Chat Application", difficulty:"Intermediate", domain:"Full Stack", desc:"Build WhatsApp-like real-time chat with rooms, file sharing, and notifications using Socket.io.", tech:["React","Node.js","Socket.io","MongoDB","JWT"], videoId:"ZKEqqIO7n-k", github:"https://github.com/topics/chat-application" },
  { id:"p3", title:"E-Commerce Platform", difficulty:"Advanced", domain:"Full Stack", desc:"Complete e-commerce site with cart, payment gateway (Razorpay), admin panel, and order tracking.", tech:["Next.js","Node.js","Stripe","PostgreSQL","Redis"], videoId:"XpybLMnYQO0", github:"https://github.com/topics/ecommerce-website" },
  { id:"p4", title:"Face Recognition Attendance System", difficulty:"Intermediate", domain:"AI / ML", desc:"Automated attendance using OpenCV and deep face recognition. Real-time detection + dashboard.", tech:["Python","OpenCV","DeepFace","Flask","SQLite"], videoId:"sz25xxF_AVE", github:"https://github.com/topics/face-recognition" },
  { id:"p5", title:"Expense Tracker with Budgeting AI", difficulty:"Intermediate", domain:"Full Stack + AI", desc:"Track expenses, set budgets, get AI-powered saving suggestions and visual analytics.", tech:["React","Chart.js","Node.js","MongoDB","Gemini API"], videoId:"qlNNN28w6sg", github:"https://github.com/topics/expense-tracker" },
  { id:"p6", title:"GitHub Profile Analyzer", difficulty:"Beginner", domain:"API Integration", desc:"Analyze any GitHub profile with stats, language breakdown, top repos, and contribution graph.", tech:["JavaScript","GitHub API","CSS3","Chart.js"], videoId:"u9-worm5mSQ", github:"https://github.com/topics/github-profile" },
  { id:"p7", title:"Blockchain Voting System", difficulty:"Advanced", domain:"Blockchain", desc:"Secure, transparent voting dApp on Ethereum with Metamask integration and real-time results.", tech:["Solidity","React","Web3.js","Hardhat","IPFS"], videoId:"2O_pjDa8yTs", github:"https://github.com/topics/blockchain-voting" },
  { id:"p8", title:"Student Learning Management System", difficulty:"Advanced", domain:"Full Stack", desc:"Complete LMS with course creation, video embedding, quiz engine, progress tracking, and certificates.", tech:["Next.js","PostgreSQL","AWS S3","Stripe","Prisma"], videoId:"Big0MY2zCKg", github:"https://github.com/topics/lms" },
  { id:"p9", title:"News Summarizer with NLP", difficulty:"Intermediate", domain:"AI / NLP", desc:"Auto-summarize any news article using Hugging Face transformers. Chrome extension + web dashboard.", tech:["Python","HuggingFace","FastAPI","React","Newspaper3k"], videoId:"TsfLm5iiYb4", github:"https://github.com/topics/news-summarizer" },
  { id:"p10", title:"Smart Traffic Management System", difficulty:"Advanced", domain:"IoT + AI", desc:"Real-time traffic analysis using YOLO object detection, optimizing signal timings automatically.", tech:["Python","YOLOv8","OpenCV","FastAPI","MQTT"], videoId:"MNn9qKG2UFI", github:"https://github.com/topics/traffic-management" },
  { id:"p11", title:"Personal Finance Dashboard", difficulty:"Beginner", domain:"Frontend", desc:"Beautiful dashboard for tracking income, expenses, investments, and financial goals with charts.", tech:["HTML","CSS","JavaScript","Chart.js","localStorage"], videoId:"sM8lXMhRRBQ", github:"https://github.com/topics/finance-dashboard" },
  { id:"p12", title:"AI Story Generator", difficulty:"Beginner", domain:"AI Integration", desc:"Generate creative stories with AI based on your prompts, character names, and genre settings.", tech:["JavaScript","OpenAI API","HTML","CSS"], videoId:"sBhK-2K9bUc", github:"https://github.com/topics/story-generator" },
];

const hackathonsData = [
  { id:"h1", name:"Smart India Hackathon 2026", org:"Govt of India / AICTE", prize:"₹1,00,000+", deadline:"2026-08-31", theme:"Education, Healthcare, Agriculture, Smart Cities", url:"https://www.sih.gov.in/", isLive:true, location:"PAN India", participants:"50,000+" },
  { id:"h2", name:"Google Solution Challenge 2026", org:"Google Developers", prize:"$3,000", deadline:"2026-10-15", theme:"UN Sustainable Development Goals", url:"https://developers.google.com/community/gdsc-solution-challenge", isLive:true, location:"Global / Remote", participants:"25,000+" },
  { id:"h3", name:"HackMIT 2026", org:"MIT", prize:"$10,000", deadline:"2026-09-10", theme:"Open Innovation", url:"https://hackmit.org/", isLive:true, location:"MIT Campus + Remote", participants:"2,000" },
  { id:"h4", name:"Devpost Hackathons – Various", org:"Devpost", prize:"Varies ($500–$50,000)", deadline:"Ongoing", theme:"Tech, AI, Sustainability, Health", url:"https://devpost.com/hackathons", isLive:true, location:"Global / Remote", participants:"Unlimited" },
  { id:"h5", name:"Flipkart Grid 6.0", org:"Flipkart", prize:"₹5,00,000+", deadline:"2026-09-30", theme:"E-Commerce + Supply Chain AI", url:"https://dare2compete.com/hackathon/flipkart-grid-60-flipkart-209121", isLive:true, location:"PAN India", participants:"10,000+" },
  { id:"h6", name:"HackOn with Amazon 2026", org:"Amazon", prize:"₹3,00,000+", deadline:"2026-08-25", theme:"Cloud, AI, E-Commerce", url:"https://hackon.amazon.in/", isLive:false, location:"Remote", participants:"8,000+" },
  { id:"h7", name:"Unstop Coding Championships", org:"Unstop", prize:"₹50,000+", deadline:"Monthly", theme:"DSA, Competitive Programming", url:"https://unstop.com/hackathons", isLive:true, location:"Remote", participants:"5,000+" },
  { id:"h8", name:"MLH Global Hack Week", org:"Major League Hacking", prize:"Swag + Mentorship", deadline:"Monthly", theme:"Web3, AI, Open Source", url:"https://mlh.io/", isLive:true, location:"Remote", participants:"Unlimited" },
];

const jobsData = [
  { id:"j1", company:"Google", title:"Software Engineer – L3", type:"Full Time", location:"Hyderabad / Bengaluru", salary:"₹25–45 LPA", tags:["Python","Go","Distributed Systems"], url:"https://careers.google.com/" },
  { id:"j2", company:"Microsoft", title:"Software Development Engineer", type:"Full Time", location:"Hyderabad", salary:"₹22–40 LPA", tags:["C++","Azure","Cloud"], url:"https://careers.microsoft.com/" },
  { id:"j3", company:"Flipkart", title:"Senior Software Engineer", type:"Full Time", location:"Bengaluru", salary:"₹18–35 LPA", tags:["Java","Microservices","Kafka"], url:"https://www.flipkartcareers.com/" },
  { id:"j4", company:"Razorpay", title:"Backend Engineer", type:"Full Time", location:"Bengaluru / Remote", salary:"₹15–30 LPA", tags:["Go","Python","AWS"], url:"https://razorpay.com/careers/" },
  { id:"j5", company:"Freshworks", title:"Product Manager", type:"Full Time", location:"Chennai", salary:"₹20–38 LPA", tags:["Product","Agile","Analytics"], url:"https://www.freshworks.com/company/careers/" },
  { id:"j6", company:"CRED", title:"Frontend Engineer", type:"Full Time", location:"Bengaluru", salary:"₹18–32 LPA", tags:["React","TypeScript","GraphQL"], url:"https://careers.cred.club/" },
  { id:"j7", company:"Meesho", title:"Data Scientist", type:"Full Time", location:"Bengaluru", salary:"₹16–28 LPA", tags:["Python","ML","SQL"], url:"https://meesho.io/careers" },
  { id:"j8", company:"Zomato", title:"DevOps Engineer", type:"Full Time", location:"Gurugram", salary:"₹14–26 LPA", tags:["Kubernetes","Terraform","AWS"], url:"https://www.zomato.com/careers" },
  { id:"j9", company:"Wipro", title:"Full Stack Developer", type:"Full Time", location:"Remote / Any City", salary:"₹8–18 LPA", tags:["React","Node.js","MongoDB"], url:"https://careers.wipro.com/" },
  { id:"j10", company:"Startup (YC 2024)", title:"Founding Engineer", type:"Full Time", location:"Remote", salary:"₹12–24 LPA + Equity", tags:["Full Stack","React","Node.js"], url:"https://www.ycombinator.com/jobs" },
];

const scholarshipsData = [
  { id:"s1", name:"AICTE Pragati Scholarship", org:"AICTE", amount:"₹30,000/year", deadline:"2026-09-30", eligibility:"Female engineering students", url:"https://www.aicte-india.org/bureaus/bs/pages/Scholarship-Schemes.php", type:"government" },
  { id:"s2", name:"AICTE Saksham Scholarship", org:"AICTE", amount:"₹30,000/year", deadline:"2026-09-30", eligibility:"Differently-abled students", url:"https://www.aicte-india.org/bureaus/bs/pages/Scholarship-Schemes.php", type:"government" },
  { id:"s3", name:"National Scholarship Portal", org:"Govt of India", amount:"₹10,000–50,000", deadline:"2026-10-31", eligibility:"SC/ST/OBC/Minority students", url:"https://scholarships.gov.in/", type:"government" },
  { id:"s4", name:"Google Generation Scholarship", org:"Google", amount:"$10,000", deadline:"2026-12-01", eligibility:"Underrepresented groups in CS", url:"https://buildyourfuture.withgoogle.com/scholarships", type:"corporate" },
  { id:"s5", name:"Microsoft Scholarship Program", org:"Microsoft", amount:"$1,500–$10,000", deadline:"2026-11-15", eligibility:"CS students, any year", url:"https://www.microsoft.com/en-us/diversity/programs/women-at-microsoft/scholarship", type:"corporate" },
  { id:"s6", name:"Tata Trust Scholarship", org:"Tata Trusts", amount:"Up to ₹1,00,000/year", deadline:"2026-09-15", eligibility:"Meritorious students from low-income families", url:"https://www.tatatrusts.org/", type:"corporate" },
];

const aiToolsData = [
  { id:"a1", name:"ChatGPT", category:"AI Chat", desc:"World's most powerful AI chatbot for coding, writing, analysis, and more.", url:"https://chat.openai.com/", icon:"🤖", isFree:true },
  { id:"a2", name:"Google Gemini", category:"AI Chat", desc:"Google's multimodal AI model. Analyze images, code, and generate content.", url:"https://gemini.google.com/", icon:"✨", isFree:true },
  { id:"a3", name:"GitHub Copilot", category:"Coding AI", desc:"AI pair programmer that suggests code in real-time inside VS Code.", url:"https://github.com/features/copilot", icon:"👾", isFree:false },
  { id:"a4", name:"Perplexity AI", category:"AI Search", desc:"AI-powered search engine that gives cited, accurate answers.", url:"https://www.perplexity.ai/", icon:"🔍", isFree:true },
  { id:"a5", name:"Midjourney", category:"AI Image", desc:"Generate stunning AI artwork from text prompts.", url:"https://www.midjourney.com/", icon:"🎨", isFree:false },
  { id:"a6", name:"DALL·E 3", category:"AI Image", desc:"OpenAI's image generator. Available free via Bing Image Creator.", url:"https://www.bing.com/images/create", icon:"🖼️", isFree:true },
  { id:"a7", name:"Claude AI", category:"AI Chat", desc:"Anthropic's advanced AI — great for long documents, analysis, coding.", url:"https://claude.ai/", icon:"🧠", isFree:true },
  { id:"a8", name:"Notion AI", category:"Productivity AI", desc:"AI writing assistant built into Notion for notes, summaries, and docs.", url:"https://www.notion.so/product/ai", icon:"📝", isFree:false },
  { id:"a9", name:"Canva AI (Magic Studio)", category:"Design AI", desc:"AI-powered design tools — remove background, text to image, AI writer.", url:"https://www.canva.com/ai-image-generator/", icon:"🎭", isFree:true },
  { id:"a10", name:"Grammarly AI", category:"Writing AI", desc:"AI writing assistant for grammar, tone, style, and plagiarism checking.", url:"https://www.grammarly.com/", icon:"✍️", isFree:true },
  { id:"a11", name:"Hugging Face", category:"ML Platform", desc:"World's largest open-source AI model hub. Deploy models for free.", url:"https://huggingface.co/", icon:"🤗", isFree:true },
  { id:"a12", name:"Google Colab", category:"ML Platform", desc:"Free Jupyter notebooks with GPU access for ML experiments.", url:"https://colab.research.google.com/", icon:"⚗️", isFree:true },
];

const interviewData = [
  { q:"What is the difference between == and === in JavaScript?", a:"== performs type coercion (loose equality), converting types before comparing. === is strict equality — no type conversion happens. Example: '5' == 5 is true, but '5' === 5 is false. Always prefer === in JavaScript." },
  { q:"Explain Big O notation with examples.", a:"Big O describes algorithm performance in worst-case scenarios. O(1) = constant time (array index lookup), O(log n) = binary search, O(n) = linear search, O(n log n) = merge sort, O(n²) = bubble sort, O(2ⁿ) = recursive Fibonacci without memoization." },
  { q:"What is REST API and what are its key principles?", a:"REST (Representational State Transfer) is an architectural style for APIs. Key principles: (1) Stateless — server stores no session state, (2) Client-Server separation, (3) Uniform interface with HTTP methods (GET, POST, PUT, DELETE), (4) Resource-based URLs, (5) Cacheable responses." },
  { q:"What is the difference between SQL and NoSQL databases?", a:"SQL databases (MySQL, PostgreSQL) are relational, use structured tables with fixed schemas, support ACID transactions, great for complex queries. NoSQL (MongoDB, Redis) are non-relational, flexible schemas, horizontally scalable, better for unstructured data and high-velocity workloads." },
  { q:"Explain OOP concepts: Inheritance, Polymorphism, Encapsulation, Abstraction.", a:"Inheritance: child class inherits parent's properties/methods. Polymorphism: same method behaves differently in different classes. Encapsulation: bundling data + methods, hiding internal state with access modifiers. Abstraction: hiding implementation complexity, showing only necessary details." },
  { q:"What is a closure in JavaScript?", a:"A closure is a function that 'remembers' its outer scope even after the outer function has returned. Created when a function references variables from its enclosing scope. Used for data privacy, factory functions, and module patterns." },
  { q:"What is Docker and why is it used?", a:"Docker is a containerization platform that packages applications with all dependencies into isolated containers. Benefits: consistent environments across dev/staging/prod, faster deployment, resource efficiency vs VMs, microservices architecture support." },
  { q:"Explain HTTP methods: GET, POST, PUT, PATCH, DELETE.", a:"GET: retrieve data (idempotent, cached). POST: create new resource (not idempotent). PUT: replace entire resource. PATCH: partially update resource. DELETE: remove resource. Idempotent means multiple identical requests have same effect as single request." },
  { q:"What is React's Virtual DOM and why is it important?", a:"The Virtual DOM is a lightweight JS representation of the real DOM. When state changes, React first updates the Virtual DOM, diffs it with the previous version (reconciliation), and only applies minimal changes to the real DOM. This makes updates extremely fast." },
  { q:"What is Machine Learning? Explain supervised vs unsupervised learning.", a:"ML is a subset of AI where systems learn from data without being explicitly programmed. Supervised learning: trains on labeled data (inputs + correct outputs) — classification, regression. Unsupervised learning: finds patterns in unlabeled data — clustering, dimensionality reduction." },
];

const codingProblemsData = [
  { id:"cp1", title:"Two Sum", difficulty:"Easy", category:"Arrays", desc:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.", template:"function twoSum(nums, target) {\n  // Your solution here\n  // Expected: [index1, index2]\n}", hint:"Use a hash map to store complement pairs for O(n) solution.", link:"https://leetcode.com/problems/two-sum/" },
  { id:"cp2", title:"Reverse a String", difficulty:"Easy", category:"Strings", desc:"Write a function that reverses a string. The input string is given as an array of characters.", template:"function reverseString(s) {\n  // Your solution here\n  // Modify array in-place\n}", hint:"Use two pointers — left and right — swapping characters until they meet in the middle.", link:"https://leetcode.com/problems/reverse-string/" },
  { id:"cp3", title:"Valid Parentheses", difficulty:"Easy", category:"Stack", desc:"Given a string s containing '(', ')', '{', '}', '[' and ']', determine if the input string is valid.", template:"function isValid(s) {\n  // Your solution here\n  // Return true or false\n}", hint:"Use a stack. Push opening brackets, pop when you see a matching closing bracket.", link:"https://leetcode.com/problems/valid-parentheses/" },
  { id:"cp4", title:"Maximum Subarray (Kadane's Algorithm)", difficulty:"Medium", category:"Dynamic Programming", desc:"Find the contiguous subarray with the largest sum in an integer array nums.", template:"function maxSubArray(nums) {\n  // Kadane's Algorithm\n  // Return the maximum sum\n}", hint:"Track current sum and max sum. Reset current sum to 0 when it goes negative.", link:"https://leetcode.com/problems/maximum-subarray/" },
  { id:"cp5", title:"Fibonacci (Memoization)", difficulty:"Medium", category:"Dynamic Programming", desc:"Return the nth Fibonacci number using memoization for optimal performance.", template:"function fib(n, memo = {}) {\n  // Memoized Fibonacci\n  // Return fib(n)\n}", hint:"Store already-computed results in the memo object to avoid redundant recursive calls.", link:"https://leetcode.com/problems/fibonacci-number/" },
];

// Export for use in app.js
