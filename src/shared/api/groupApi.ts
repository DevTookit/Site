import api from './axios';
import {
  GroupResponse,
  LogResponse,
  GroupData,
  HotGroupResponse,
} from '../types/groupType';

// 그룹 검색
const getGroupList = async (): Promise<GroupResponse[]> => {
  const response = await api.get<GroupResponse[]>('/v1/groups?page=0&size=20');
  return response.data;
};

// 그룹 생성
const createGroup = async (groupData: GroupData): Promise<GroupResponse> => {
  const formData = new FormData();
  formData.append(
    'GroupCreateRequest',
    JSON.stringify({
      name: groupData.name,
      description: '',
      isPublic: groupData.isPublic,
    }),
  );
  formData.append('img', groupData.img);
  const response = await api.post<GroupResponse>('/v1/groups', formData, {
    headers: {
      Accept: '*/*',
      'Content-Type': 'multipart/form-data', // 헤더 설정
    },
  });
  return response.data;
};

// 그룹 삭제
const deleteGroup = async (groupId: number): Promise<void> => {
  await api.delete(`/v1/groups?groupId=${groupId}`);
};

// 그룹 수정
const updateGroup = async () => {};

// 각 그룹 조회
const getGroupById = async (groupId: string): Promise<GroupResponse> => {
  const response = await api.get<GroupResponse>(`/v1/groups/${groupId}`);
  return response.data;
};

// 최근 연 파일 읽기
const getRecentFiles = async () => {};

// 그룹내 로그 읽기
const getGroupLogs = async (groupId: number): Promise<LogResponse> => {
  const response = await api.get<LogResponse>(
    `/v1/groups/${groupId}/logs?page=0&size=20`,
  );
  return response.data;
};

// 내가 생성한 그룹들 조회
const getMyGroupList = async (): Promise<GroupResponse[]> => {
  const response = await api.get<GroupResponse[]>(
    '/v1/groups/mine?page=0&size=20',
  );
  return response.data;
};

// 내가 속한 그룹 조회
const getMyJoinedGroupList = async (): Promise<GroupResponse[]> => {
  const response = await api.get<GroupResponse[]>(
    '/v1/groups/me?page=0&size=20',
  );
  return response.data;
};

// 메인 페이지 핫 그룹 조회
const getHotGroupList = async (): Promise<HotGroupResponse[]> => {
  const response = await api.get<HotGroupResponse[]>(
    '/v1/groups/hot?page=0&size=20',
  );
  return response.data;
};

const groupApi = {
  getGroupList,
  createGroup,
  deleteGroup,
  updateGroup,
  getGroupById,
  getRecentFiles,
  getGroupLogs,
  getMyGroupList,
  getMyJoinedGroupList,
  getHotGroupList,
};

export default groupApi;

// export default { login, logout };
