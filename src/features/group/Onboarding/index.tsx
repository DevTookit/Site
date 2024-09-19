/* onboarding-btn */
import CreateGroupBtn from '@/shared/ui/onboarding/Button/CreateGroup';
import EditCategoryBtn from '@/shared/ui/onboarding/Button/EditCategory';
import WritePostBtn from '@/shared/ui/onboarding/Button/WritePost';
import ExplorePageBtn from '@/shared/ui/onboarding/Button/ExplorePage';

interface Props {
  onboardingStep: number;
  setOnboardingStep: (newStep: number) => void;
  setCreateGroupIsOpen: (createGroupIsOpen: boolean) => void;
}

const GroupOnboarding: React.FC<Props> = ({
  onboardingStep,
  setCreateGroupIsOpen,
}) => {
  const onClickCreateGroupBtn = () => {
    setCreateGroupIsOpen(true);
  };

  return (
    <div className="space-y-[10px]">
      <CreateGroupBtn
        active={onboardingStep === 1}
        onClickFn={onClickCreateGroupBtn}
      />
      <EditCategoryBtn active={onboardingStep === 2} onClickFn={() => {}} />
      <WritePostBtn active={onboardingStep === 3} onClickFn={() => {}} />
      <ExplorePageBtn active={onboardingStep === 4} onClickFn={() => {}} />
    </div>
  );
};

export default GroupOnboarding;
