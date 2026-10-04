/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Assets
 */
import {
  GraduationCapIcon,
  AwardIcon,
} from 'lucide-react';
import {
  React,
  NextJs,
  TypeScript,
  NodeJs,
  Docker,
  PostgreSQL,
} from '../assets/TechStackIcons';
import { placeholder } from '../lib/placeholder';
import kaizenForms from '../assets/projects/KaizenForms.jpg';

/**
 * Types
 */
import type {
  EducationItem,
  ExperienceItem,
  Project,
  TechStackItem,
} from '../types';

export const NAV_LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const PROFILE = {
  name: 'Keanu Sonn Fortaleza',
  title: 'Full Stack Developer',
  email: 'keanufortalezax44@gmail.com',
  intro:
    'I build fast, accessible web apps and I am learning something new with every project.',
};

export const PROFILE_TAGS = [
  'React',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Java',
  'Python',
  'Docker',
  'PostgreSQL',
  'Supabase',
];

export const PROJECTS: Project[] = [
  {
    title: 'KaizenForms',
    desc: 'A web application created to manage and streamline the exit interview process. This system enables administrators to add, edit, and delete questions, evaluate responses, and manage evaluations efficiently. It showcases the integration of client-side and server-side web technologies.',
    techStacks: ['PHP', 'AJAX', 'Express.js', 'Node.js', 'JavaScript'],
    projectUrl: '',
    landscape: [
      {
        src: kaizenForms,
        alt: 'KaizenForms on desktop',
      },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'CloudScale System',
    position: 'Senior Backend Engineer',
    joinDate: '2021',
    achievements: [
      'Led migration to microservices architecture, improving system scalability by 300%',
      'Mentored team of 8 junior developers',
    ],
    skills: ['React', 'Node.js', 'AWS'],
  },
  {
    company: 'Nexus Labs',
    position: 'Full Stack Developer',
    joinDate: '2019',
    resignDate: '2021',
    achievements: [
      'Built real-time analytics dashboard serving 50K+ users',
      'Implemented CI/CD pipeline reducing bugs by 60%',
    ],
    skills: ['Vue.js', 'Python', 'PostgreSQL'],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    title: 'B.S. Computer Science',
    academy: 'Saint Louis University',
    year: '2026',
    certificate: 'Cumlaude',
    Icon: GraduationCapIcon,  
  },
  {
    title: 'AWS Certified Architect',
    academy: 'Amazon Web Services',
    year: '2022',
    certificate: 'Amazon Web Services',
    Icon: AwardIcon,
    certificateFile: {
      src: placeholder(1600, 1130, 'AWS certificate', '#FFE8D6'),
      type: 'image',
    },
    credentialUrl: 'https://example.com/verify',
  },
  {
    title: 'Google Cloud Professional',
    academy: 'Google Cloud',
    year: '2023',
    certificate: 'Google Cloud',
    Icon: AwardIcon,
    certificateFile: {
      src: '/certificates/sample.pdf',
      type: 'pdf',
    },
  },
];

export const TECH_STACKS: TechStackItem[] = [
  {
    name: 'React',
    Icon: React,
  },
  {
    name: 'Next.js',
    Icon: NextJs,
  },
  {
    name: 'TypeScript',
    Icon: TypeScript,
  },
  {
    name: 'NodeJs',
    Icon: NodeJs,
  },
  {
    name: 'Docker',
    Icon: Docker,
  },
  {
    name: 'PostgreSQL',
    Icon: PostgreSQL,
  },
];

export const FOOTER_LINKS = [
  {
    url: '#',
    label: 'Resume',
  },
  {
    url: '#',
    label: 'LinkedIn',
  },
  {
    url: '#',
    label: 'Github',
  },
];
