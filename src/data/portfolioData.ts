import { Project, SkillCategory, ResearchPaper, CreatorVideo, TimelineItem } from "../types";
import profileImg from "../assets/images/profile.jpg";
import project1Img from "../assets/images/project1.jpg";
import project2Img from "../assets/images/project2.jpg";
import project3Img from "../assets/images/project3.jpg";
import project4Img from "../assets/images/project4.jpg";

export const heroData = {
  name: "Shashank V",
  role: "Full Stack Developer & Content Creator",
  tagline: "Developer by logic, creator by passion.",
  shortIntro: "Aspiring Full Stack Developer passionate about building impactful digital experiences and sharing creativity through content creation.",
  cta: {
    projects: "View Projects",
    resume: "Download Resume",
    contact: "Contact Me"
  }
};

export const aboutData = {
  profileImage: profileImg, // New premium portrait
  name: "Shashank V",
  bio: "I’m Shashank V, an aspiring Full Stack Developer who enjoys building projects, exploring new technologies, and learning through real-world experiences. I’m passionate about AI, web development, and creating digital solutions that are practical, modern, and impactful.\n\nBeyond tech, I also enjoy creating YouTube content like vlogs, challenge videos, and food reviews. Content creation is something I genuinely love because it allows me to share experiences, express creativity, and connect with people in a different way.",
  stats: [
    { value: "4+", label: "Advanced AI Projects", description: "Built with TensorFlow & PyTorch" },
    { value: "2", label: "Research Papers", description: "Deepfake Detection & Price ML" },
    { value: "2000+", label: "Creator Reach", description: "Shashank Diaries digital community" },
    { value: "10+", label: "Tech Skills", description: "Across Core CS, ML & Web Stack" }
  ],
  interests: [
    { title: "AI & Neural Networks", desc: "Building CLIP, BLIP, CNN and custom computer vision architectures." },
    { title: "Full Stack Systems", desc: "Crafting optimized microservices, cloud pipelines and scalable web apps." },
    { title: "Creative Storytelling", desc: "Engaging content sharing technical breakthroughs and authentic local life." },
    { title: "Empowering Infrastructure", desc: "Leveraging decentralized or community-centric monitoring for social impact." }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Web Development",
    skills: [
      { name: "HTML5", iconName: "FileHtml" },
      { name: "CSS3", iconName: "FileCode" }
    ]
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", iconName: "FileCode2" },
      { name: "Java (Intermediate)", iconName: "Coffee" },
      { name: "C++ (Intermediate)", iconName: "Terminal" }
    ]
  },
  {
    name: "Databases & Storage",
    skills: [
      { name: "MySQL", iconName: "Database" },
      { name: "DBMS Concepts", iconName: "Layers" }
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Google Cloud Platform", iconName: "Cloud" },
      { name: "Raspberry Pi", iconName: "HardDrive" },
      { name: "Power BI (Basics)", iconName: "BarChart3" },
      { name: "Git & Version Control", iconName: "GitBranch" },
      { name: "VS Code / Jupyter Notebook", iconName: "Sliders" }
    ]
  },
  {
    name: "Core Computer Science",
    skills: [
      { name: "Data Structures", iconName: "Network" },
      { name: "Algorithms", iconName: "Binary" },
      { name: "Object Oriented Progr (OOP)", iconName: "Blocks" },
      { name: "System Architecture", iconName: "Waypoints" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "price-vision-ai",
    title: "PRICE VISION AI",
    description: "An AI-powered smart price comparison and analytics platform. Utilizes state-of-the-art multimodal alignment models (CLIP & BLIP) with computer vision to recognize product images and match them across diverse e-commerce storefronts in real-time.",
    techs: ["Next.js", "React", "FastAPI", "PostgreSQL", "Redis", "TensorFlow", "PyTorch", "CLIP", "BLIP"],
    github: "https://github.com/shashank-v/price-vision-ai",
    researchPaper: "#research",
    image: project1Img,
    featured: true
  },
  {
    id: "ai-smart-mirror",
    title: "AI SMART MIRROR USING RASPBERRY PI 3B+",
    description: "An interactive, voice-controlled hardware smart mirror utilizing Raspberry Pi. Integrates deep facial recognition to load custom user profiles, high-speed weather telemetry, Google Calendar sync, and custom English NLP voice commands for fully contactless control.",
    techs: ["Python", "OpenCV", "TensorFlow", "Raspberry Pi", "NLP"],
    github: "https://github.com/shashank-v/ai-smart-mirror",
    researchPaper: "#research",
    image: project2Img,
    featured: true
  },
  {
    id: "deepfake-detection",
    title: "Deepfake Detection System",
    description: "An enterprise-grade Convolutional Neural Network (CNN) pipeline designed to identify frame-by-frame deepfake manipulations. Detects pixel anomalies and compression discrepancies in high-resolution video streams with customizable sensitivity thresholds.",
    techs: ["Python", "TensorFlow", "OpenCV", "CNN", "Keras"],
    github: "https://github.com/shashank-v/deepfake-detector",
    image: project3Img,
    featured: true
  },
  {
    id: "grama-urja",
    title: "Grama-Urja",
    description: "A community-focused, crowdsourced smart application helping farmers monitor and record local rural electricity load fluctuations. Empowers farmers with micro-telemetry reports of power outages to optimize irrigation grids and crops.",
    techs: ["Android Studio", "Firebase", "Java", "Kotlin"],
    github: "https://github.com/Shashank-V21/Grama-Urja-App.git",
    image: project4Img,
    featured: true
  }
];

export const researchPapers: ResearchPaper[] = [
  {
    id: "paper-1",
    title: "AI SMART MIRROR USING RASPBERRY PI 3B+",
    authors: "Manju Shree Yadav D, Purushotham K, Shashank V, Gowrish HB, Pallavi HS, Srinivasappa KV",
    summary: "The AI Smart Mirror is a project that combines the functionality of a traditional mirror with the intelligence of artificial intelligence. The project uses a Raspberry Pi 3B+, a two-way mirror, a display, a camera, and various sensors to create a smart mirror that can display information, provide assistance, and improve everyday routines through voice commands, facial recognition, and gesture recognition.",
    journal: "TIJER - INTERNATIONAL RESEARCH JOURNAL (ISSN: 2349-9249) | June 2023 Volume 10, Issue 6",
    date: "Published June 2023",
    badge: "TIJER Publication",
    pdfUrl: "ai-smart-mirror-paper"
  },
  {
    id: "paper-2",
    title: "PRICE VISION AI",
    authors: "Dr. Shashikumar D R, Prof. Sunil Kumar B, Shashank V, Sanjay KR, Sanjay P, Vikas Gowda GN",
    summary: "Introduces Price Vision AI, an AI-powered system that allows users to upload an image of a product, identify the product automatically using vision-language models (CLIP/BLIP), normalize product info, retrieve up-to-date pricing from Flipkart and Amazon, and calculate the actual best offer using a Multi-Criteria Decision-Making (MCDM-inspired) scoring model. Powered by FastAPI, Playwright, React, and Redis/PostgreSQL.",
    journal: "International Research Journal of Modernization in Engineering Technology and Science (IRJMETS) | Volume 08, Issue 01",
    date: "Published January 2026",
    badge: "IRJMETS Publication",
    pdfUrl: "price-vision-ai-paper"
  }
];

export const creatorJourneyVideos: CreatorVideo[] = [
  {
    id: "video-1",
    title: "SWIMMING MADDUVAGA - YEN AYTHU GOTHA 😱 Shocking Moment!",
    category: "Vlog",
    duration: "11:24",
    views: "21.6K views",
    publishedDate: "1 week ago",
    videoUrl: "https://youtu.be/0gpOTnxQMPI",
    embedId: "0gpOTnxQMPI",
    thumbnail: "https://img.youtube.com/vi/0gpOTnxQMPI/maxresdefault.jpg"
  },
  {
    id: "video-2",
    title: "UNLIMITED PANI PURI (GOLGAPPA) EATING CHALLENGE 😱",
    category: "Challenge",
    duration: "13:45",
    views: "34.5K views",
    publishedDate: "2 weeks ago",
    videoUrl: "https://youtu.be/4jtq2VXQjt4",
    embedId: "4jtq2VXQjt4",
    thumbnail: "https://img.youtube.com/vi/4jtq2VXQjt4/maxresdefault.jpg"
  },
  {
    id: "video-3",
    title: "Akshatha Nati Style Food Vlog 🍲 | Yelahanka Oota with Friends",
    category: "Food Review",
    duration: "10:15",
    views: "24.1K views",
    publishedDate: "3 weeks ago",
    videoUrl: "https://youtu.be/GdV9qjQ0vhw",
    embedId: "GdV9qjQ0vhw",
    thumbnail: "https://img.youtube.com/vi/GdV9qjQ0vhw/maxresdefault.jpg"
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "time-1",
    year: "2020 - 2023",
    title: "Diploma - First Step Into Technology",
    subtitle: "Diploma Polytechnic , K.G.F",
    description: "My journey into technology began during my Diploma, where I discovered my passion for coding, development, and building real-world projects.",
    type: "education",
    tags: ["HTML", "operating system (Basics)", "JAVA (BASICS)", "PYTHON (BASICS)"]
  },
  {
    id: "time-6",
    year: "2023",
    title: "Turning Ideas Into Innovation",
    subtitle: "Final Year Project - Diploma",
    description: "Built my final year project, “AI Smart Mirror Using Raspberry Pi 3B+”, which sparked my interest in AI-powered applications and smart technology solutions.",
    type: "innovation",
    tags: ["Raspberry Pi 3B+", "IoT", "AI", "Python"]
  },
  {
    id: "time-5",
    year: "2023 - 2026",
    title: "Stepping Further Into Technology",
    subtitle: "Sai vidya institute of technology, Rajanukunte",
    description: "Continued my academic journey through B.E. in Computer Science Engineering via lateral entry, exploring development, AI, and modern tech concepts. Worked on improving technical skills through continuous learning and project-based experience.",
    type: "education",
    tags: ["Computer Science", "Algorithms", "OOP", "DBMS"]
  },
  {
    id: "time-7",
    year: "2024",
    title: "Exploring AI & Innovation",
    subtitle: "Projects",
    description: "Started working on AI-based projects like Deepfake Detection and PRICE VISION AI, exploring real-world applications of machine learning and intelligent systems.",
    type: "innovation",
    tags: ["Deepfake Detection", "Price Vision AI"]
  },
  {
    id: "time-4",
    year: "2026",
    title: "Internship Experience",
    subtitle: "MindMatrix.io , HSR Layout, Bengaluru",
    description: "Completed an online internship in Android App Development using Generative AI as part of my final semester, working on modern application development concepts and real-world project tasks.",
    type: "internship",
    tags: ["Android", "Generative AI", "Kotlin", "Java"]
  },
  {
    id: "time-2",
    year: "2026",
    title: "Started My Creator Journey - Shashank Diaries",
    subtitle: "YouTube",
    description: "Content creation has always been one of my passions, where I enjoy sharing daily experiences, challenge videos, and food reviews through YouTube. It gives me a space to express creativity, connect with people, and capture meaningful moments beyond technology.",
    type: "youtube",
    tags: ["YouTube", "Vlogging", "Creativity"]
  },
  {
    id: "time-3",
    year: "2026",
    title: "Growing Ahead",
    subtitle: "In Future",
    description: "Working towards building a successful career in technology while continuing to follow my passion for content creation and creativity.",
    type: "goal",
    tags: ["Full stack Developer", "YouTuber"]
  }
];
