export interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  github?: string;
  live?: string;
  researchPaper?: string;
  image: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  iconName: string;
}

export interface SkillCategory {
  name: string;
  skills: SkillItem[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  summary: string;
  authors: string;
  journal?: string;
  date: string;
  badge: string;
  pdfUrl?: string;
}

export interface CreatorVideo {
  id: string;
  title: string;
  category: "Vlog" | "Challenge" | "Food Review";
  duration: string;
  views: string;
  publishedDate: string;
  videoUrl: string;
  embedId: string;
  thumbnail: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "project" | "achievement" | "certification" | "goal" | "youtube" | "internship" | "innovation";
  tags?: string[];
}
