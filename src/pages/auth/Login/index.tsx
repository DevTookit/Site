import React, { useState } from 'react';
import AuthLayout from '@/shared/ui/layouts/Auth';
import LoginForm from '@/features/auth/Login';
import SignUpForm from '@/features/auth/SignUp';

const Login: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0); // 0: 첫 번째 탭, 1: 두 번째 탭

  const handleTabChange = (index: number) => {
    setActiveTab(index);
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
