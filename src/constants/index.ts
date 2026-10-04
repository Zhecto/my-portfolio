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

/**
 * Types
 */
import type { EducationItem, ExperienceItem, Project } from '../types';

export const NAV_LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const PROFILE = {
  name: 'Keanu Sonn Fortaleza',
  title: 'Full Stack Developer',
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
    title: 'EcoSphere AI',
    desc: 'A sustainability tracking platform that analyzes carbon footprints and gives actionable insights for businesses and individuals.',
    techStacks: ['React', 'Node.js', 'AI'],
    projectUrl: '',
    landscape: [
      {
        src: placeholder(1600, 900, 'EcoSphere desktop 1', '#D0E4FF'),
        alt: 'EcoSphere dashboard on desktop',
      },
      {
        src: placeholder(1600, 900, 'EcoSphere desktop 2', '#B8D4F5'),
        alt: 'EcoSphere reports page on desktop',
      },
      {
        src: placeholder(1600, 900, 'EcoSphere desktop 3', '#9CC2EE'),
        alt: 'EcoSphere settings page on desktop',
      },
    ],
    portrait: [
      {
        src: placeholder(900, 1200, 'EcoSphere mobile 1', '#D0E4FF'),
        alt: 'EcoSphere dashboard on mobile',
      },
      {
        src: placeholder(900, 1200, 'EcoSphere mobile 2', '#B8D4F5'),
        alt: 'EcoSphere reports page on mobile',
      },
    ],
  },
  {
    title: 'NeuroFlow',
    desc: 'Real-time productivity dashboard that syncs with biometric devices to optimize work schedules based on focus levels.',
    techStacks: ['Next.js', 'Socket.io'],
    projectUrl: '',
    landscape: [
      {
        src: placeholder(1600, 900, 'NeuroFlow desktop 1', '#FAD8FD'),
        alt: 'NeuroFlow focus dashboard on desktop',
      },
      {
        src: placeholder(1600, 900, 'NeuroFlow desktop 2', '#F2BDF7'),
        alt: 'NeuroFlow schedule view on desktop',
      },
    ],
    portrait: [
      {
        src: placeholder(900, 1200, 'NeuroFlow mobile 1', '#FAD8FD'),
        alt: 'NeuroFlow focus dashboard on mobile',
      },
    ],
  },
  {
    title: 'Veritas API',
    desc: 'High-performance authentication gateway for Web3 apps with zero-knowledge proof integration.',
    techStacks: ['Go', 'Redis', 'Docker'],
    projectUrl: '',
    landscape: [
      {
        src: placeholder(1600, 900, 'Veritas desktop 1', '#E2F1E6'),
        alt: 'Veritas API documentation on desktop',
      },
    ],
    portrait: [
      {
        src: placeholder(900, 1200, 'Veritas mobile 1', '#E2F1E6'),
        alt: 'Veritas API documentation on mobile',
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

export const TECH_STACKS = [
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
