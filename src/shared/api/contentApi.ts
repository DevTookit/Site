import api from './axios';
import {
  ContentData,
  ContentResponse,
  FolderContentResponse,
  HotContentResponse,
  // SearchContentParams,
} from '@/shared/types/contentType'; // 필요한 타입을 정의합니다.

// 1. 컨텐츠 생성 (코드, 게시판형)
export const createContent = async (
  groupId: number,
  sectionId: number,
  contentData: ContentData,
  files?: File[],
): Promise<ContentResponse> => {
  const formData = new FormData();
  formData.append(
    'ContentCreateRequest',
    JSON.stringify({
      name: contentData.name,
      languages: contentData.languages,
      skills: contentData.skills,
      content: contentData.content,
      codeDescription: contentData.codeDescription,
      type: contentData.type,
      parentId: contentData?.parentId ?? null,
    }),
  );
  if (files) {
    files.forEach((file) => {
      console.log(file);
      formData.append('files', file); // 각 파일을 개별적으로 추가
    });
  } else {
    formData.append('files', '');
  }

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
  type: 'CODE' | 'BOARD' | 'FOLDER' | '',
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

// 7. 폴더유형탭 파일안에 폴더+ 파일 읽기
export const getFolderContents = async (
  groupId: number,
  sectionId: number,
  folderId: number,
): Promise<FolderContentResponse> => {
  const response = await api.get<FolderContentResponse>(
    `/v1/contents/folders/${groupId}/${sectionId}/${folderId}?page=0&size=20'`,
  );
  return response.data;
};

const contentApi = {
  createContent,
  deleteContent,
  updateContent,
  searchContent,
  getContent,
  getHotContents,
  getFolderContents,
};

export default contentApi;
