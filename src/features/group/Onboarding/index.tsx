/* onboarding-btn */
import CreateGroupBtn from '@/shared/ui/onboarding/Button/CreateGroup';
import EditCategoryBtn from '@/shared/ui/onboarding/Button/EditCategory';
import WritePostBtn from '@/shared/ui/onboarding/Button/WritePost';
import ExplorePageBtn from '@/shared/ui/onboarding/Button/ExplorePage';

interface Props {
  onboardingStep: number;
  setOnboardingStep: (newStep: number) => void;
  setGroupIsOpen: (groupIsOpen: boolean) => void;
  setCgryIsOpen: (cgryIsOpen: boolean) => void;
}

const GroupOnboarding: React.FC<Props> = ({
  onboardingStep,
  setGroupIsOpen,
  setCgryIsOpen,
}) => {
  const getOnboardingStepStatus = (
    chkStep: number,
  ): 'active' | 'check' | '' => {
    if (onboardingStep === chkStep) return 'active';
    else if (onboardingStep > chkStep) return 'check';
    else return '';
  };

  return (
    <div className="space-y-[10px]">
      <CreateGroupBtn
        state={getOnboardingStepStatus(1)}
        onClickFn={() => setGroupIsOpen(true)}
      />
      <EditCategoryBtn
        state={getOnboardingStepStatus(2)}
        onClickFn={() => setCgryIsOpen(true)}
      />
      <WritePostBtn state={getOnboardingStepStatus(3)} onClickFn={() => {}} />
      <ExplorePageBtn state={getOnboardingStepStatus(4)} onClickFn={() => {}} />
    </div>
  );
};

export default GroupOnboarding;
