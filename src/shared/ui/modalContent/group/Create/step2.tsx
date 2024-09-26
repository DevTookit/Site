import RadioGroup from '@/shared/ui/Radio';
import { useState } from 'react';

interface CreateGroupStep1rops {
  setVisibility: (visibility: boolean) => void;
}

const CreateGroupStep1: React.FC<CreateGroupStep1rops> = () => {
  const [isSelected, setIsSelected] = useState('1');
  return (
    <div className="rounded-t bg-primary p-10">
      <h4 className="mb-[14px] text-xl font-bold text-lighten-500">
        그룹 공개 범위
      </h4>
      <p className="mb-[10px] text-lg font-medium text-lighten-400">공개범위</p>
      <RadioGroup className="mb-[14px] flex flex-col gap-[14px]">
        <RadioGroup.Button
          name="visibleYn"
          id="visible-1"
          label="개인 그룹"
          dscr="나만 볼 수 있는 개인 페이지"
          isSelected={isSelected === 'visible-1'}
          onChange={setIsSelected}
        />
        <RadioGroup.Button
          name="visibleYn"
          id="visible-2"
          label="공개 그룹"
          dscr="누구나 방문할 수 있는 오픈 페이지"
          isSelected={isSelected === 'visible-2'}
          onChange={setIsSelected}
        />
      </RadioGroup>
      <p className="text-base text-lighten-400">
        그룹 설정에서 변경 가능합니다.
      </p>
    </div>
  );
};

export default CreateGroupStep1;
