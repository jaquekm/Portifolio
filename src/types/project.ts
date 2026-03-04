export type LocalizedString = {
  pt: string;
  en: string;
};

export interface Project {
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  stack: string[];
  highlight?: LocalizedString;
}

