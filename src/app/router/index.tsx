// src/app/router/index.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 페이지 컴포넌트 임포트
import LoginPage from '@/pages/auth/Login';
import ProfileSettingsPage from '@/pages/Profile/Settings';
import PublishPage from '@/pages/Test/Publish';
import ProfileCreationProgress from '@/pages/auth/ProfileCreationProgress';
import Group from '@/pages/Group';

const AppRouter: React.FC = () => {
  return (
    <div className="min-w-screen animated fadeIn faster fixed inset-0 left-0 top-0 z-50 flex h-screen flex-col items-center justify-center space-y-4 bg-black outline-none focus:outline-none">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublishPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route
            path="/auth/profile/settings"
            element={<ProfileSettingsPage />}
          />
          <Route
            path="/auth/profile/creation"
            element={<ProfileCreationProgress />}
          />
          <Route path="/group" element={<Group />} />
          <Route path="/publish" element={<PublishPage />} />
          {/* 404 페이지 처리 */}
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
