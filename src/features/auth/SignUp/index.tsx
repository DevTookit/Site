import React, { useState } from 'react';
import Email from '@svg/icon_email.svg?react';
import authApi from '@/shared/api/authApi';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [forgotPassword, setForgotPassword] = useState('');
  const [code, setCode] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [formStatus, setFormStatus] = useState<
    'basicInfo' | 'codeSent' | 'codeVerified'
  >('basicInfo');

  /***
   * ! API
   * */
  const getVerifyEmail = () => {
    authApi.getVerifyEmail(email);
    setFormStatus('codeVerified');
  };
  const confirmEmailVerification = () => {
    authApi
      .confirmEmailVerification(code, email)
      .then((res) => {
        if (res) {
          alert('인증되었습니다.');
          navigate('/auth/login');
        } else alert('인증에 실패했습니다.');
      })
      .catch(() => alert('인증에 실패했습니다.'));
  };
  /***
   * !
   * */
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    // 이름 검사
    if (!name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }
    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = '유효한 이메일을 입력해주세요.';
    }
    // 비밀번호 최소 8자 검사
    if (password.length < 8) {
      newErrors.password = '비밀번호는 최소 8자 이상이어야 합니다.';
    }
    // 비밀번호 확인 검사
    if (password !== forgotPassword) {
      newErrors.forgotPassword = '비밀번호가 일치하지 않습니다.';
    }

    setErrors(newErrors);

    // 에러가 없으면 true 반환
    return Object.keys(newErrors).length === 0;
  };

  const onClickEmailVerificationStatus = () => {
    if (validateForm()) {
      authApi
        .createUser({ name, email, password, job: '', tag: [''] })
        .then(() => {
          setFormStatus('codeSent');
        });
    }
  };

  return (
    <form className="flex min-h-[300px] flex-col justify-between rounded shadow-md">
      {formStatus === 'basicInfo' ? (
        <>
          <div className="mb-4 flex">
            <div className="relative mr-[20px] w-[210px]">
              <input
                className="h-[60px] w-full rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 text-white placeholder:text-lighten-500"
                id="name"
                type="text"
                placeholder="이름"
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="absolute bottom-[-18px] text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="relative flex-1">
              <input
                className="h-[60px] w-full rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 text-white placeholder:text-lighten-500"
                id="email"
                type="text"
                placeholder="이메일"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="absolute bottom-[-18px] text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                className="h-[60px] w-[559px] rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 text-white placeholder:text-lighten-500"
                id="password"
                type="password"
                placeholder="비밀번호"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="absolute bottom-[-18px] text-sm text-red-500">
                  {errors.password}
                </p>
              )}
            </div>
          </div>
          <div className="mb-[30px]">
            <div className="relative">
              <input
                className="h-[60px] w-[559px] rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 text-white placeholder:text-lighten-500"
                id="password"
                type="password"
                placeholder="비밀번호 확인"
                onChange={(e) => setForgotPassword(e.target.value)}
              />
              {errors.forgotPassword && (
                <p className="absolute bottom-[-18px] text-sm text-red-500">
                  {errors.forgotPassword}
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <div>
          <label className="relative mb-5 block h-[60px]">
            <Email className="absolute left-[18px] top-[18px]" />
            <input
              className="h-[60px] w-full flex-1 rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 pl-[60px] text-white placeholder:text-lighten-500"
              id="email"
              type="text"
              placeholder="이메일"
              value={email}
              disabled
            />
          </label>
          {formStatus === 'codeVerified' && (
            <input
              className="h-[60px] w-full rounded-md border-2 border-solid border-lighten-100 bg-darken-100 p-4 text-white placeholder:text-lighten-500"
              id="name"
              type="text"
              placeholder="인증번호 입력"
              onChange={(e) => setCode(e.target.value)}
            />
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        {formStatus === 'basicInfo' ? (
          <button
            className="focus:shadow-outline h-[58px] flex-1 rounded bg-lighten-100 px-4 py-[11px] font-bold text-lighten-600 hover:bg-lighten-200 focus:outline-none"
            type="button"
            onClick={() => onClickEmailVerificationStatus()}
          >
            다음
          </button>
        ) : formStatus === 'codeSent' ? (
          <button
            className="focus:shadow-outline h-[58px] flex-1 rounded bg-lighten-100 px-4 py-[11px] font-bold text-lighten-600 hover:bg-lighten-200 focus:outline-none"
            type="button"
            onClick={() => getVerifyEmail()}
          >
            인증번호 보내기
          </button>
        ) : (
          <button
            className="focus:shadow-outline h-[58px] flex-1 rounded bg-lighten-100 px-4 py-[11px] font-bold text-lighten-600 hover:bg-lighten-200 focus:outline-none"
            type="button"
            onClick={() => confirmEmailVerification()}
          >
            확인
          </button>
        )}
      </div>
    </form>
  );
};

export default SignUp;
