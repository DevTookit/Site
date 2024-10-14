export interface ContentData {
  name: string;
  languages: string[];
  skills: string[];
  content: string;
  codeDescription: string;
  type: 'CODE' | 'BOARD' | 'FOLDER';
  parentId: number | null;
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
  content: string;
  contentId: number;
  contentName: string;
  groupId: number;
  section: number;
  writerId: number;
  writerImg: string;
  writerName: string;
}

export interface SearchContentParams {
  query: string;
  limit?: number;
  offset?: number;
  // 기타 검색 관련 필드
}

export interface FolderContentResponse {
  parentId: number;
  createdDate: number;
  lastModifiedDate: number;
  name: string;
  writerName: string;
  writerId: number;
  type: string;
  contents: Content[];
}

export interface Content {
  contentId: number;
  createdDate: number;
  lastModifiedDate: number;
  name: string;
  writerName: string;
  writerId: number;
  type: string;
  url: string;
}
