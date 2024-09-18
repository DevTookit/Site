import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@/shared/ui/modal';

const Publish: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    console.log(isModalOpen);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
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
                /profile/settings
              </div>
              <p className="mt-1 text-sm leading-none text-gray-500">
                프로필 설정페이지입니다. (path 임시)
              </p>
            </div>
          </div>
          <button
            className="flex-no-shrink ml-4 rounded-full border-2 border-blue-500 bg-blue-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:shadow-lg"
            onClick={() => navigate('/profile/settings')}
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
                모달테스트
              </div>
              <p className="mt-1 text-sm leading-none text-gray-500">
                모달테스트
              </p>
            </div>
          </div>
          <button
            className="flex-no-shrink ml-4 rounded-full border-2 border-blue-500 bg-blue-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:shadow-lg"
            onClick={openModal}
          >
            이동
          </button>
        </div>
      </div>
    </>
  );
};

export default Publish;
