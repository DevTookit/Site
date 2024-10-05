import { GroupResponse } from './groupType';
import { RepositoryData, SectionResponse } from './sectionType';

//! layout provider
export interface LayoutData {
  currentFolder: string;
  cgryModalIsOpen: boolean;
  groupModalIsOpen: boolean;
  onboardingStep: number;
  myGroupList: GroupResponse[];
  myJoinedGroupList: GroupResponse[];
  currentCategoryList: SectionResponse[];
  currentCategoryChildList: {
    '2depth': { [id: string]: SectionResponse[] };
    '3depth': { [id: string]: SectionResponse[] };
    '4depth': { [id: string]: SectionResponse[] };
  };
  currentGroupTab: GroupResponse | null;
  currentGroup: GroupResponse | null;
  currentCategory: (SectionResponse & { parentId: number | null }) | null;
  currentRepository: RepositoryData | null;
}

//! create provider
export interface CreateGroupData {
  image: any;
  groupName: string;
  visibility: boolean;
}
export interface CreateData {
  createGroup: CreateGroupData;
}
