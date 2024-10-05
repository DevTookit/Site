import {
  BookmarkResponse,
  CreateBookmarkData,
  CreateBookmarkResponse,
} from '../types/bookmark';
import api from './axios';

// 북마크 읽기 (GET)
const getBookmarks = async (groupId: string): Promise<BookmarkResponse[]> => {
  const response = await api.get<BookmarkResponse[]>(
    `/v1/bookmarks?groupId=${groupId}&page=0&size=20`,
  );
  return response.data;
};

// 북마크 생성 (POST)
const createBookmark = async (
  bookmarkData: CreateBookmarkData,
): Promise<CreateBookmarkResponse> => {
  const response = await api.post<CreateBookmarkResponse>(
    '/v1/bookmarks',
    bookmarkData,
  );
  return response.data;
};

// 북마크 해제 (삭제) (DELETE)
const deleteBookmark = async (bookmarkId: string): Promise<void> => {
  await api.delete(`/v1/bookmarks/${bookmarkId}`);
};

const bookmarkApi = {
  getBookmarks,
  createBookmark,
  deleteBookmark,
};

export default bookmarkApi;
