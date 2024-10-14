/* component */
import GroupOnboarding from '@/features/group/Onboarding';
import GroupMain from '@/features/group/Main';

/* hook */
import useLayout from '@/shared/hooks/useLayout';
import useAuthStore from '@/shared/store/authStore';
import { useEffect } from 'react';

const Group: React.FC = () => {
  const { data, setCurrentRepository } = useLayout();
  const { userName } = useAuthStore();

  useEffect(() => {
    setCurrentRepository(null);
  }, []);
  return (
    <>
      {data.onboardingStep > 0 && data.onboardingStep < 5 ? (
        <section className="mb-[60px]">
          <h1 className="mb-3 text-[32px] font-bold text-[#D2D3D3]">
            환영합니다, {userName}님!
          </h1>
          <p className="mb-[30px] text-base text-lighten-400">
            {userName}님만을 위한 새로운 그룹을 만들어 데브툴킷을 100%
            활용해보세요!
          </p>
          <GroupOnboarding />
        </section>
      ) : data.currentGroupTab ? (
        <GroupMain />
      ) : (
        <></>
      )}
    </>
  );
};

export default Group;
