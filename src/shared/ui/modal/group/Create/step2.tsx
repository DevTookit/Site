import Radio from '@/shared/ui/Radio';
import { useState } from 'react';

interface CreateGroupStep1rops {
  setVisibility: (visibility: boolean) => void;
}

const CreateGroupStep1: React.FC<CreateGroupStep1rops> = () => {
  const [isSelected, setIsSelected] = useState('1');
  return (
    <div className="h-[200px] bg-primary">
      <ul>
        <Radio
          name="visibleYn"
          id="visible-1"
          label="개인 그룹"
          isSelected={isSelected === 'visible-1'}
          onChange={setIsSelected}
        />
        <Radio
          name="visibleYn"
          id="visible-2"
          label="공개 그룹"
          isSelected={isSelected === 'visible-2'}
          onChange={setIsSelected}
        />
      </ul>
    </div>
  );
};

export default CreateGroupStep1;
