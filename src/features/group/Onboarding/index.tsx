/* onboarding-btn */
import CreateGroupBtn from '@/shared/ui/onboarding/Button/CreateGroup';
import EditCategoryBtn from '@/shared/ui/onboarding/Button/EditCategory';
import WritePostBtn from '@/shared/ui/onboarding/Button/WritePost';
import ExplorePageBtn from '@/shared/ui/onboarding/Button/ExplorePage';
import useContextMenuStore from '@/shared/store/contextStore';
/* hook */
import useLayout from '@/shared/hooks/useLayout';

const GroupOnboarding: React.FC = () => {
  const { data, setGroupModalIsOpen } = useLayout();
  const { showContextMenu } = useContextMenuStore();

  const getOnboardingStepStatus = (
    chkStep: number,
  ): 'active' | 'check' | '' => {
    if (data.onboardingStep === chkStep) return 'active';
    else if (data.onboardingStep > chkStep) return 'check';
    else return '';
  };
  return (
    <div className="space-y-[10px]">
      <CreateGroupBtn
        state={getOnboardingStepStatus(1)}
        onClickFn={() => setGroupModalIsOpen(true)}
      />
      <EditCategoryBtn
        state={getOnboardingStepStatus(2)}
        onClickFn={() => showContextMenu(242, 318)}
      />
      <WritePostBtn state={getOnboardingStepStatus(3)} onClickFn={() => {}} />
      <ExplorePageBtn state={getOnboardingStepStatus(4)} onClickFn={() => {}} />
    </div>
  );
};

export default GroupOnboarding;
