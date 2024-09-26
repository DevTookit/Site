/* component */
import ModalLayout from '@/shared/ui/layouts/Modal';
import CreateCategoryContent from '@/shared/ui/modal/category/Create';
/* lifecicle */
import { useState } from 'react';
/* hook */
import useCreate from '@/shared/hooks/useCreate';

interface CreateGroupProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleOnboardingNextStep: () => void;
}

const CreateCategory: React.FC<CreateGroupProps> = ({
  isOpen,
  setIsOpen,
  handleOnboardingNextStep,
}) => {
  const [categoryName, setCategoryName] = useState<string>('');
  const [visibility, setVisibility] = useState<string>('visible-false');
  const { updateEditCategoryData, submitCategoryUpdate } = useCreate();

  const resetData = () => {
    setCategoryName('');
    setVisibility('visible-false');
  };

  const onClickPrevBtn = () => {
    setIsOpen(false);
    resetData();
  };

  const onClickNextBtn = () => {
    updateEditCategoryData({
      categoryName,
      visibility: visibility === 'visible-false',
    });
    submitCategoryUpdate(); //생성
    handleOnboardingNextStep();
    setIsOpen(false);
  };

  return (
    <ModalLayout
      isOpen={isOpen}
      btnOption={{
        lBtnNm: '취소',
        lBtnFn: onClickPrevBtn,
        rBtnNm: '저장',
        rBtnFn: onClickNextBtn,
      }}
    >
      <CreateCategoryContent
        setCategoryName={setCategoryName}
        visibility={visibility}
        setVisibility={setVisibility}
      />
    </ModalLayout>
  );
};

export default CreateCategory;
