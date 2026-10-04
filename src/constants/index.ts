/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Assets
 */
import {
  AwardIcon,
  CodeXmlIcon,
  DatabaseIcon,
  GraduationCapIcon,
  LayersIcon,
  PenToolIcon,
  SparklesIcon,
  WrenchIcon,
} from 'lucide-react';
import kaizenForms from '../assets/projects/KaizenForms.jpg';

/**
 * Types
 */
import type {
  EducationItem,
  ExperienceItem,
  Project,
  ToolCategory,
} from '../types';

export const NAV_LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const PROFILE = {
  name: 'Keanu Sonn Fortaleza',
  title: 'Full-Stack Developer',
  email: 'keanufortalezax44@gmail.com',
  intro:
    'I build web and mobile apps with TypeScript, React Native and Supabase. Currently a software developer intern at Metawatt, working on features, bug fixes and manual testing.',
};

export const PROJECTS: Project[] = [
  {
    title: 'KaizenForms',
    desc: 'A responsive full-stack web application that streamlines the exit interview process. Administrators can add, edit, and delete questions and evaluate responses. I worked on the database interactions and backend modules for question management and response evaluation, added sorting, refined error handling, and connected the backend logic to the UI. Built as an academic project.',
    techStacks: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PHP', 'MySQL'],
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
    company: 'Metawatt',
    position: 'Software Developer Intern',
    joinDate: 'August 2026',
    achievements: [
      'Support two concurrent product teams with feature development, bug fixing, and manual testing across UI behavior, business logic, and error handling.',
      'Resolve assigned bugs end to end: reproduce the issue, trace the root cause, apply the fix, and re-verify against expected behavior.',
      'Run manual and exploratory test cases and document reproducible issues with expected vs. actual results. Found a boundary-validation defect that let an unbounded year value be entered and saved in a date field.',
      'Use AI-assisted development tools to speed up debugging and code comprehension, validating all output against functional requirements.',
    ],
    skills: ['Manual Testing', 'Debugging', 'Defect Reporting'],
  },
  {
    company: 'ESCA',
    position: 'Full-Stack Developer (Freelance / On-Call)',
    joinDate: 'March 2026',
    achievements: [
      'Deliver scoped features and bug fixes, on call, for a cross-platform mobile app that lets farmers track crop inflow and outflow across a supply chain of farmers, middlemen, and buyers.',
      'Integrated the React Native frontend with Supabase backend services and databases for real-time data flow between client and server.',
      'Diagnosed and fixed concurrency defects in core authentication. Built state-based front-end execution locks and a custom Promise.race architecture in TypeScript that eliminated lock-ups on unpredictable networks.',
      'Identified overlapping screen layouts between user roles and proposed a modular, reusable screen framework that reduced architectural redundancy and code duplication.',
    ],
    skills: ['TypeScript', 'React Native', 'Supabase'],
  },
  {
    company: 'NOAH Business Applications (Remote)',
    position: 'Developer Intern',
    joinDate: 'June 2025',
    resignDate: 'July 2025',
    achievements: [
      'Ran rule-based UI test cases against company-defined business rules, recording Pass/Fail results and the expected behavior for each failed case.',
      'Mapped business rules to website functionality and checked accuracy against functional requirements, strengthening requirements traceability across the test suite.',
      'Built foundational skills in functional verification, test documentation, and structured defect reporting.',
    ],
    skills: ['UI Testing', 'Test Documentation', 'Requirements Traceability'],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    title: 'B.S. in Computer Science',
    academy: 'Saint Louis University, Baguio City',
    year: '2022 – 2026',
    certificate: "Cum Laude · Dean's Lister",
    Icon: GraduationCapIcon,
  },
  {
    title: 'Microsoft Power BI Course',
    academy: 'Saint Louis University',
    year: '2026',
    certificate: 'Certificate of Completion · 29 May 2026',
    Icon: AwardIcon,
    certificateFile: {
      src: '/certificates/power-bi-saint-louis-university.webp',
      type: 'image',
    },
  },
  {
    title: 'Introduction to Cybersecurity',
    academy: 'Cisco Networking Academy',
    year: '2026',
    certificate: 'DICT-ITU DTC Initiative · 09 Feb 2026',
    Icon: AwardIcon,
    certificateFile: {
      src: '/certificates/introduction-to-cybersecurity-cisco.pdf',
      type: 'pdf',
    },
  },
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    title: 'Languages',
    Icon: CodeXmlIcon,
    items: [
      'TypeScript',
      'JavaScript',
      'Java',
      'Python',
      'SQL',
      'PHP',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    Icon: LayersIcon,
    items: ['React Native', 'React', 'Node.js', 'Express.js', 'Tailwind CSS'],
  },
  {
    title: 'Databases',
    Icon: DatabaseIcon,
    items: ['MySQL', 'Supabase'],
  },
  {
    title: 'Dev Tools',
    Icon: WrenchIcon,
    items: ['Git', 'Docker', 'Orca', 'VS Code'],
  },
  {
    title: 'AI Tools',
    Icon: SparklesIcon,
    items: ['Claude Code', 'OpenCode'],
  },
  {
    title: 'UI/UX',
    Icon: PenToolIcon,
    items: ['Figma', 'Canva'],
  },
];

export const FOOTER_LINKS = [
  {
    url: '/resume.pdf',
    label: 'Resume',
  },
  {
    url: 'https://github.com/Zhecto',
    label: 'GitHub',
  },
];
