/* component */
import ModalLayout from '@/shared/ui/layouts/Modal';
import CreateCategoryContent from '@/shared/ui/modalContent/category/Create';
/* lifecicle */
import { useState } from 'react';
/* hook */
import useCreate from '@/shared/hooks/useCreate';
import useLayout from '@/shared/hooks/useLayout';

const CreateCategory: React.FC = () => {
  const [categoryName, setCategoryName] = useState<string>('');
  const [visibility, setVisibility] = useState<string>('visible-false');
  const { updateEditCategoryData, submitCategoryUpdate } = useCreate();
  const { data, setCgryModalIsOpen, setOnboardingStep } = useLayout();

  const resetData = () => {
    setCategoryName('');
    setVisibility('visible-false');
  };

  const onClickPrevBtn = () => {
    setCgryModalIsOpen(false);
    resetData();
  };

  const onClickNextBtn = () => {
    updateEditCategoryData({
      categoryName,
      visibility: visibility === 'visible-false',
    });
    submitCategoryUpdate(); //생성
    setOnboardingStep(data.onboardingStep + 1);
    setCgryModalIsOpen(false);
  };

  return (
    <ModalLayout
      isOpen={data.cgryModalIsOpen}
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
