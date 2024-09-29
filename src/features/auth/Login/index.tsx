import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '@/shared/\bapi/authApi';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = '유효한 이메일을 입력해주세요.';
    }
    // 비밀번호 최소 8자 검사
    if (password.length < 8) {
      newErrors.password = '비밀번호는 최소 8자 이상이어야 합니다.';
    }

    setErrors(newErrors);

    // 에러가 없으면 true 반환
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    authApi
      .loginUser({ email, password })
      .then(() => {
        getMyInfo();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const getMyInfo = () => {
    authApi.getMyInfo().then((res) => {
      //프로필 세팅 여부
      if (res.img) navigate('/auth/profile/settings');
      else navigate('/group');
    });
  };

  return (
    <form className="mb-10 rounded pb-8 shadow-md">
      <div className="relative mb-4">
        <label className="hidden">이메일</label>
        <input
          className="h-[60px] w-[559px] rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 text-white placeholder:text-lighten-500"
          id="email"
          type="text"
          placeholder="이메일을 입력하세요"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="absolute bottom-[-18px] text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>
      <div className="relative mb-10">
        <label className="hidden">비밀번호</label>
        <input
          className="h-[60px] w-[559px] rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 text-white placeholder:text-lighten-500"
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="absolute bottom-[-18px] text-sm text-red-500">
            {errors.password}
          </p>
        )}
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
