import {
  SectionData,
  SectionResponse,
  SectionUpdateData,
} from '../types/sectionType';
import api from './axios';

// 카테고리 조회
const getSections = async (
  groupId: number,
  parentSectionId?: number,
): Promise<SectionResponse[]> => {
  const response = await api.get<SectionResponse[]>(
    `/v1/sections?page=0&size=20&groupId=${groupId}${parentSectionId ? '&parentSectionId=' + String(parentSectionId) : ''}`,
  );

  return response.data;
};

// 카테고리 생성
const createSection = async (
  sectionData: SectionData,
): Promise<SectionResponse> => {
  const response = await api.post<SectionResponse>('/v1/sections', sectionData);
  return response.data;
};

// 카테고리 삭제
const deleteSection = async (sectionId: number): Promise<void> => {
  await api.delete(`/v1/sections?sectionId=${sectionId}`);
};

// 카테고리 수정
const updateSection = async (
  param: SectionUpdateData,
): Promise<SectionResponse> => {
  const response = await api.patch<SectionResponse>(`/v1/sections`, param);
  return response.data;
};

const sectionApi = {
  getSections,
  createSection,
  deleteSection,
  updateSection,
};

export default sectionApi;
