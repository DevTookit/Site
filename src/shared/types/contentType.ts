export interface ContentData {
  name: string;
  languages: string[];
  skills: string[];
  content: string;
  codeDescription: string;
  type: 'CODE' | 'BOARD' | 'FILE';
}

export interface ContentResponse {
  contentId: number;
  name: string;
  languages: string[];
  writerImg: string;
  writerName: string;
  createdDate: number;
  size: number;
  type: 'CODE' | 'BOARD' | 'FILE';
  bookmarkId: number | null;
}

export interface SectionResponse {
  id: number;
  name: string;
  description: string;
  // 기타 섹션 관련 필드
}

export interface HotContentResponse {
  id: number;
  title: string;
  viewCount: number;
  // 기타 핫 컨텐츠 관련 필드
}

export interface SearchContentParams {
  query: string;
  limit?: number;
  offset?: number;
  // 기타 검색 관련 필드
}
