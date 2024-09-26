import { useContext } from 'react';
import LayoutContext, {
  LayoutContextType,
} from '@/app/providers/LayoutProviders';

const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout은 LayoutProviders 내부에서만 사용해야 합니다.');
  }
  return context;
};

export default useLayout;
