import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg flex p-8 max-w-4xl w-full">
        {/* 좌측 프로필 섹션 */}
        <div className="w-1/3 flex flex-col items-center">
          <div className="relative mb-4">
            <img
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-600"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <button className="absolute bottom-0 right-0 bg-gray-600 p-2 rounded-full">
              📷
            </button>
          </div>
          <h3 className="text-lg font-semibold mb-2">우영우</h3>
          <p className="text-gray-400">Woo0woo@gamil.com</p>
        </div>

        {/* 우측 정보 섹션 */}
        <div className="w-2/3 pl-8">
          <h1 className="text-2xl font-bold mb-4">환영합니다!</h1>
          <p className="text-gray-400 mb-8">
            데릭님을 위한 데브 툴킷이 준비되었습니다 :)
          </p>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="job">
              직업
            </label>
            <input
              className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="job"
              placeholder="프론트엔드 개발자"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="skills">
              나의 스킬
            </label>
            <input
              className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="skills"
              placeholder="개발 스택을 입력해주세요."
            />
          </div>

          {/* 스킬 태그 */}
          <div className="flex space-x-2 mb-6">
            <span className="flex items-center bg-red-600 text-white px-3 py-1 rounded-full text-sm">
              🟧 HTML5
            </span>
            <span className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              🟦 CSS3
            </span>
            <span className="flex items-center bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">
              🟨 JavaScript
            </span>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              그룹 생성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
