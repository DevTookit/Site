// src/app/router/index.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 페이지 컴포넌트 임포트
import LoginPage from '@/pages/Login';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* 404 페이지 처리 */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
