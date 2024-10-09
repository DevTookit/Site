import { FolderData, FolderResponse } from '../types/folderType';
import api from './axios';

export const createFolder = async (
  groupId: number,
  sectionId: number,
  contentData: FolderData,
  files: File[],
): Promise<FolderResponse> => {
  const formData = new FormData();
  formData.append(
    'FolderCreateRequest',
    JSON.stringify({
      parentFolderId: contentData.parentFolderId,
      name: contentData.name,
    }),
  );
  files.forEach((file) => {
    console.log(file);
    formData.append('files', file); // 각 파일을 개별적으로 추가
  });

  const response = await api.post<FolderResponse>(
    `/v1/folder-contents/${groupId}/${sectionId}`,
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

const folderApi = {
  createFolder,
};
export default folderApi;
