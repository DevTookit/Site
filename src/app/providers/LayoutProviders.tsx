import React, { createContext, useState, ReactNode } from 'react';
import { GroupResponse } from '@/shared/types/groupType';
import { LayoutData } from '@/shared/types/types';
import { RepositoryData, SectionResponse } from '@/shared/types/sectionType';

export interface LayoutContextType {
  data: LayoutData;
  setCurrentFolder: (src: string) => void;
  setCgryModalIsOpen: (open: boolean) => void;
  setGroupModalIsOpen: (open: boolean) => void;
  setOnboardingStep: (step: number) => void;
  setMyGroupList: (data: GroupResponse[]) => void;
  setMyJoinedGroupList: (data: GroupResponse[]) => void;
  setCurrentCategoryList: (data: SectionResponse[]) => void;
  setCurrentCategoryChildList: (
    parentId: number,
    data: SectionResponse[],
  ) => void;
  setCurrentGroupTab: (data: GroupResponse) => void;
  setCurrentGroup: (data: GroupResponse) => void;
  setCurrentCategory: (data: SectionResponse | null, parentId?: number) => void;
  setCurrentRepository: (data: RepositoryData | null) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<LayoutData>({
    currentFolder: '',
    cgryModalIsOpen: false,
    groupModalIsOpen: false,
    onboardingStep: 1,
    myGroupList: [],
    myJoinedGroupList: [],
    currentCategoryList: [],
    currentCategoryChildList: {
      '2depth': {},
      '3depth': {},
      '4depth': {},
    },
    currentGroupTab: null,
    currentGroup: null,
    currentCategory: null,
    currentRepository: null,
  });
  const setCurrentFolder = (src: string) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      currentFolder: src,
    }));
  };
  const setCgryModalIsOpen = (open: boolean) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      cgryModalIsOpen: open,
    }));
  };
  const setGroupModalIsOpen = (open: boolean) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      groupModalIsOpen: open,
    }));
  };
  const setOnboardingStep = (step: number) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      onboardingStep: step,
    }));
  };

  const setMyGroupList = (data: GroupResponse[]) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      myGroupList: data,
    }));
  };
  const setMyJoinedGroupList = (data: GroupResponse[]) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      myJoinedGroupList: data,
    }));
  };
  const setCurrentCategoryList = (data: SectionResponse[]) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      currentCategoryList: data,
    }));
  };
  const setCurrentCategoryChildList = (
    parentId: number,
    List: SectionResponse[],
  ) => {
    const childList = JSON.parse(JSON.stringify(data.currentCategoryChildList));
    /*** depth에 맞게 저장 */
    const filterParentMenu = data.currentCategoryList?.filter(
      (el: SectionResponse) => el.folderId === parentId,
    );

    let res = [];
    if (filterParentMenu.length > 0) childList['2depth'][parentId] = List;
    else
      for (let i = 2; i <= 3; i++) {
        for (const key of Object.keys(childList[`${i}depth`])) {
          res =
            childList[`${i}depth`][key]?.filter((el: SectionResponse) => {
              return el.folderId === parentId;
            }) ?? [];
          if (res.length) {
            childList[`${i + 1}depth`][parentId] = List;
            break;
          }
        }
        if (res.length) break;
      }

    console.log(childList);
    setData((prevData: LayoutData) => ({
      ...prevData,
      currentCategoryChildList: childList,
    }));
  };
  // 현재 그룹 탭
  const setCurrentGroupTab = (data: GroupResponse) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      currentGroupTab: data,
    }));
  };
  // 컨텍스트 전용
  const setCurrentGroup = (data: GroupResponse) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      currentGroup: data,
    }));
  };
  const setCurrentCategory = (
    data: null | SectionResponse,
    parentId?: number,
  ) => {
    if (data)
      setData((prevData: LayoutData) => ({
        ...prevData,
        currentCategory: { ...data, parentId: parentId ?? null },
      }));
  };
  const setCurrentRepository = (data: RepositoryData | null) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      currentRepository: data,
    }));
    setCurrentCategory(null);
  };

  return (
    <LayoutContext.Provider
      value={{
        data,
        setCurrentFolder,
        setCgryModalIsOpen,
        setGroupModalIsOpen,
        setOnboardingStep,
        setMyGroupList,
        setMyJoinedGroupList,
        setCurrentCategoryList,
        setCurrentCategoryChildList,
        setCurrentGroupTab,
        setCurrentGroup,
        setCurrentCategory,
        setCurrentRepository,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
