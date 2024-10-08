import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '@/shared/util/tokenUtil';

const RootPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate('/group'); // 토큰이 있을 경우 '/group'으로 이동
    } else {
      navigate('/auth/login'); // 토큰이 없을 경우 '/auth/login'으로 이동
    }
  }, [navigate]);

  return <></>; // Root 페이지 자체에는 아무것도 렌더링하지 않음
};

export default RootPage;
