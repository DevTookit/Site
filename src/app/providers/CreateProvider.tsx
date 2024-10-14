import React, { createContext, useState, ReactNode } from 'react';
import { CreateData, CreateGroupData } from '@/shared/types/types';
import groupApi from '@/shared/api/groupApi';
import useLayout from '@/shared/hooks/useLayout';
export interface CreateContextType {
  createData: CreateData;
  updateCreateGroupData: (newData: Partial<CreateGroupData>) => void;
  submitGroupCreate: () => void;
}

const CreateContext = createContext<CreateContextType | undefined>(undefined);

export const CreateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { setMyJoinedGroupList } = useLayout();
  const [createData, setCreateData] = useState<CreateData>({
    createGroup: { groupName: '', visibility: false, image: '' },
  });

  //! 그룹생성
  const updateCreateGroupData = (newData: Partial<CreateGroupData>) => {
    setCreateData((prevData: CreateData) => ({
      ...prevData,
      createGroup: { ...prevData.createGroup, ...newData },
    }));
  };
  const submitGroupCreate = async () => {
    groupApi
      .createGroup({
        name: createData.createGroup.groupName,
        isPublic: createData.createGroup.visibility,
        img: createData.createGroup.image,
        description: '',
      })
      .then(async () => {
        const res = await groupApi.getMyJoinedGroupList();
        setMyJoinedGroupList(res);
      });
  };

  return (
    <CreateContext.Provider
      value={{
        createData,
        updateCreateGroupData,
        submitGroupCreate,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default CreateContext;
