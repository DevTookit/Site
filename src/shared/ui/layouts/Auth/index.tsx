import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  tabName1: string;
  tabName2: string;
  activeTab: number; // 현재 선택된 탭 인덱스
  onTabChange: (index: number) => void; // 탭 변경 핸들러
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  tabName1,
  tabName2,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex h-[540px]">
        {/* 왼쪽 영역 */}
        <div className="flex h-full w-[300px] flex-col items-center rounded-l-lg bg-primary">
          <img
            className="relative h-full w-[300px]"
            src="/assets/img/login_developer.jpg"
            alt="Developer"
          />
        </div>

        {/* 오른쪽 영역 */}
        <div className="flex h-[540px] w-[680px] flex-col rounded-r-lg bg-darken-100 p-[40px_60px]">
          <div className="flex flex-col">
            <span className="mb-[40px] text-[32px] text-lighten-500">
              DevToolKit
            </span>
            {/* 탭 영역 */}
            <div className="mb-[40px] flex">
              <button
                className={`flex-1 border-b-2 border-solid py-2 text-xl font-semibold ${activeTab === 0 ? 'border-lighten-400 text-lighten-400' : 'border-lighten-200 text-lighten-200'}`}
                onClick={() => onTabChange(0)}
              >
                {tabName1}
              </button>
              <button
                className={`flex-1 border-b-2 border-solid py-2 text-xl font-semibold ${activeTab === 1 ? 'border-lighten-400 text-lighten-400' : 'border-lighten-200 text-lighten-200'}`}
                onClick={() => onTabChange(1)}
              >
                {tabName2}
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
