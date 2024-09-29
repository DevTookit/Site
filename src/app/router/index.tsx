// src/app/router/index.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 페이지 컴포넌트 임포트
import RootPage from '@/pages/Root/index';
import LoginPage from '@/pages/auth/Login';
import ProfileSettingsPage from '@/pages/auth/Profile/Settings';
import PublishPage from '@/pages/Test/Publish';
import CreationProgress from '@/pages/auth/Profile/CreationProgress';
import Group from '@/pages/Group';
import GroupList from '@/pages/Group/List';
import GroupPostCreate from '@/pages/Group/post/Create';
import GroupLayout from '../layouts/groupLayout';

//provider
import { CreateProvider } from '../providers/CreateProvider';
import { LayoutProvider } from '../providers/LayoutProviders';

const AppRouter: React.FC = () => {
  return (
    <div className="min-w-screen relative flex min-h-screen items-center justify-center overflow-y-auto bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<LoginPage />} />
          <Route
            path="/auth/profile/settings"
            element={<ProfileSettingsPage />}
          />
          <Route path="/auth/profile/creation" element={<CreationProgress />} />

          <Route path="/publish" element={<PublishPage />} />

          <Route
            path="/group"
            element={
              <LayoutProvider>
                <CreateProvider>
                  <GroupLayout>
                    <Group />
                  </GroupLayout>
                </CreateProvider>
              </LayoutProvider>
            }
          />
          <Route
            path="/group/list"
            element={
              <LayoutProvider>
                <CreateProvider>
                  <GroupLayout>
                    <GroupList />
                  </GroupLayout>
                </CreateProvider>
              </LayoutProvider>
            }
          />
          <Route
            path="/group/post/create"
            element={
              <LayoutProvider>
                <CreateProvider>
                  <GroupLayout>
                    <GroupPostCreate />
                  </GroupLayout>
                </CreateProvider>
              </LayoutProvider>
            }
          />
          {/* 404 페이지 처리 */}
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
