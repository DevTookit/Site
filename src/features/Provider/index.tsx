import React, { createContext, useState, ReactNode } from 'react';
import {
  CreateData,
  CreateGroupData,
  EditCategoryData,
} from '@/shared/types/types';

export interface CreateContextType {
  data: CreateData;
  updateCreateGroupData: (newData: Partial<CreateGroupData>) => void;
  updateEditCategoryData: (newData: Partial<EditCategoryData>) => void;
  submitGroupCreate: () => void;
}

const CreateContext = createContext<CreateContextType | undefined>(undefined);

export const CreateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<CreateData>({
    createGroup: {},
    editCategory: {},
  });

  const updateCreateGroupData = (newData: Partial<CreateGroupData>) => {
    setData((prevData: CreateData) => ({
      ...prevData,
      createGroup: { ...prevData.createGroup, ...newData },
    }));
  };

  const updateEditCategoryData = (newData: Partial<EditCategoryData>) => {
    setData((prevData: CreateData) => ({
      ...prevData,
      editCategory: { ...prevData.editCategory, ...newData },
    }));
  };

  const submitGroupCreate = async () => {
    // API 요청 로직 작성
  };

  return (
    <CreateContext.Provider
      value={{
        data,
        updateCreateGroupData,
        updateEditCategoryData,
        submitGroupCreate,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default CreateContext;
