import { useContext } from 'react';
import OnboardingContext, { CreateContextType } from '@/features/Provider';

const useCreate = (): CreateContextType => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error(
      'useOnboarding은 OnboardingProvider 내부에서만 사용해야 합니다.',
    );
  }
  return context;
};

export default useCreate;
