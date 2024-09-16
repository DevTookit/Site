// src/app/router/index.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 페이지 컴포넌트 임포트
import LoginPage from '@/pages/Login';
import ProfileSettingsPage from '@/pages/Profile/Settings';
import PublishPage from '@/pages/Test/Publish';

const AppRouter: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublishPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/settings" element={<ProfileSettingsPage />} />
          <Route path="/publish" element={<PublishPage />} />
          {/* 404 페이지 처리 */}
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
