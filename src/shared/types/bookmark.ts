export type BookmarkResponse = {
  bookmarkId: number;
  contentId: number;
  type: 'CODE' | 'BOARD' | 'FILE';
  name: string;
  sectionId: number;
  writerId: number;
  writerName: string;
  writerImg: string;
};

export type CreateBookmarkData = {
  groupId: number;
  type: 'CODE' | 'BOARD' | 'FILE';
  contentId: number;
  sectionId: number;
};

export type CreateBookmarkResponse = {
  bookmarkId: number;
  type: 'CODE' | 'BOARD' | 'FILE';
};
