/* component */
import ModalLayout from '@/shared/ui/layouts/Modal';
import CreateGroupStep1 from '@/shared/ui/modalContent/group/Create/step1';
import CreateGroupStep2 from '@/shared/ui/modalContent/group/Create/step2';
/* lifecicle */
import { useState } from 'react';
/* hook */
import useCreate from '@/shared/hooks/useCreate';

interface GroupListProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleOnboardingNextStep: () => void;
}

const GroupList: React.FC<GroupListProps> = ({
  isOpen,
  setIsOpen,
  handleOnboardingNextStep,
}) => {
  const [step, setStep] = useState<number>(1);
  const [image, setImage] = useState<string>('');
  const [groupName, setGroupName] = useState<string>('');
  const [visibility, setVisibility] = useState<boolean>(true);
  const { updateCreateGroupData, submitGroupCreate } = useCreate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target?.result) {
          setImage(event.target.result.toString());
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

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
      handleOnboardingNextStep(); //유저정보에서 온보딩 여부 X일 때
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
      {step === 1 ? (
        <CreateGroupStep1
          image={image}
          handleImageChange={handleImageChange}
          setGroupName={setGroupName}
        />
      ) : (
        <CreateGroupStep2 setVisibility={setVisibility} />
      )}
    </ModalLayout>
  );
};

export default GroupList;
