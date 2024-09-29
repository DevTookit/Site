import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '@/shared/\bapi/authApi';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const getMyInfo = () => {
    authApi.getMyInfo().then((res) => {
      //프로필 세팅 여부
      if (res.img) navigate('/auth/profile/settings');
      else navigate('/group');
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    authApi
      .loginUser({ email, password })
      .then(() => {
        getMyInfo();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form className="mb-10 rounded pb-8 shadow-md">
      <div className="mb-4">
        <label className="hidden">이메일</label>
        <input
          className="h-[60px] w-[559px] rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 text-white placeholder:text-lighten-500"
          id="email"
          type="text"
          placeholder="이메일을 입력하세요"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-10">
        <label className="hidden">비밀번호</label>
        <input
          className="h-[60px] w-[559px] rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 text-white placeholder:text-lighten-500"
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <button
          className="focus:shadow-outline mr-[20px] h-[58px] flex-1 rounded bg-brand px-4 py-[11px] font-bold text-lighten-600 hover:bg-blue-700 focus:outline-none"
          type="button"
          onClick={handleLogin}
        >
          로그인
        </button>
        <button
          className="focus:shadow-outline h-[58px] min-w-[200px] rounded bg-lighten-100 px-4 py-[11px] font-bold text-lighten-500 hover:bg-gray-600 focus:outline-none"
          type="button"
          onClick={handleLogin}
        >
          Github 로그인
        </button>
      </div>

      <div className="text-base text-lighten-400">
        <Link to="">
          <span>아이디 / 비밀번호 찾기</span>
        </Link>
      </div>
    </form>
  );
};

export default Login;
