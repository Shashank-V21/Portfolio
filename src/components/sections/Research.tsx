import React from "react";
import { motion } from "motion/react";
import { BookOpen, ExternalLink, GraduationCap, Award, FileText } from "lucide-react";
import { researchPapers } from "../../data/portfolioData";
import { jsPDF } from "jspdf";

interface ResearchProps {
  isDarkMode: boolean;
}

const generateSmartMirrorPDF = () => {
  const doc = new jsPDF("p", "mm", "a4");
  
  // Margins & Dimensions
  const marginX = 20;
  let posY = 20;
  const pageWidth = 210;
  const pageHeight = 297;
  const contentWidth = pageWidth - (marginX * 2); // 170

  const drawHeader = () => {
    doc.setFont("helvetica", "oblique");
    doc.setFontSize(8);
    doc.setTextColor(110, 110, 110);
    doc.text("TIJER || ISSN 2349-9249 || © June 2023 Volume 10, Issue 6 || www.tijer.org", pageWidth / 2, 12, { align: "center" });
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.line(marginX, 14, pageWidth - marginX, 14);
  };

  const addNewPage = () => {
    doc.addPage();
    posY = 24;
    drawHeader();
  };

  // Page 1 Setup
  drawHeader();
  posY = 26;

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor(15, 15, 15);
  const titleLines = doc.splitTextToSize("AI SMART MIRROR USING RASPBERRY PI 3B+", contentWidth);
  doc.text(titleLines, pageWidth / 2, posY, { align: "center" });
  posY += (titleLines.length * 6) + 4;

  // Authors
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(40, 40, 40);
  const authorsText = "Manju Shree Yadav D, Purushotham K, Shashank V, Gowrish HB, Pallavi HS, Srinivasappa KV";
  const authorLines = doc.splitTextToSize(authorsText, contentWidth);
  doc.text(authorLines, pageWidth / 2, posY, { align: "center" });
  posY += (authorLines.length * 4.5) + 3;

  // Affiliation
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  const affLines = doc.splitTextToSize("Department of Computer Science and Engineering, Government Polytechnic, K.G.F coromandel post, Kolar Gold Fields - 563118, Karnataka, India", contentWidth);
  doc.text(affLines, pageWidth / 2, posY, { align: "center" });
  posY += (affLines.length * 4.5) + 6;

  // Horizontal separator rule
  doc.setDrawColor(180, 180, 180);
  doc.line(marginX, posY, pageWidth - marginX, posY);
  posY += 6;

  // ABSTRACT Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(15, 15, 15);
  doc.text("ABSTRACT", marginX, posY);
  posY += 5;

  // Abstract content
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  const abstractText = "In a fast-paced world where time has become a major constraint, every minute counts for busy people. With the help of interactive computing and systems that we use in our daily lives, lifestyle and quality are changing dramatically. Many devices and products based on this interactive technology were introduced to the world. The AI Smart Mirror is a project that combines the functionality of a traditional mirror with the intelligence of artificial intelligence. The project uses a Raspberry Pi 3B+, a two-way mirror, a display, a camera, and various sensors to create a smart mirror that can display information, provide assistance, and improve everyday routines. The mirror can display the time, weather, news, and other personalized information. It can also provide assistance through voice commands, facial recognition, and gesture recognition. The project can be used in homes, offices, and public spaces. Users can interact with the mirror by issuing commands, allowing for a more interactive experience.";
  const abstractLines = doc.splitTextToSize(abstractText, contentWidth);
  doc.text(abstractLines, marginX, posY, { align: "justify" });
  posY += (abstractLines.length * 4.2) + 5;

  // Keywords
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("Keywords: ", marginX, posY);
  doc.setFont("helvetica", "italic");
  const kwText = "AI Smart Mirror, Raspberry Pi 3B+, Two-way mirror, Face Recognition, Voice Assistant, Motion Detection.";
  doc.text(kwText, marginX + 18, posY);
  posY += 10;

  // 1. INTRODUCTION
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(15, 15, 15);
  doc.text("1. INTRODUCTION", marginX, posY);
  posY += 5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(55, 55, 55);
  const introText1 = "In the present world, time is a precious commodity, particularly for busy individuals. The advent of interactive computing and embedded systems has revolutionized our lifestyles and dramatically improved our quality of life. These technologies have given rise to a wide range of devices and products that offer convenience, efficiency, and personal security. Whether at home or at work, artificial intelligence and interactive computing have made business operations and multimedia entertainment incredibly easy for users.";
  const introLines1 = doc.splitTextToSize(introText1, contentWidth);
  doc.text(introLines1, marginX, posY, { align: "justify" });
  posY += (introLines1.length * 4.2) + 4;

  const introText2 = "One area where interactive technology can significantly impact our daily lives is in our grooming routines. People often spend considerable time in front of mirrors, assessing their appearance, and performing various grooming tasks. This is a valuable opportunity to accomplish important activities. Enter the Smart Mirror—a remarkable innovation for busy individuals who embrace multitasking and desire real-time updates. The Smart Mirror is not just an ordinary mirror; it incorporates features that display the date, time, weather updates, daily news headlines, which makes it easier to track tasks on the go.";
  const introLines2 = doc.splitTextToSize(introText2, contentWidth);
  
  if (posY + (introLines2.length * 4.2) > pageHeight - 20) {
    addNewPage();
  }
  doc.text(introLines2, marginX, posY, { align: "justify" });
  posY += (introLines2.length * 4.2) + 4;

  const introText3 = "The Capstone project aims to develop an intelligent mirror equipped with facial recognition, a voice assistant, motion detection, and other fundamental functions. The mirror's ability to recognize faces and detect motion improves user interaction and personalization, making it a valuable tool for home automation, office hubs, and interactive smart environments.";
  const introLines3 = doc.splitTextToSize(introText3, contentWidth);
  
  if (posY + (introLines3.length * 4.2) > pageHeight - 20) {
    addNewPage();
  }
  doc.text(introLines3, marginX, posY, { align: "justify" });
  posY += (introLines3.length * 4.2) + 10;

  // Page 2
  addNewPage();

  // 2. APPROACH AND METHODOLOGY
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(15, 15, 15);
  doc.text("2. APPROACH AND METHODOLOGY", marginX, posY);
  posY += 5;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("2.1 Technology Stack", marginX, posY);
  posY += 4;

  const techItems = [
    { label: "Raspberry Pi 3B+:", desc: "Core single-board computational platform managing sensory input-output (GPIO) and processing." },
    { label: "Python:", desc: "Primary programming language for developing automation scripts, API requests, and voice libraries." },
    { label: "OpenCV:", desc: "Computer vision framework enabling facial capture, user recognition, and motion algorithms." },
    { label: "Natural Language Processing (NLP):", desc: "Responsible for voice parsing, intent classification, and command response routing." },
    { label: "Sensor Integration:", desc: "Uses PIR sensors to trigger display awakening upon presence detection for low-overhead consumption." }
  ];

  techItems.forEach(item => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text("• " + item.label, marginX + 4, posY);
    const labelWidth = doc.getTextWidth("• " + item.label) + 2;
    
    doc.setFont("helvetica", "normal");
    const descLines = doc.splitTextToSize(item.desc, contentWidth - labelWidth - 4);
    doc.text(descLines, marginX + 4 + labelWidth, posY);
    posY += (descLines.length * 4.2) + 2;
  });
  posY += 4;

  if (posY > pageHeight - 50) {
    addNewPage();
  }

  // 2.2 Methodologies
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("2.2 Methodology and Key Features", marginX, posY);
  posY += 4;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const methodText = "The project follows an iterative development cycle. Steps include setting up Raspbian OS, configuring network interfaces, building user configurations using HTML/CSS/JS interface, implementing voice engine with speech algorithms, integrating PIR motion sensors, testing breathing cues, and running benchmarks. Daily updates serve news API endpoints, weather APIs, in-mirror compliments, and dynamic calendar synchronizations.";
  const methodLines = doc.splitTextToSize(methodText, contentWidth);
  doc.text(methodLines, marginX, posY, { align: "justify" });
  posY += (methodLines.length * 4.2) + 8;

  if (posY > pageHeight - 65) {
    addNewPage();
  }

  // 3. FINAL OUTPUT & PERFORMANCE
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("3. FINAL OUTPUT & RECOGNITION RESULTS", marginX, posY);
  posY += 5;

  doc.setFont("helvetica", "normal");
  const resultText = "Our fully realized Smart Mirror showcases structured columns for date, time, and custom local weather notifications. When users step in path of the PIR motion sensor, the digital output wakes instantly. The offline OpenCV facial classifier returns localized welcoming feedback (e.g. 'Good morning, Shashank!'), with custom widgets indexing Spotify music loops, respiratory support guides, and bullet headlines.";
  const resultLines = doc.splitTextToSize(resultText, contentWidth);
  doc.text(resultLines, marginX, posY, { align: "justify" });
  posY += (resultLines.length * 4.2) + 8;

  if (posY > pageHeight - 65) {
    addNewPage();
  }

  // 4. CONCLUSION & FUTURE WORK
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("4. CONCLUSION & FUTURE WORK", marginX, posY);
  posY += 5;

  doc.setFont("helvetica", "normal");
  const conclusionText = "The AI Smart Mirror provides a lightweight, highly responsive, and modular computing platform built for smart spaces. It successfully delivers an easy-to-use, multitasking command deck, maximizing user efficiency without excessive overhead. Face recognition models provide accurate person identification, creating a personalized interface suitable for smart-homes and modern workspaces.";
  const conclusionLines = doc.splitTextToSize(conclusionText, contentWidth);
  doc.text(conclusionLines, marginX, posY, { align: "justify" });
  posY += (conclusionLines.length * 4.2) + 5;

  const futureText = "Future scopes can expand custom control systems, implement tactile touchscreen sensors, integrate secure smart-home dashboards (HomeAssistant), and create a unified companion mobile app for widget ordering and personal profile preferences.";
  const futureLines = doc.splitTextToSize(futureText, contentWidth);
  doc.text(futureLines, marginX, posY, { align: "justify" });
  posY += (futureLines.length * 4.2) + 10;

  if (posY > pageHeight - 60) {
    addNewPage();
  }

  // 5. REFERENCES
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("5. REFERENCES", marginX, posY);
  posY += 5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  const referencesList = [
    "[1] M. Sh. Yadav, P. K, Shashank V, Gowrish H, P. HS, S. KV, 'AI Smart Mirror Using Raspberry Pi 3B+', TIJER International Research Journal, Volume 10, Issue 6, June 2023.",
    "[2] Abdullahi Kafi, M. Shaikh Ashikul Alam, Saeed Bin Hossain, 'Artificially Intelligent Smart Mirror using Raspberry Pi', International Journal of Computer Application (IJCA), 2018.",
    "[3] Chethan K, Adnan Ahmed, Nikhil Ganapathy, 'REFLECTA – Artificial Intelligence Based Smart Mirror', IJITEE, 2019."
  ];

  referencesList.forEach(ref => {
    const refLines = doc.splitTextToSize(ref, contentWidth);
    doc.text(refLines, marginX, posY);
    posY += (refLines.length * 3.8) + 1.5;
  });

  // Add footer page numbers
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(140, 140, 140);
    doc.text(`Page ${i} of ${pageCount}`, pageWidth / 2, pageHeight - 10, { align: "center" });
    doc.text("TIJER Journal Center for Research Publications", marginX, pageHeight - 10);
  }

  // Save the generated PDF
  doc.save("AI_Smart_Mirror_using_Raspberry_Pi_3B.pdf");
};

const generatePriceVisionPDF = () => {
  const doc = new jsPDF("p", "mm", "a4");
  
  // Margins & Dimensions
  const marginX = 20;
  let posY = 20;
  const pageWidth = 210;
  const pageHeight = 297;
  const contentWidth = pageWidth - (marginX * 2);

  const drawHeader = () => {
    doc.setFont("helvetica", "oblique");
    doc.setFontSize(8);
    doc.setTextColor(16, 124, 65); // Warm green for IRJMETS
    doc.text("International Research Journal of Modernization in Engineering Technology and Science", pageWidth / 2, 10, { align: "center" });
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor(110, 110, 110);
    doc.setFontSize(7.5);
    doc.text("e-ISSN: 2582-5208 | Volume:08/Issue:01/January-2026 | www.irjmets.com", pageWidth / 2, 14, { align: "center" });
    
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.line(marginX, 16, pageWidth - marginX, 16);
  };

  const addNewPage = () => {
    doc.addPage();
    posY = 24;
    drawHeader();
  };

  // Page 1 Setup
  drawHeader();
  posY = 24;

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor(15, 15, 15);
  const titleLines = doc.splitTextToSize("PRICE VISION AI: MULTIMODAL PRODUCT SEARCH AND CROSS-E-COMMERCE REAL-TIME BARGAIN COMPARISON SYSTEM", contentWidth);
  doc.text(titleLines, pageWidth / 2, posY, { align: "center" });
  posY += (titleLines.length * 6) + 4;

  // Authors
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(40, 40, 40);
  const authorsText = "Dr. Shashikumar D R, Prof. Sunil Kumar B, Shashank V, Sanjay KR, Sanjay P, Vikas Gowda GN";
  const authorLines = doc.splitTextToSize(authorsText, contentWidth);
  doc.text(authorLines, pageWidth / 2, posY, { align: "center" });
  posY += (authorLines.length * 4.5) + 3;

  // Affiliation
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  const affLines = doc.splitTextToSize("Department of Computer Science and Engineering, Sai Vidya Institute of Technology, Bengaluru, India", contentWidth);
  doc.text(affLines, pageWidth / 2, posY, { align: "center" });
  posY += (affLines.length * 4.5) + 6;

  // Horizontal separator rule
  doc.setDrawColor(180, 180, 180);
  doc.line(marginX, posY, pageWidth - marginX, posY);
  posY += 6;

  // ABSTRACT Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(15, 15, 15);
  doc.text("ABSTRACT", marginX, posY);
  posY += 5;

  // Abstract content
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  const abstractText = "As e-commerce websites expand rapidly, consumers are confronted with limited ability to find the best deals based on fragmented prices, concealed shipping fees, uncertain delivery periods, and seller reliability inconsistency. Current price comparison systems mainly rely on the cheapest sticker price, ignoring other factors that affect the ultimate buying decision. This paper introduces Price Vision AI, a system powered by AI that allows users to upload an image of a product, identify the product automatically using vision-language models (CLIP/BLIP), normalize product information, retrieve up-to-date pricing information from large online marketplaces (Flipkart, Amazon), and calculate the actual best offer by taking into account final price, coupon discount, delivery time, shipping fees, and seller reputation. The system is built with FastAPI (backend), Playwright (scraping), React (frontend), and Redis/Postgres (data management). The most important features are watchlists, price-drop notifications, and historical price trending. Experimental testing shows high recognition accuracy of products (>90%), quick response times (<= 6s p95 for two-source comparisons), and stable error handling.";
  const abstractLines = doc.splitTextToSize(abstractText, contentWidth);
  doc.text(abstractLines, marginX, posY, { align: "justify" });
  posY += (abstractLines.length * 4.2) + 5;

  // Keywords
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text("Keywords: ", marginX, posY);
  doc.setFont("helvetica", "italic");
  const kwText = "Price Comparison, E-Commerce, Artificial Intelligence, Vision-Language Models, CLIP, BLIP, Playwright, FastAPI.";
  doc.text(kwText, marginX + 18, posY);
  posY += 10;

  // I. INTRODUCTION
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(15, 15, 15);
  doc.text("I. INTRODUCTION", marginX, posY);
  posY += 5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(55, 55, 55);
  const introText1 = "The international spread of e-commerce sites has dramatically altered the way consumers buy, providing unparalleled access to a staggering diversity of products. Yet the decentralized environment of the contemporary digital economy, controlled by giant retailers like Flipkart and Amazon, has brought with it an essential challenge: price and deal fragmentation. The shopper must typically sort through a confusing array of fluctuating base prices, dynamic coupons, changing shipping charges, and inconstant seller reputation to find the actual value proposition of an offer.";
  const introLines1 = doc.splitTextToSize(introText1, contentWidth);
  doc.text(introLines1, marginX, posY, { align: "justify" });
  posY += (introLines1.length * 4.2) + 4;

  const introText2 = "State-of-the-art price comparison engines are myopically engineered; they are mostly keyword-based matching-oriented and focus exclusively on the lowest sticker price (Pmin) as the top priority, thus overlooking vital drivers of final transactional cost. These overlooked factors include variable costs (dynamic shipping fees, time-sensitive coupons) and trust parameters (merchant ratings, fulfillment guarantees). Furthermore, traditional text inputs do not align with modern visual search habits. This paper presents Price Vision AI, an AI-based engine engineered to bridge these gaps through multimodal input and real-time Multi-Criteria Decision-Making (MCDM).";
  const introLines2 = doc.splitTextToSize(introText2, contentWidth);

  if (posY + (introLines2.length * 4.2) > pageHeight - 20) {
    addNewPage();
  }
  doc.text(introLines2, marginX, posY, { align: "justify" });
  posY += (introLines2.length * 4.2) + 10;

  // Page 2 Setup
  addNewPage();

  // II. LITERATURE REVIEW
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(15, 15, 15);
  doc.text("II. LITERATURE REVIEW", marginX, posY);
  posY += 5;

  doc.setFont("helvetica", "normal");
  const litText = "The development of Price Vision AI leverages advancements in three different fields: multimodal intelligence (VLM), dynamic web data extraction (browser automation), and multi-criteria decision-making. Conventional price comparison models rely on keyword catalogs and APIs, omitting hidden costs and vendor reliability. To address visual discovery, Contrastive Language-Image Pre-training (CLIP) maps image vectors to text, and Bootstrapping Language-Image Pre-training (BLIP) yields descriptive product captions to normalize naming variations across platforms. Dynamic scraper engines using Playwright solve the limitation of static HTTP requests against JavaScript-rendered sites securely, enabling real-time capture of volatile prices, stock alerts, and promotional coupons.";
  const litLines = doc.splitTextToSize(litText, contentWidth);
  doc.text(litLines, marginX, posY, { align: "justify" });
  posY += (litLines.length * 4.2) + 8;

  // III. METHODOLOGY & TECH STACK
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("III. PROPOSED METHODOLOGY & SYSTEM ARCHITECTURE", marginX, posY);
  posY += 5;

  const pvTeches = [
    { name: "Multimodal Recognition:", info: "Zero-shot product identification utilizing CLIP and BLIP vision-language models to extract high-quality titles from user uploads with 90%+ accuracy." },
    { name: "Asynchronous Data Fetching:", info: "Asynchronous Python (asyncio) combined with Playwright browser connectors concurrently scrap Flipkart/Amazon in parallel." },
    { name: "Best-Deal Scoring (MCDM):", info: "Implements a weighted Multi-Criteria Decision-Making (MCDM) model, calculating a single final rank score (Si) based on Price, ETA, and Seller Rating using Min-Max scaling." },
    { name: "FastAPI & Distributed Queues:", info: "ASGI FastAPI backend serves low-latency requests in parallel. Redis is deployed for scraped data caching and managing concurrent scraping tasks safely." },
  ];

  pvTeches.forEach(tech => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text("• " + tech.name, marginX + 4, posY);
    const techLabelWidth = doc.getTextWidth("• " + tech.name) + 2;

    doc.setFont("helvetica", "normal");
    const techDescLines = doc.splitTextToSize(tech.info, contentWidth - techLabelWidth - 4);
    doc.text(techDescLines, marginX + 4 + techLabelWidth, posY);
    posY += (techDescLines.length * 4.2) + 2;
  });
  posY += 6;

  if (posY > pageHeight - 65) {
    addNewPage();
  }

  // IV. RESULTS AND CONCLUSION
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.text("IV. RESULTS ANALYSIS & EXPERIMENTAL PERFORMANCE", marginX, posY);
  posY += 5;

  doc.setFont("helvetica", "normal");
  const resultsInfo = "Extensive testing reveals highly competitive performance metrics. Price Vision AI achieved a Top-1 image recognition accuracy of 82.5% and a Top-3 accuracy exceeding 90%. Real-time data acquisition across Flipkart and Amazon achieves an end-to-end response delay of <= 6 seconds at the 95th percentile, with an average transaction scoring turnaround of 4.2s. Furthermore, the Redis-backed scraper queue delivers an error recovery success rate above 95% using exponential network backoffs, effectively mitigating IP blocks and transient failures.";
  const resultsInfoLines = doc.splitTextToSize(resultsInfo, contentWidth);
  doc.text(resultsInfoLines, marginX, posY, { align: "justify" });
  posY += (resultsInfoLines.length * 4.2) + 6;

  if (posY > pageHeight - 60) {
    addNewPage();
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text("V. CONCLUSION & REFERENCES", marginX, posY);
  posY += 5;

  doc.setFont("helvetica", "normal");
  const pvConclusionText = "Price Vision AI demonstrates the immense viability of coupling multimodal computer vision with automated browser scraper networks to empower online shoppers. By scaling from a simple lowest-sticker paradigm to a weighted MCDM deal recommendation engine, it provides consumers with a transparent and smart overview of market deals. Future plans encompass integrating merchant APIs and adding personalized visual alerts.";
  const pvConclusionLines = doc.splitTextToSize(pvConclusionText, contentWidth);
  doc.text(pvConclusionLines, marginX, posY, { align: "justify" });
  posY += (pvConclusionLines.length * 4.2) + 6;

  const pvRefs = [
    "[1] Radford, A. et al. 'Learning Transferable Visual Models From Natural Language Supervision', ICML, 2021.",
    "[2] Li, J. et al. 'BLIP: Bootstrapping Language-Image Pre-training for Unified Vision-Language Understanding', ICML, 2022.",
    "[3] Dr. Shashikumar D R, Prof. Sunil Kumar B, Shashank V et al. 'PRICE VISION AI', IRJMETS, Vol. 08, Jan 2026."
  ];

  pvRefs.forEach(ref => {
    const rLines = doc.splitTextToSize(ref, contentWidth);
    if (posY + (rLines.length * 3.8) > pageHeight - 15) {
      addNewPage();
    }
    doc.text(rLines, marginX, posY);
    posY += (rLines.length * 3.8) + 1.5;
  });

  // Page Numbers Footer
  const pageCountObj = doc.getNumberOfPages();
  for (let idx = 1; idx <= pageCountObj; idx++) {
    doc.setPage(idx);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(140, 140, 140);
    doc.text(`Page ${idx} of ${pageCountObj}`, pageWidth / 2, pageHeight - 10, { align: "center" });
    doc.text("IRJMETS Journal for Scientific Publication", marginX, pageHeight - 10);
  }

  doc.save("PRICE_VISION_AI_Research_Paper.pdf");
};

export default function Research({ isDarkMode }: ResearchProps) {
  // Return different colors for badges
  const getBadgeColors = (badge: string) => {
    if (badge.toLowerCase().includes("ieee")) {
      return "bg-cyan-500/10 text-cyan-400 border-cyan-500/25";
    }
    if (badge.toLowerCase().includes("tijer")) {
      return "bg-amber-500/10 text-amber-500 border-amber-500/25";
    }
    if (badge.toLowerCase().includes("irjmets")) {
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/25";
    }
    return "bg-purple-500/10 text-purple-400 border-purple-500/25";
  };

  const handleOpenPdf = (title: string, url: string) => {
    const cvNotice = document.createElement("div");
    cvNotice.className = `fixed top-6 left-1/2 -translate-x-1/2 px-6 py-4 rounded-xl shadow-2xl font-mono text-xs z-[9999] border transition-all ${
      isDarkMode ? "bg-neutral-900 text-purple-300 border-white/10" : "bg-white text-purple-600 border-purple-100"
    }`;

    if (url === "ai-smart-mirror-paper") {
      cvNotice.innerHTML = `
        <div class="flex items-center gap-2">
          <svg class="h-4 w-4 animate-bounce text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          <span>Compiling official TIJER publication PDF dynamic download...</span>
        </div>
      `;
      document.body.appendChild(cvNotice);
      setTimeout(() => {
        try {
          generateSmartMirrorPDF();
        } catch (e) {
          console.error("PDF generation failed:", e);
        }
        cvNotice.classList.add("opacity-0");
        setTimeout(() => cvNotice.remove(), 500);
      }, 1500);
    } else if (url === "price-vision-ai-paper") {
      cvNotice.innerHTML = `
        <div class="flex items-center gap-2">
          <svg class="h-4 w-4 animate-bounce text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          <span>Compiling official IRJMETS publication PDF dynamic download...</span>
        </div>
      `;
      document.body.appendChild(cvNotice);
      setTimeout(() => {
        try {
          generatePriceVisionPDF();
        } catch (e) {
          console.error("PDF generation failed:", e);
        }
        cvNotice.classList.add("opacity-0");
        setTimeout(() => cvNotice.remove(), 500);
      }, 1500);
    } else {
      cvNotice.innerHTML = `
        <div class="flex items-center gap-2">
          <svg class="h-4 w-4 animate-bounce text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          <span>Redirecting safely to ArXiv draft for: "${title.substring(0, 30)}..."</span>
        </div>
      `;
      document.body.appendChild(cvNotice);
      setTimeout(() => {
        cvNotice.classList.add("opacity-0");
        setTimeout(() => cvNotice.remove(), 500);
        window.open(url, "_blank");
      }, 1500);
    }
  };

  return (
    <section
      id="research"
      className="relative py-24 px-6 md:px-12 overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-[160px] mix-blend-screen opacity-5 transition-colors ${
          isDarkMode ? "bg-purple-600" : "bg-purple-200"
        }`} />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-purple-500 mb-2 font-bold"
          >
            Publications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Research & Academic Works
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Paper Cards List */}
        <div className="space-y-6">
          {researchPapers.map((paper, idx) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ x: 6 }}
              className={`p-6 md:p-8 rounded-3xl border transition-all flex flex-col md:flex-row md:items-start justify-between gap-6 ${
                isDarkMode 
                  ? "bg-neutral-900/40 border-white/5 hover:border-purple-500/20" 
                  : "bg-white border-purple-100 hover:border-purple-500/20 shadow-lg shadow-purple-500/5"
              }`}
            >
              {/* Left academic bullet point */}
              <div className="flex gap-4 items-start flex-grow">
                <div className={`p-3 rounded-2xl flex items-center justify-center shrink-0 w-12 h-12 ${
                  isDarkMode ? "bg-purple-950/25 border border-purple-50/10" : "bg-purple-50 border border-purple-100"
                }`}>
                  <BookOpen className="w-6 h-6 text-purple-400" />
                </div>

                <div className="flex flex-col">
                  {/* Badge & Meta Row */}
                  <div className="flex flex-wrap gap-2 items-center mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${getBadgeColors(paper.badge)}`}>
                      {paper.badge}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 font-semibold">{paper.date}</span>
                  </div>

                  {/* Title of Paper */}
                  <h3 className={`font-display font-semibold text-lg sm:text-xl mb-2 transition-colors ${
                    isDarkMode ? "text-neutral-100" : "text-neutral-800"
                  }`}>
                    {paper.title}
                  </h3>

                  {/* Authors list */}
                  <p className="text-xs font-mono text-purple-400/80 mb-3 font-semibold">
                    Authors: {paper.authors}
                  </p>

                  {/* Conference or journal detail */}
                  {paper.journal && (
                    <p className={`text-xs italic mb-4 font-sans ${isDarkMode ? "text-neutral-500" : "text-neutral-500"}`}>
                      Published in // {paper.journal}
                    </p>
                  )}

                  {/* Paper summary abstract */}
                  <p className={`text-sm leading-relaxed ${
                    isDarkMode ? "text-neutral-400" : "text-neutral-600"
                  }`}>
                    {paper.summary}
                  </p>
                </div>
              </div>

              {/* View PDF CTA button right column */}
              <div className="shrink-0 flex items-center justify-start md:justify-end self-start md:self-center pl-16 md:pl-0">
                <button
                  onClick={() => handleOpenPdf(paper.title, paper.pdfUrl || "https://arxiv.org")}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 group transition-all duration-300 ${
                    isDarkMode
                      ? "bg-neutral-800 hover:bg-neutral-700 text-white"
                      : "bg-purple-50 hover:bg-purple-100 text-purple-600 border border-purple-200"
                  }`}
                >
                  <FileText className="w-4 h-4 text-purple-500" />
                  <span>DOWNLOAD</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
