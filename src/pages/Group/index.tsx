import React from 'react';

const Group = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col bg-gray-900 p-4 text-gray-200">
        <div className="mb-6 flex items-center space-x-2 border-b border-gray-700 pb-4">
          <img
            src="https://source.unsplash.com/40x40/?profile"
            alt="User Profile"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="text-sm font-bold">우영우</p>
            <p className="text-xs text-gray-400">Woo0woo@gamil.com</p>
          </div>
        </div>
        <div className="flex">
          <button className="h-10 w-10">
            <img
              className="h-full w-full"
              src="/public/assets/svg/icon_explore.svg"
            />
          </button>
          <button className="h-10 w-10">
            <img
              className="h-full w-full"
              src="/public/assets/svg/icon_explore.svg"
            />
          </button>
        </div>
        {/* Category List */}
        <div className="text-sm text-gray-400">
          <p className="mb-2 font-bold">category</p>
          <ul>
            <li className="py-1">임시 카테고리</li>
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex flex-1 flex-grow flex-col items-center justify-between bg-gray-900 p-8">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            className="w-full rounded-lg bg-gray-700 p-3 text-gray-300 placeholder-gray-500 focus:outline-none"
            placeholder="검색어를 입력해주세요."
          />
        </div>
        {/* Welcome Section */}
        <section>
          <h1 className="mb-4 text-2xl font-bold text-white">
            환영합니다, 영우님!
          </h1>
          <p className="mb-6 text-gray-400">
            영우님만을 위한 새로운 그룹을 만들어 데브툴킷을 100% 활용해보세요!
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button className="flex w-[440px] items-center justify-between rounded-lg bg-gray-700 p-4 hover:bg-gray-600">
              <span className="text-lg">👥 그룹 생성하기</span>
              <span className="text-sm text-gray-400">
                나만의 그룹을 만들고 관리하기
              </span>
            </button>
            <button className="flex w-[440px] items-center justify-between rounded-lg bg-gray-700 p-4 hover:bg-gray-600">
              <span className="text-lg">🛠 카테고리 수정하기</span>
              <span className="text-sm text-gray-400">
                카테고리를 분류해 파일정리하기
              </span>
            </button>
            <button className="flex w-[440px] items-center justify-between rounded-lg bg-gray-700 p-4 hover:bg-gray-600">
              <span className="text-lg">✍ 첫 게시글 작성하기</span>
              <span className="text-sm text-gray-400">
                파일, 글, 코드를 모아 아카이빙하기
              </span>
            </button>
            <button className="flex w-[440px] items-center justify-between rounded-lg bg-gray-700 p-4 hover:bg-gray-600">
              <span className="text-lg">🔍 다른 그룹 탐색하기</span>
              <span className="text-sm text-gray-400">
                새로운 그룹을 찾아 함께 참여해보기
              </span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Group;
