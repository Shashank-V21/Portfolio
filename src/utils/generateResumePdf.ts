import { jsPDF } from "jspdf";

/**
 * Generates a professionally polished, ATS-compliant PDF of Shashank's resume
 * matching the visual screenshot structure using elegant serif typography, 
 * clean horizontal lines, and strict layout spacing.
 */
export function generateResumePdf(): void {
  // Use Letter size: 612 x 792 points
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "letter",
  });

  const marginX = 40;
  let currentY = 40;
  const contentWidth = 612 - marginX * 2; // 532 pt available width

  // Helper to add clean horizontal divider lines
  const drawLine = () => {
    currentY += 4;
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.5);
    doc.line(marginX, currentY, 612 - marginX, currentY);
    currentY += 14;
  };

  // Helper to add section headings
  const addSectionHeader = (title: string) => {
    currentY += 6;
    doc.setFont("times", "bold");
    doc.setFontSize(11);
    doc.setTextColor(30, 30, 30);
    doc.text(title.toUpperCase(), marginX, currentY);
    drawLine();
  };

  // --- HEADER SECTION ---
  doc.setFont("times", "normal");
  
  // Name
  doc.setFontSize(22);
  doc.setTextColor(0, 0, 0);
  doc.text("SHASHANK V", 306, currentY, { align: "center" });
  currentY += 16;

  // Location
  doc.setFontSize(10);
  doc.text("Bengaluru, India", 306, currentY, { align: "center" });
  currentY += 14;

  // Contact & Social Icons
  const contactText = "+91-9353022391   |   shashank.v0084@gmail.com   |   LinkedIn   |   GitHub";
  doc.setFontSize(9.5);
  doc.text(contactText, 306, currentY, { align: "center" });
  currentY += 14;

  // Thin separator under header
  doc.setDrawColor(80, 80, 80);
  doc.setLineWidth(1.2);
  doc.line(marginX, currentY, 612 - marginX, currentY);
  currentY += 16;


  // --- SUMMARY SECTION ---
  addSectionHeader("Summary");
  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(60, 60, 60);

  const summaryParagraph = 
    "Aspiring Software Developer and Computer Science Engineering student with experience in developing academic " +
    "projects, including an AI-powered smart mirror with facial recognition and real-time data integration. Passionate " +
    "about transforming theoretical knowledge into practical solutions through clean, maintainable code, and eager to " +
    "contribute technical skills, creativity, and enthusiasm to real-world software development projects.";

  const splitSummary = doc.splitTextToSize(summaryParagraph, contentWidth);
  doc.text(splitSummary, marginX, currentY);
  currentY += splitSummary.length * 13 + 12;


  // --- EDUCATION SECTION ---
  addSectionHeader("Education");

  // Ed 1: SVIT
  doc.setFont("times", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(30, 30, 30);
  doc.text("Sai Vidya Institute of Technology", marginX, currentY);
  
  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.text("Dec 2023 - Present", 612 - marginX, currentY, { align: "right" });
  currentY += 13;

  doc.setFont("times", "italic");
  doc.setFontSize(9.5);
  doc.text("Bachelor of Engineering (B.E.) - Computer Science and Engineering - CGPA - 7.8", marginX, currentY);
  
  doc.setFont("times", "normal");
  doc.text("Bengaluru, India", 612 - marginX, currentY, { align: "right" });
  currentY += 18;

  // Ed 2: Polytechnic
  doc.setFont("times", "bold");
  doc.setFontSize(10.5);
  doc.text("Government Polytechnic", marginX, currentY);
  
  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.text("Nov 2020 - Aug 2023", 612 - marginX, currentY, { align: "right" });
  currentY += 13;

  doc.setFont("times", "italic");
  doc.text("Diploma - Computer Science - CGPA - 7.9", marginX, currentY);
  
  doc.setFont("times", "normal");
  doc.text("K.G.F, India", 612 - marginX, currentY, { align: "right" });
  currentY += 20;


  // --- TECHNICAL SKILLS SECTION ---
  addSectionHeader("Technical Skills");
  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(30, 30, 30);

  const skillsList = [
    { label: "Languages", content: "Python, Java, C++, SQL" },
    { label: "Web Development", content: "HTML, CSS, JavaScript" },
    { label: "Databases", content: "MySQL" },
    { label: "Tools & IDEs", content: "Git, VS Code, PyCharm, IntelliJ, Jupyter Notebook" },
    { label: "Cloud & Analytics", content: "Google Cloud Platform (GCP), Power BI" },
    { label: "Core Concepts", content: "Data Structures, Algorithms, OOP, DBMS" },
  ];

  skillsList.forEach((skill) => {
    doc.setFont("times", "bold");
    doc.text(`•  ${skill.label}: `, marginX, currentY);
    const labelWidth = doc.getTextWidth(`•  ${skill.label}: `);
    
    doc.setFont("times", "normal");
    doc.text(skill.content, marginX + labelWidth, currentY);
    currentY += 13;
  });
  currentY += 10;


  // --- PROJECTS SECTION ---
  addSectionHeader("Projects");

  const projects = [
    {
      title: "AI Smart Mirror using Raspberry Pi 3B+",
      timeline: "Jan 2020 - Oct 2023",
      techs: "Python, Raspberry Pi, OpenCV, React, Node.js",
      bullets: [
        "Built multi-modal interface combining facial recognition (92% accuracy), voice commands, and gesture controls",
        "Integrated real-time data feed (weather/news) with sub-second latency (< 1s response time)",
        "Optimized power consumption by 35% through dynamic display brightness algorithms",
      ]
    },
    {
      title: "Deepfake Detection System",
      timeline: "Dec 2023 - Feb 2024",
      techs: "Python, TensorFlow, OpenCV, scikit-learn",
      bullets: [
        "Developed CNN+SVM pipeline achieving 94% accuracy on FaceForensics++ dataset",
        "Implemented real-time detection at 15 FPS using MTCNN face extraction",
        "Reduced false positives by 30% through temporal consistency verification",
      ]
    },
    {
      title: "Price Vision AI",
      timeline: "Ongoing",
      techs: "AI/ML, Flipkart & Amazon API, Python, Next.js",
      bullets: [
        "Implementing image-based and text-based product search using AI/ML for product recognition",
        "Building a price comparison system that fetches real-time data from websites such as Flipkart and Amazon",
        "Designing a user interface that displays product details, images, lowest price, and direct purchase links",
      ]
    }
  ];

  projects.forEach((proj) => {
    // Project Title
    doc.setFont("times", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(30, 30, 30);
    doc.text(proj.title, marginX, currentY);

    // Timeline
    doc.setFont("times", "normal");
    doc.setFontSize(9.5);
    doc.text(proj.timeline, 612 - marginX, currentY, { align: "right" });
    currentY += 13;

    // Bullets
    proj.bullets.forEach((bullet) => {
      doc.setFont("times", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(60, 60, 60);
      
      const fullBullet = `•  ${bullet}`;
      const splitBullet = doc.splitTextToSize(fullBullet, contentWidth - 10);
      
      // Handle multi-line bullets properly
      for (let i = 0; i < splitBullet.length; i++) {
        const indentX = i === 0 ? marginX + 10 : marginX + 20;
        doc.text(splitBullet[i], indentX, currentY);
        currentY += 12;
      }
    });

    // Technologies Used Line
    doc.setFont("times", "bold");
    doc.setFontSize(9);
    doc.text("•  Technologies: ", marginX + 10, currentY);
    const techLabelWidth = doc.getTextWidth("•  Technologies: ");
    
    doc.setFont("times", "normal");
    doc.setTextColor(30, 30, 30);
    doc.text(proj.techs, marginX + 10 + techLabelWidth, currentY);
    
    currentY += 16;
  });
  currentY += 4;


  // --- CERTIFICATIONS SECTION ---
  addSectionHeader("Certifications");

  const certifications = [
    {
      title: "Deloitte Australia - Data Analytics Job Simulation | Forage",
      timeline: "Apr 2025",
      bullet: "Gained exposure to industry analytics workflow, data cleaning, and visualization"
    },
    {
      title: "Power BI | United Latino Students Association",
      timeline: "Apr 2025",
      bullet: "Built interactive dashboards and learned data storytelling using Power BI"
    }
  ];

  certifications.forEach((cert) => {
    doc.setFont("times", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(30, 30, 30);
    doc.text(cert.title, marginX, currentY);

    doc.setFont("times", "normal");
    doc.setFontSize(9.5);
    doc.text(cert.timeline, 612 - marginX, currentY, { align: "right" });
    currentY += 13;

    doc.setFont("times", "normal");
    doc.setTextColor(60, 60, 60);
    doc.text(`•  ${cert.bullet}`, marginX + 10, currentY);
    currentY += 16;
  });

  // Save the document to trigger direct browser download
  doc.save("Shashank_V_Resume.pdf");
}
