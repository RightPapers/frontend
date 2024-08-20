export enum Loading {
  before,
  start,
  done,
}

export interface RelatedArticle {
  description: string;
  link: string;
  pubDate: string;
  title: string;
}

export interface YoutubeInfo {
  video_id: string;
  channel_title: string;
  thumbnails: string;
  video_title: string;
}

export interface AnalysisResult {
  fake_probability: number;
  summary: string;
}

export interface Result {
  analysis_result: AnalysisResult;
  related_articles: RelatedArticle[];
  youtube_info: YoutubeInfo;
}

export enum Gradient {
  none = 'none',
  red = 'linear-gradient(240.22deg, #e73737 0%, #b23232 100%)',
  orange = 'linear-gradient(240.22deg, #FF9401 0%, #AD6400 100%)',
  blue = 'linear-gradient(240.22deg, #054AA8 0%, #002354 100%)',
}
