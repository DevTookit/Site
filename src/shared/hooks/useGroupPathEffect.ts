import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useGroupPathEffect = (callback: () => void) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/group')) {
      callback();
    }
  }, [location.pathname]);
};

export default useGroupPathEffect;
