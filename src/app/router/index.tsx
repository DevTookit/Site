// src/app/router/index.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 페이지 컴포넌트 임포트
import LoginPage from '@/pages/Login';
import ProfilePage from '@/pages/Profile';
import PublishPage from '@/pages/Test/Publish';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublishPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/publish" element={<PublishPage />} />
        {/* 404 페이지 처리 */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
