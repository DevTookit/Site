// src/components/Layout.tsx
import React, { useEffect } from 'react';
import GroupSideBar from '@/features/group/SideBar';
import GroupHeader from '@/features/group/Header';
import CreateGroupModal from '@/features/group/modal/CreateGroup';
import CreateCategoryModal from '@/features/category/modal/CreateCategory';
import useLayout from '@/shared/hooks/useLayout';
import groupApi from '@/shared/api/groupApi';
import sectionApi from '@/shared/api/sectionApi';
import { SectionResponse } from '@/shared/types/sectionType';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    data,
    setMyGroupList,
    setMyJoinedGroupList,
    setCurrentCategoryList,
    setOnboardingStep,
  } = useLayout();

  const init = async () => {
    await Promise.all([
      groupApi.getMyGroupList().then((res) => {
        setMyGroupList(res);
      }),
      groupApi.getMyJoinedGroupList().then(async (res) => {
        if (res.length) {
          await sectionApi
            .getSections(res[0].id)
            .then((res: SectionResponse[]) => {
              setCurrentCategoryList(res);
            });
        }
        setMyJoinedGroupList(res);
      }),
    ]);
  };
  useEffect(() => {
    init().then(() => {
      let step = 1;
      if (data.myJoinedGroupList.length > 0) step++;
      if (data.currentCategoryList.length > 0) step++;
      setOnboardingStep(step);
    });
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      {/* 그룹생성 모달 */}
      <CreateGroupModal />
      {/* 카테고리 생성편집 모달 */}
      <CreateCategoryModal />
      <GroupSideBar />
      <main className="flex min-h-screen flex-1 flex-grow flex-col items-center justify-between bg-primary px-10 pt-[60px]">
        <GroupHeader />
        {children}
      </main>
    </div>
  );
};

export default Layout;
