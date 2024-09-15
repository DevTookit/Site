import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('로그인 시도:', { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-red-800 mb-4"></div>
          <h2 className="text-xl text-white font-semibold mb-1">로그인</h2>
          <p className="text-lighten-400">Welcome</p>
        </div>
        <form className="shadow-md rounded px-8 pb-8 mb-4">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-[580px] h-[72px] bg-lighten-600 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="이메일을 입력하세요"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-[580px] h-[72px] bg-lighten-600 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center text-gray-400 mb-6">
            <a href="#" className="text-sm">
              아이디 / 비밀번호를 잊으셨나요?
            </a>
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-brand hover:bg-blue-700 text-white font-bold py-[11px] px-4 rounded focus:outline-none focus:shadow-outline w-[379px] h-[44px]"
              type="button"
              onClick={handleLogin}
            >
              로그인
            </button>
          </div>
          <div className="flex justify-center mb-6">
            <button
              className="bg-lighten-600 hover:bg-gray-600 text-white font-bold py-[11px] px-4 rounded focus:outline-none focus:shadow-outline w-[379px] h-[44px]"
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
        </form>
      </div>
    </div>
  );
};

export default Login;
