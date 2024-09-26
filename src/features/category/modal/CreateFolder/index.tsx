/* component */
import ModalLayout from '@/shared/ui/layouts/Modal';
import CreateSubFolderContent from '@/shared/ui/modal/folder/Create';
/* lifecicle */
import { useState } from 'react';
/* hook */
import useCreate from '@/shared/hooks/useCreate';

interface CreateFolderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateFolder: React.FC<CreateFolderProps> = ({ isOpen, setIsOpen }) => {
  const [folderName, setFolderName] = useState<string>('');
  const [folderOption, setFolderOption] = useState<string>('category');
  const { updateCreateSubFolder, submitSubFolderUpdate } = useCreate();

  const resetData = () => {
    setFolderName('');
    setFolderOption('category');
  };

  const onClickCloseBtn = () => {
    setIsOpen(false);
    resetData();
  };

  const onClickSaveBtn = () => {
    updateCreateSubFolder({
      folderName,
      folderOption,
    });
    submitSubFolderUpdate(); //생성
    setIsOpen(false);
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
