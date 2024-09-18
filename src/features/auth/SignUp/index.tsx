import React, { useState } from 'react';

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [forgotPassword, setForgotPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('로그인 시도:', { name, email, password, forgotPassword });
  };

  return (
    <form className="mb-10 rounded pb-8 shadow-md">
      <div className="mb-4 flex">
        <input
          className="mr-[20px] h-[60px] w-[210px] rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 text-white placeholder:text-lighten-500"
          id="name"
          type="text"
          placeholder="이름"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="h-[60px] flex-1 rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 text-white placeholder:text-lighten-500"
          id="email"
          type="text"
          placeholder="이메일"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="h-[60px] w-[559px] rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 text-white placeholder:text-lighten-500"
          id="password"
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-[30px]">
        <input
          className="h-[60px] w-[559px] rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 text-white placeholder:text-lighten-500"
          id="password"
          type="password"
          placeholder="비밀번호 확인"
          onChange={(e) => setForgotPassword(e.target.value)}
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <button
          className="focus:shadow-outline h-[58px] flex-1 rounded bg-lighten-100 px-4 py-[11px] font-bold text-lighten-600 hover:bg-lighten-200 focus:outline-none"
          type="button"
          onClick={handleLogin}
        >
          다음
        </button>
      </div>
    </form>
  );
};

export default SignUp;
