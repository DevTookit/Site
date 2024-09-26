import { useContext } from 'react';
import CreateContext, {
  CreateContextType,
} from '@/app/providers/CreateProvider';

const useCreate = (): CreateContextType => {
  const context = useContext(CreateContext);
  if (context === undefined) {
    throw new Error(
      'useOnboarding은 OnboardingProvider 내부에서만 사용해야 합니다.',
    );
  }
  return context;
};

export default useCreate;
