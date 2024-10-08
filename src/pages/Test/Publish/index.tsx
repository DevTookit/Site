import React from 'react';
import { useNavigate } from 'react-router-dom';
const icons = import.meta.glob('@svg/*.svg');
const Publish: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center bg-black">
        <div className="hover:shodow-lg flex flex-col rounded-2xl bg-gray-800 p-8 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 rounded-2xl border border-gray-800 bg-gray-900 p-3 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="ml-3 flex flex-col">
                <div className="font-medium leading-none text-gray-100">
                  /auth/login
                </div>
                <p className="mt-1 text-sm leading-none text-gray-500">
                  로그인 페이지입니다.
                </p>
              </div>
            </div>
            <button
              className="flex-no-shrink ml-4 rounded-full border-2 border-blue-500 bg-blue-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:shadow-lg"
              onClick={() => navigate('/auth/login')}
            >
              이동
            </button>
          </div>
        </div>
        <div className="hover:shodow-lg flex flex-col rounded-2xl bg-gray-800 p-8 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 rounded-2xl border border-gray-800 bg-gray-900 p-3 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="ml-3 flex flex-col">
                <div className="font-medium leading-none text-gray-100">
                  /auth/profile/settings
                </div>
                <p className="mt-1 text-sm leading-none text-gray-500">
                  프로필 설정페이지입니다. (path 임시)
                </p>
              </div>
            </div>
            <button
              className="flex-no-shrink ml-4 rounded-full border-2 border-blue-500 bg-blue-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:shadow-lg"
              onClick={() => navigate('/auth/profile/settings')}
            >
              이동
            </button>
          </div>
        </div>
        <div className="hover:shodow-lg flex flex-col rounded-2xl bg-gray-800 p-8 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 rounded-2xl border border-gray-800 bg-gray-900 p-3 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="ml-3 flex flex-col">
                <div className="font-medium leading-none text-gray-100">
                  /auth/profile/creation
                </div>
                <p className="mt-1 text-sm leading-none text-gray-500">
                  프로필 생성 프로그레스바
                </p>
              </div>
            </div>
            <button
              className="flex-no-shrink ml-4 rounded-full border-2 border-blue-500 bg-blue-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:shadow-lg"
              onClick={() => navigate('/auth/profile/creation')}
            >
              이동
            </button>
          </div>
        </div>
        <div className="hover:shodow-lg flex flex-col rounded-2xl bg-gray-800 p-8 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 rounded-2xl border border-gray-800 bg-gray-900 p-3 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="ml-3 flex flex-col">
                <div className="font-medium leading-none text-gray-100">
                  /group
                </div>
                <p className="mt-1 text-sm leading-none text-gray-500">
                  그룹페이지
                </p>
              </div>
            </div>
            <button
              className="flex-no-shrink ml-4 rounded-full border-2 border-blue-500 bg-blue-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:shadow-lg"
              onClick={() => navigate('/group')}
            >
              이동
            </button>
          </div>
        </div>
        <div className="hover:shodow-lg flex flex-col rounded-2xl bg-gray-800 p-8 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 rounded-2xl border border-gray-800 bg-gray-900 p-3 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="ml-3 flex flex-col">
                <div className="font-medium leading-none text-gray-100">
                  /group/list
                </div>
                <p className="mt-1 text-sm leading-none text-gray-500">
                  그룹 리스트 페이지
                </p>
              </div>
            </div>
            <button
              className="flex-no-shrink ml-4 rounded-full border-2 border-blue-500 bg-blue-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:shadow-lg"
              onClick={() => navigate('/group/list')}
            >
              이동
            </button>
          </div>
        </div>
        <div className="hover:shodow-lg flex flex-col rounded-2xl bg-gray-800 p-8 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 rounded-2xl border border-gray-800 bg-gray-900 p-3 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="ml-3 flex flex-col">
                <div className="font-medium leading-none text-gray-100">
                  /group/post/create
                </div>
                <p className="mt-1 text-sm leading-none text-gray-500">
                  에디터 (디자인 미수행)
                </p>
              </div>
            </div>
            <button
              className="flex-no-shrink ml-4 rounded-full border-2 border-blue-500 bg-blue-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:shadow-lg"
              onClick={() => navigate('/group/post/create')}
            >
              이동
            </button>
          </div>
        </div>
        <div className="text-white">아이콘모음</div>
        <div className="flex w-full flex-wrap gap-4">
          {Object.keys(icons).map((iconPath) => {
            const iconName = iconPath.split('/').pop()?.replace('.svg', '');

            return (
              <div
                key={iconPath}
                className="flex flex-col items-center justify-center rounded-md border-2 border-gray-700 p-3"
              >
                <img
                  src={`/public/assets/svg/${iconName}.svg`}
                  alt={iconName}
                />
                <span className="text-white">{iconName}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Publish;
