// src/components/Layout.tsx
import React from 'react';
import GroupSideBar from '@/features/group/SideBar';
import GroupHeader from '@/features/group/Header';
import CreateGroupModal from '@/features/group/modal/CreateGroup';
import CreateCategoryModal from '@/features/category/modal/CreateCategory';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      {/* 그룹생성 모달 */}
      <CreateGroupModal />
      {/* 카테고리 생성편집 모달 */}
      <CreateCategoryModal />
      <GroupSideBar />
      <main className="flex flex-1 flex-grow flex-col items-center justify-between bg-lighten-100 px-10 pt-[60px]">
        <GroupHeader />
        {children}
      </main>
    </div>
  );
};

export default Layout;
