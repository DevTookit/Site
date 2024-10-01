import RadioGroup from '@/shared/ui/Radio';

interface CreateGroupStep1rops {
  categoryName: string;
  setCategoryName: (categoryName: string) => void;
  visibility: string;
  setVisibility: (visibility: string) => void;
}

const CreateCategory: React.FC<CreateGroupStep1rops> = ({
  categoryName,
  setCategoryName,
  visibility,
  setVisibility,
}) => {
  return (
    <div className="rounded-t bg-primary p-10 pb-0">
      <h4 className="mb-[30px] text-xl font-bold text-lighten-500">
        카테고리 편집
      </h4>
      <span className="mb-2 inline-block text-base text-lighten-300">
        카테고리 이름
      </span>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCategoryName(e.target.value)
        }
        value={categoryName}
        placeholder="카테고리 이름을 설정해주세요."
        className="mb-5 h-12 w-full rounded-md border-2 border-solid border-lighten-100 bg-lighten-100 p-4 text-lg text-lighten-500 placeholder:text-base placeholder:text-lighten-300"
      />
      <span className="mb-2 inline-block text-base text-lighten-300">
        카테고리 범위
      </span>
      <RadioGroup className="mb-[70px] flex gap-4">
        <RadioGroup.Button
          name="visibleYn"
          id="visible-false"
          label="프라이빗 카테고리"
          isSelected={visibility === 'visible-false'}
          onChange={setVisibility}
        />
        <RadioGroup.Button
          name="visibleYn"
          id="visible-true"
          label="퍼블릭 카테고리"
          isSelected={visibility === 'visible-true'}
          onChange={setVisibility}
        />
      </RadioGroup>
    </div>
  );
};

export default CreateCategory;
