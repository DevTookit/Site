//! layout provider
export interface LayoutData {
  currentFolder: string;
  cgryModalIsOpen: boolean;
  groupModalIsOpen: boolean;
  onboardingStep: number;
}

//! create provider
export interface CreateGroupData {
  image?: string;
  groupName?: string;
  visibility?: boolean;
}

export interface EditCategoryData {
  categoryName?: string;
  visibility?: boolean;
}
export interface CreateSubFolderData {
  folderName?: string;
  folderOption?: string;
}

export interface CreateData {
  createGroup: CreateGroupData;
  editCategory: EditCategoryData;
  createSubFolder: CreateSubFolderData;
}
