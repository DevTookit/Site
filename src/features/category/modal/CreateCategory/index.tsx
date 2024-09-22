/* component */
import ModalLayout from '@/shared/ui/layouts/Modal';
/* lifecicle */
import { useState } from 'react';
/* hook */
import useCreate from '@/shared/hooks/useCreate';

interface CreateGroupProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateCategory: React.FC<CreateGroupProps> = ({ isOpen, setIsOpen }) => {
  const [step, setStep] = useState<number>(1);
  const [image, setImage] = useState<string>('');
  const [groupName, setGroupName] = useState<string>('');
  const [visibility, setVisibility] = useState<boolean>(true);
  const { updateCreateGroupData, submitGroupCreate } = useCreate();

  const resetData = () => {
    setStep(1);
    setImage('');
    setGroupName('');
    setVisibility(false);
  };

  const onClickPrevBtn = () => {
    if (step > 1) setStep(1);
    else {
      setIsOpen(false);
      resetData();
    }
  };

  const onClickNextBtn = () => {
    if (step === 1) {
      updateCreateGroupData({ image, groupName });
      setStep(step + 1);
    } else {
      updateCreateGroupData({ visibility });
      submitGroupCreate(); //생성
      setIsOpen(false);
    }
  };

  return (
    <ModalLayout
      isOpen={isOpen}
      btnOption={{
        lBtnNm: '뒤로가기',
        lBtnFn: onClickPrevBtn,
        rBtnNm: step === 1 ? '다음' : '생성',
        rBtnFn: onClickNextBtn,
      }}
    >
      <div>1</div>
    </ModalLayout>
  );
};

export default CreateCategory;
