export enum LoadingState {
  before,
  start,
  done,
}

export interface RelatedArticle {
  source: string;
  upload_time: string;
  title: string;
  link: string;
}

export interface YoutubeInfo {
  video_id: string;
  channel_title: string;
  thumbnails: string;
  video_title: string;
}

export interface AnalysisResult {
  fake_possibility: number;
  summary: string;
}

export interface Result {
  analysis_result: AnalysisResult;
  related_articles: RelatedArticle[];
  youtube_info: YoutubeInfo;
}
