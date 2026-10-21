export type Project = {
  title: string;
  kind: ProjectKind;
  description: string;
  images: string[];
  tech: string[];
  links: {
    github?: string;
    preview?: string;
    youtube?: string;
  }
}

export type ProjectKind = 'Frontend' | 'Backend' | 'Testing';