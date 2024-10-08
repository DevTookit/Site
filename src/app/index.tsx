import { setNavigateToLogin } from '@/shared/util/navigationUtil';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRouter from './router';

const App: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setNavigateToLogin(() => {
      navigate('/auth/login');
    });
  }, []);

  return <AppRouter />;
};

export default App;
