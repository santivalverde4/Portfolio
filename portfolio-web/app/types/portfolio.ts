export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  demoUrl: string;
  repoUrl: string;
};

export type TechGroup = {
  area: string;
  items: string[];
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  summary: string;
  availability: string;
  email: string;
  cvUrl: string;
  socialLinks: SocialLink[];
};
