export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  keywords: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  project: string;
}
