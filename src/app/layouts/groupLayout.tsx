// src/components/Layout.tsx
import React, { useEffect } from 'react';
import GroupSideBar from '@/features/group/SideBar';
import GroupHeader from '@/features/group/Header';
import CreateGroupModal from '@/features/group/modal/CreateGroup';
import CreateCategoryModal from '@/features/category/modal/CreateCategory';
import useLayout from '@/shared/hooks/useLayout';
import groupApi from '@/shared/api/groupApi';
import sectionApi from '@/shared/api/sectionApi';
import contentApi from '@/shared/api/contentApi';
/* store */
import useAuthStore from '@/shared/store/authStore';
/* hook */
import useGroupPathEffect from '@/shared/hooks/useGroupPathEffect';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOnBoardingComplete } = useAuthStore();
  const {
    data,
    setMyJoinedGroupList,
    setOnboardingStep,
    setCurrentRepository,
    setCurrentCategoryList,
  } = useLayout();

  const init = async () => {
    if (!data.myJoinedGroupList.length) {
      await groupApi.getMyJoinedGroupList().then(async (res) => {
        setMyJoinedGroupList(res);
        await sectionApi.getSections(res[0].id).then((res) => {
          setCurrentCategoryList(res);
        });
      });
      setCurrentRepository(null); //선택된 저장소 해제
    }
  };

  //
  useGroupPathEffect(async () => {
    init();
  });
  const checkOnboarding = async () => {
    let step = data.onboardingStep;
    if (step === 1 && data.myJoinedGroupList.length > 0) step += 1;
    if (step === 2 && data.currentCategoryList.length > 0) {
      await sectionApi
        .checkSectionExistence(data.currentCategoryList[0].folderId)
        .then((res) => {
          if (res) step++;
        });
    }
    if (step === 3) {
      await contentApi
        .searchContent(data.myJoinedGroupList[0].id, '')
        .then((res) => {
          if (res.length > 0) step++;
        });
    }
    if (data.onboardingStep < step) setOnboardingStep(step);
  };

  useEffect(() => {
    if (!isOnBoardingComplete) checkOnboarding();
  }, [data.myJoinedGroupList, data.currentCategoryList, data.onboardingStep]);

  return (
    <div className="flex min-h-screen w-full">
      {/* 그룹생성 모달 */}
      <CreateGroupModal />
      {/* 카테고리 생성편집 모달 */}
      <CreateCategoryModal />
      <GroupSideBar />
      <main className="flex min-h-screen flex-1 flex-grow flex-col items-center justify-between overflow-hidden bg-primary px-10 pt-[60px]">
        <GroupHeader />
        {children}
      </main>
    </div>
  );
};

export default Layout;
