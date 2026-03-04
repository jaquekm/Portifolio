export type LocalizedString = {
  pt: string;
  en: string;
};

export interface ArticleMeta {
  readTime: string;
}

export interface Article {
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  meta: ArticleMeta;
}

