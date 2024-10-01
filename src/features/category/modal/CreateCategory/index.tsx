/* component */
import ModalLayout from '@/shared/ui/layouts/Modal';
import CreateCategoryContent from '@/shared/ui/modalContent/category/Create';
/* lifecicle */
import { useEffect, useState } from 'react';
/* hook */
import useLayout from '@/shared/hooks/useLayout';
import sectionApi from '@/shared/api/sectionApi';

const CreateCategory: React.FC = () => {
  const [categoryName, setCategoryName] = useState<string>('');
  const [visibility, setVisibility] = useState<string>('visible-false');
  const { data, setCgryModalIsOpen, setCurrentCategoryList } = useLayout();

  const resetData = () => {
    setCategoryName('');
    setVisibility('visible-false');
  };

  const onClickPrevBtn = () => {
    setCgryModalIsOpen(false);
    resetData();
  };

  const onClickNextBtn = async () => {
    await sectionApi
      .updateSection({
        name: categoryName,
        isPublic: visibility === 'visible-true',
        categoryId: data.currentCategory?.folderId ?? 0,
        groupId: data.currentGroupTab?.id ?? 0,
      })
      .then(() => {
        if (data.currentGroupTab?.id)
          sectionApi.getSections(data.currentGroupTab.id).then((res) => {
            setCurrentCategoryList(res);
          });
      });

    // setOnboardingStep(data.onboardingStep + 1);
    setCgryModalIsOpen(false);
  };

  useEffect(() => {
    console.log('modalopen');
    console.log(data);
    if (data.cgryModalIsOpen && data.currentCategory) {
      setCategoryName(data.currentCategory.name);
      setVisibility(
        data.currentCategory.isPublic ? 'visible-true' : 'visible-false',
      );
    }
  }, [data.cgryModalIsOpen]);

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
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        visibility={visibility}
        setVisibility={setVisibility}
      />
    </ModalLayout>
  );
};

export default CreateCategory;
