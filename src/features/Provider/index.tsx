import React, { createContext, useState, ReactNode } from 'react';
import {
  CreateData,
  CreateGroupData,
  EditCategoryData,
  CreateSubFolderData,
} from '@/shared/types/types';

export interface CreateContextType {
  data: CreateData;
  updateCreateGroupData: (newData: Partial<CreateGroupData>) => void;
  submitGroupCreate: () => void;
  updateEditCategoryData: (newData: Partial<EditCategoryData>) => void;
  submitCategoryUpdate: () => void;

  updateCreateSubFolder: (newData: Partial<CreateSubFolderData>) => void;
  submitSubFolderUpdate: () => void;
}

const CreateContext = createContext<CreateContextType | undefined>(undefined);

export const CreateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<CreateData>({
    createGroup: {},
    editCategory: {},
    createSubFolder: {},
  });

  //! 그룹생성
  const updateCreateGroupData = (newData: Partial<CreateGroupData>) => {
    setData((prevData: CreateData) => ({
      ...prevData,
      createGroup: { ...prevData.createGroup, ...newData },
    }));
  };
  const submitGroupCreate = async () => {
    alert('그룹 생성');
    // API 요청 로직 작성
  };

  //! 카테고리 편집
  const updateEditCategoryData = (newData: Partial<EditCategoryData>) => {
    setData((prevData: CreateData) => ({
      ...prevData,
      editCategory: { ...prevData.editCategory, ...newData },
    }));
  };
  const submitCategoryUpdate = async () => {
    alert('카테고리 편집');
    // API 요청 로직 작성
  };

  //! 하위폴더(카테고리, 폴더) 생성
  const updateCreateSubFolder = (newData: Partial<CreateSubFolderData>) => {
    setData((prevData: CreateData) => ({
      ...prevData,
      editCategory: { ...prevData.editCategory, ...newData },
    }));
  };
  const submitSubFolderUpdate = async () => {
    alert('하위폴더 생성');
    // API 요청 로직 작성
  };
  return (
    <CreateContext.Provider
      value={{
        data,
        updateCreateGroupData,
        updateEditCategoryData,
        submitGroupCreate,
        submitCategoryUpdate,
        updateCreateSubFolder,
        submitSubFolderUpdate,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default CreateContext;
