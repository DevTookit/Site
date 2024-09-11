import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('로그인 시도:', { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-xs">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-red-800 mb-4"></div>
          <h2 className="text-xl text-white font-semibold mb-1">로그인</h2>
          <p className="text-blue-400">Welcome</p>
        </div>
        <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              메일
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="이메일을 입력하세요"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              로그인
            </button>
          </div>
        </form>
        <div className="text-center text-gray-400 mb-4">
          <a href="#" className="text-sm">
            아이디 / 비밀번호를 잊으셨나요?
          </a>
        </div>
        <div className="flex justify-between mb-4">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
            onClick={handleLogin}
          >
            회원가입
          </button>
        </div>
        <div className="text-center text-gray-400">
          <p>간편하게 로그인 해보세요.</p>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-white p-3 rounded-full">
            <img
              className="h-6 w-6"
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
            />
          </button>
          <button className="bg-white p-3 rounded-full">
            <img
              className="h-6 w-6"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
