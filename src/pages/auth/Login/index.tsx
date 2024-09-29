import React, { useState } from 'react';
import AuthLayout from '@/shared/ui/layouts/Auth';
import LoginForm from '@/features/auth/Login';
import SignUpForm from '@/features/auth/SignUp';
import { useLocation, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === '/auth/signup';
  const [activeTab, setActiveTab] = useState(isSignup ? 1 : 0); // 0: 첫 번째 탭, 1: 두 번째 탭

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    navigate(index === 0 ? '/auth/login' : '/auth/signup');
  };

  return (
    <AuthLayout
      tabName1="Log in"
      tabName2="Sign Up"
      activeTab={activeTab}
      onTabChange={handleTabChange}
    >
      {activeTab === 0 ? <LoginForm /> : <SignUpForm />}
    </AuthLayout>
  );
};

export default Login;
