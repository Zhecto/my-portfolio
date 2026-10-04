import type { LucideIcon } from 'lucide-react';
import type { ComponentProps, ComponentType } from 'react';

/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
export interface Media {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  desc: string;
  techStacks: string[];
  projectUrl: string;
  landscape: Media[];
  portrait?: Media[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  joinDate: string;
  resignDate?: string;
  achievements: string[];
  skills: string[];
}

export interface CertificateFile {
  src: string;
  type: 'image' | 'pdf';
}

export interface EducationItem {
  title: string;
  academy: string;
  year: string;
  certificate: string;
  Icon: LucideIcon;
  certificateFile?: CertificateFile;
  credentialUrl?: string;
}

export interface TechStackItem {
  name: string;
  Icon: ComponentType<ComponentProps<'svg'>>;
}