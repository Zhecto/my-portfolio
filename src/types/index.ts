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
  portrait: Media[];
}
