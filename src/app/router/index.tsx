// src/app/router/index.tsx
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
//store
import useAuthStore from '@/shared/store/authStore';
//util
import { getRefreshToken, getToken } from '@/shared/util/tokenUtil';

const AppRouter: React.FC = () => {
  const { userTags, fetchUserInfo } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = getToken();
    const refreshToken = getRefreshToken();
    console.log(userTags, token, location.pathname);

    if (refreshToken && !token) {
      fetchUserInfo();
    }

    if (!refreshToken && !token && location.pathname !== '/auth/login') {
      navigate('/auth/login');
    } else if (
      token &&
      !userTags &&
      location.pathname !== '/auth/profile/settings'
    ) {
      navigate('/auth/profile/settings');
    }
  }, [location, navigate]);

  useEffect(() => {
    fetchUserInfo();
  }, []);
  return (
    <div className="min-w-screen relative flex min-h-screen items-center justify-center overflow-y-auto bg-black">
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
    </div>
  );
};

export default AppRouter;
