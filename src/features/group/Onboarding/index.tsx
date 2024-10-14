/* onboarding-btn */
import CreateGroupBtn from '@/shared/ui/onboarding/Button/CreateGroup';
import EditCategoryBtn from '@/shared/ui/onboarding/Button/EditCategory';
import WritePostBtn from '@/shared/ui/onboarding/Button/WritePost';
import ExplorePageBtn from '@/shared/ui/onboarding/Button/ExplorePage';
import useContextMenuStore from '@/shared/store/contextStore';
/* hook */
import useLayout from '@/shared/hooks/useLayout';
import { useNavigate } from 'react-router-dom';
import CreateFileModal from '../modal/CreateFile';
import { useState } from 'react';
import { findRepositoriesInCurrentCategory } from '@/shared/util/common';

const GroupOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const {
    data,
    setGroupModalIsOpen,
    setCurrentCategory,
    setCurrentRepository,
  } = useLayout();
  const { showContextMenu } = useContextMenuStore();
  const [fileModalisOpen, setFileModalisOpen] = useState(false);

  const getOnboardingStepStatus = (
    chkStep: number,
  ): 'active' | 'check' | '' => {
    if (data.onboardingStep === chkStep) return 'active';
    else if (data.onboardingStep > chkStep) return 'check';
    else return '';
  };

  const updateRepositoryStatus = () => {
    const repositories = findRepositoriesInCurrentCategory(
      data.currentCategoryChildList,
    );

    console.log(repositories);
    if (repositories.length > 0) {
      // setCurrentRepository(repositories[0]);
      setCurrentRepository({
        folderId: repositories[0].folderId,
        name: repositories[0].name,
        depth1: '첫 게시글 작성하기',
      });
    } else {
      alert('저장소가 존재하지 않습니다.');
      return;
    }
    setFileModalisOpen(true);
  };

  return (
    <div className="space-y-[10px]">
      <CreateFileModal
        isOpen={fileModalisOpen}
        setIsOpen={setFileModalisOpen}
      />
      <CreateGroupBtn
        state={getOnboardingStepStatus(1)}
        onClickFn={() => setGroupModalIsOpen(true)}
      />
      <EditCategoryBtn
        state={getOnboardingStepStatus(2)}
        onClickFn={() => {
          setCurrentCategory(data.currentCategoryList[0]);
          showContextMenu(222, 348);
        }}
      />
      <WritePostBtn
        state={getOnboardingStepStatus(3)}
        onClickFn={() => {
          updateRepositoryStatus();
        }}
      />
      <ExplorePageBtn
        state={getOnboardingStepStatus(4)}
        onClickFn={() => {
          navigate('/group/explore');
        }}
      />
    </div>
  );
};

export default GroupOnboarding;
