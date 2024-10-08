/* component */
import GroupOnboarding from '@/features/group/Onboarding';
import GroupMain from '@/features/group/Main';

/* hook */
import useLayout from '@/shared/hooks/useLayout';
import useAuthStore from '@/shared/store/authStore';

const Group: React.FC = () => {
  const { data } = useLayout();
  const { userName, isOnBoardingComplete } = useAuthStore();

  return (
    <>
      {data.onboardingStep > 0 &&
      data.onboardingStep < 5 &&
      !isOnBoardingComplete ? (
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
      ) : (
        <GroupMain />
      )}
    </>
  );
};

export default Group;
