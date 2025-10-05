
export interface Program {
  id: string;
  title: Record<string, string>;
  summary: Record<string, string>;
  imageUrl: string;
  region: string;
  theme: string;
}

export interface TeamMember {
  name: string;
  title: Record<string, string>;
  imageUrl: string;
  bio: Record<string, string>;
}

export interface Event {
  id: string;
  title: Record<string, string>;
  date: string;
  location: string;
  summary: Record<string, string>;
  imageUrl: string;
}

export interface NewsArticle {
  id: string;
  title: Record<string, string>;
  author: string;
  publishDate: string;
  summary: Record<string, string>;
  imageUrl: string;
}
