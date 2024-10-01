export type SectionResponse = {
  folderId: number;
  name: string;
  isPublic: boolean;
  type: string;
};
export type RepositoryData = {
  folderId: number;
  name: string;
  depth1: string;
  depth2: string;
  depth3: string;
};

export type SectionData = {
  groupId: number;
  name: string;
  isPublic: boolean;
  parentSectionId: number | null;
  type: string;
};
export type SectionUpdateData = {
  groupId: number;
  name: string;
  isPublic: boolean;
  categoryId: number | null;
};
