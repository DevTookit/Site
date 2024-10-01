import api from './axios';
import {
  ContentData,
  ContentResponse,
  HotContentResponse,
  // SearchContentParams,
} from '@/shared/types/contentType'; // 필요한 타입을 정의합니다.

// 1. 컨텐츠 생성 (코드, 게시판형)
export const createContent = async (
  groupId: number,
  sectionId: number,
  contentData: ContentData,
): Promise<ContentResponse> => {
  const formData = new FormData();
  formData.append(
    'ContentCreateRequest',
    JSON.stringify({
      name: contentData.name,
      languages: null,
      skills: contentData.skills,
      content: contentData.content,
      codeDescription: contentData.codeDescription,
      type: contentData.type,
    }),
  );
  formData.append('files', '');

  const response = await api.post<ContentResponse>(
    `/v1/contents/${groupId}/${sectionId}`,
    formData,
    {
      headers: {
        Accept: '*/*',
        'Content-Type': 'multipart/form-data', // 헤더 설정
      },
    },
  );
  return response.data;
};

// 2. 컨텐츠 삭제 (코드, 게시판형)
export const deleteContent = async (
  sectionId: number,
  groupId: number,
): Promise<void> => {
  await api.delete(`/v1/contents/${sectionId}/${groupId}`);
};

// 3. 컨텐츠 수정 (코드, 게시판형)
export const updateContent = async (
  sectionId: number,
  groupId: number,
  contentData: Partial<ContentData>,
): Promise<ContentResponse> => {
  const response = await api.patch<ContentResponse>(
    `/v1/contents/${sectionId}/${groupId}`,
    contentData,
  );
  return response.data;
};

// 4. 컨텐츠 검색 (코드, 게시판형, 파일)
export const searchContent = async (
  groupId: number, // searchParams: SearchContentParams,
  type: 'CODE' | 'BOARD' | 'FILE' | '',
): Promise<ContentResponse[]> => {
  const response = await api.get<ContentResponse[]>(
    `/v1/contents?groupId=${groupId}&page=0&size=20${type && `&type=${type}`}`,
  );
  return response.data;
};

// 5. 해당 컨텐츠 읽기 (코드, 게시판형, 파일)
export const getContent = async (
  sectionId: number,
  contentId: number,
  groupId: number,
): Promise<ContentResponse> => {
  const response = await api.get<ContentResponse>(
    `/v1/contents/${sectionId}/${contentId}/${groupId}`,
  );
  return response.data;
};

// 6. 핫 게시글
export const getHotContents = async (): Promise<HotContentResponse[]> => {
  const response = await api.get<HotContentResponse[]>('/v1/contents/hot');
  return response.data;
};
const contentApi = {
  createContent,
  deleteContent,
  updateContent,
  searchContent,
  getContent,
  getHotContents,
};

export default contentApi;
