/* component */
import ModalLayout from '@/shared/ui/layouts/Modal';
import FileSelectType from '@/shared/ui/modalContent/file/SelectType';
import CreateFolder from '@/shared/ui/modalContent/file/CreateFolder';

/* lifecicle */
import { useState, useEffect, DragEvent } from 'react';
import { useNavigate } from 'react-router-dom';

/* api */
import contentApi from '@/shared/api/contentApi';
import useLayout from '@/shared/hooks/useLayout';
import useLoadingStore from '@/shared/store/loading';

interface CreateFileModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const CreateFileModal: React.FC<CreateFileModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { data, setOnboardingStep } = useLayout();
  const setLoading = useLoadingStore((state) => state.setLoading);
  const navigate = useNavigate();
  const [fileType, setFileType] = useState<'folder' | 'code' | 'post'>(
    'folder',
  );
  const [fileTypeCheck, setFileTypeCheck] = useState<boolean>(false);

  //! Folder
  const [isChecked, setIsChecked] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  // 드래그 중일 때 기본 이벤트 막기
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };
  const handleDragLeave = () => {
    setIsDragOver(false); // 드래그 리브 상태 해제
  };

  // 파일 드롭 이벤트 처리
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (!isChecked) {
      alert('폴더 생성 후 업로드 미체크');
      return;
    }
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSave = async () => {
    setLoading(true);
    await contentApi
      .createContent(
        data.currentGroupTab?.id ?? 0,
        data.currentRepository?.folderId ?? 0,
        {
          name: folderName,
          languages: [],
          skills: [],
          content: '',
          codeDescription: '',
          type: 'FOLDER',
          parentId: null,
        },
        files,
      )
      .then(() => {
        setIsOpen(false);
        if (data.onboardingStep === 3) setOnboardingStep(4);
      });
    setLoading(false);
  };

  //! type 선택
  const onClickNextBtn = () => {
    if (fileType === 'folder') setFileTypeCheck(true);
    else if (fileType === 'code') navigate('/group/code/create');
    else if (fileType === 'post') navigate('/group/post/create');
  };
  useEffect(() => {
    if (isOpen) {
      setFileType('folder');
      setIsDragOver(false);
      setFileTypeCheck(false);
      setFolderName('');
      setFiles([]);
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
        rBtnNm: !fileTypeCheck ? '생성' : '',
        rBtnFn: onClickNextBtn,
      }}
    >
      {!fileTypeCheck ? (
        <FileSelectType fileType={fileType} setFileType={setFileType} />
      ) : (
        <CreateFolder
          setFolderName={setFolderName}
          handleCheckboxChange={handleCheckboxChange}
          files={files}
          isDragOver={isDragOver}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          handleSave={handleSave}
        />
      )}
    </ModalLayout>
  );
};

export default CreateFileModal;
