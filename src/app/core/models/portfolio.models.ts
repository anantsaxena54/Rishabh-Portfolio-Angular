export type ProjectCategory = 'cine' | 'edit' | 'vfx' | 'ai';

export interface Project {
  readonly title: string;
  readonly cat: ProjectCategory;
  readonly brand: string;
  readonly img: string;
}

export interface Experience {
  readonly year: string;
  readonly role: string;
  readonly place: string;
  readonly placeDetail: string;
  readonly location: string;
  readonly reveal: string;
}

export interface Skill {
  readonly num: string;
  readonly title: string;
  readonly desc: string;
  readonly tools: readonly string[];
}

export interface NavLink {
  readonly num: string;
  readonly label: string;
  readonly href: string;
}

export interface Filter {
  readonly value: ProjectCategory | 'all';
  readonly label: string;
}
