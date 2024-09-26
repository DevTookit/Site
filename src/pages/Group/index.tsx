/* component */
import GroupOnboarding from '@/features/group/Onboarding';

/* hook */
import useLayout from '@/shared/hooks/useLayout';

const Group: React.FC = () => {
  const { data } = useLayout();
  return (
    <>
      {/* Welcome Section */}
      {data.onboardingStep < 5 && (
        <section className="mb-20">
          <h1 className="mb-3 text-[32px] font-bold text-[#D2D3D3]">
            환영합니다, 영우님!
          </h1>
          <p className="mb-[30px] text-base text-lighten-400">
            영우님만을 위한 새로운 그룹을 만들어 데브툴킷을 100% 활용해보세요!
          </p>

          <GroupOnboarding />
        </section>
      )}
    </>
  );
};

export default Group;
