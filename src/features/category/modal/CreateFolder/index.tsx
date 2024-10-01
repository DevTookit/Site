/* component */
import ModalLayout from '@/shared/ui/layouts/Modal';
import CreateSubFolderContent from '@/shared/ui/modalContent/folder/Create';
/* lifecicle */
import { useState } from 'react';
/* hook */
import sectionApi from '@/shared/api/sectionApi';
import useLayout from '@/shared/hooks/useLayout';

interface CreateFolderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateFolder: React.FC<CreateFolderProps> = ({ isOpen, setIsOpen }) => {
  const [folderName, setFolderName] = useState<string>('');
  const [folderOption, setFolderOption] = useState<string>('MENU');
  const { data, setCurrentCategoryChildList, setOnboardingStep } = useLayout();

  const resetData = () => {
    setFolderName('');
    setFolderOption('MENU');
  };

  const onClickCloseBtn = () => {
    setIsOpen(false);
    resetData();
  };

  const onClickSaveBtn = async () => {
    await sectionApi
      .createSection({
        groupId: data.currentGroupTab?.id ?? 0,
        name: folderName,
        isPublic: false,
        parentSectionId: data.currentCategory?.folderId ?? 0,
        type: folderOption,
      })
      .then(() => {
        if (data.onboardingStep === 2) setOnboardingStep(3);
        sectionApi
          .getSections(
            data.currentGroupTab?.id ?? 0,
            data.currentCategory?.folderId ?? 0,
          )
          .then((res) => {
            setCurrentCategoryChildList(
              data.currentCategory?.folderId ?? 0,
              res,
            );
          });
        setIsOpen(false);
      });
  };

  return (
    <ModalLayout
      isOpen={isOpen}
      btnOption={{
        lBtnNm: '취소',
        lBtnFn: onClickCloseBtn,
        rBtnNm: '저장',
        rBtnFn: onClickSaveBtn,
      }}
    >
      <CreateSubFolderContent
        setFolderName={setFolderName}
        folderOption={folderOption}
        setFolderOption={setFolderOption}
      />
    </ModalLayout>
  );
};

export default CreateFolder;
