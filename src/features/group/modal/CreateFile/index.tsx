/* component */
import ModalLayout from '@/shared/ui/layouts/Modal';
import FileSelectType from '@/shared/ui/modalContent/file/SelectType';
import { useNavigate } from 'react-router-dom';

/* lifecicle */
import { useState, useEffect } from 'react';

interface CreateFileModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateFileModal: React.FC<CreateFileModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const navigate = useNavigate();
  const [fileType, setFileType] = useState<'folder' | 'code' | 'post'>(
    'folder',
  );
  const [fileTypeCheck, setFileTypeCheck] = useState<boolean>(false);

  const onClickNextBtn = () => {
    if (fileType === 'folder') setFileTypeCheck(true);
    else if (fileType === 'code') navigate('/group/code/create');
    else if (fileType === 'post') navigate('/group/post/create');
  };

  useEffect(() => {
    if (isOpen) {
      setFileType('folder');
      setFileTypeCheck(false);
    }
  }, [isOpen]);
  return (
    <ModalLayout
      isOpen={isOpen}
      btnOption={{
        closeFn: () => {
          setIsOpen(false);
        },
        lBtnNm: '',
        lBtnFn: () => {},
        rBtnNm: '생성',
        rBtnFn: onClickNextBtn,
      }}
    >
      {!fileTypeCheck ? (
        <FileSelectType fileType={fileType} setFileType={setFileType} />
      ) : (
        <></>
      )}
    </ModalLayout>
  );
};

export default CreateFileModal;
