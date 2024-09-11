import React from 'react';
import { useNavigate } from 'react-router-dom';

const Publish: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900">
        <div className="flex flex-col p-8 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 rounded-2xl p-3 border border-gray-800 text-blue-400 bg-gray-900"
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
              <div className="flex flex-col ml-3">
                <div className="font-medium leading-none text-gray-100">
                  /Login
                </div>
                <p className="text-sm text-gray-500 leading-none mt-1">
                  로그인 페이지입니다.
                </p>
              </div>
            </div>
            <button
              className="flex-no-shrink bg-blue-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-500 text-white rounded-full"
              onClick={() => navigate('/login')}
            >
              이동
            </button>
          </div>
        </div>
        <div className="flex flex-col p-8 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 rounded-2xl p-3 border border-gray-800 text-blue-400 bg-gray-900"
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
              <div className="flex flex-col ml-3">
                <div className="font-medium leading-none text-gray-100">
                  /profile
                </div>
                <p className="text-sm text-gray-500 leading-none mt-1">
                  프로필 설정페이지입니다. (path 임시)
                </p>
              </div>
            </div>
            <button
              className="flex-no-shrink bg-blue-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-500 text-white rounded-full"
              onClick={() => navigate('/profile')}
            >
              이동
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publish;
