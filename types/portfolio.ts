export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  achievements: string[];
  technologies: string[];
}

export interface PreviousRole {
  role: string;
  company: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  hours: number;
  credentialCode: string;
  profileUrl: string;
  credentialUrl: string;
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  status: string;
}
