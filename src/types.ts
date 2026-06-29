export interface Movie {
  id: string;
  title: string;
  year: number;
  tags: string[];
  image: string;
  rating: number;
}

export interface Device {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AppScreenshot {
  id: string;
  title: string;
  description: string;
  image: string;
}
