import RadioGroup from '@/shared/ui/Radio';

interface CreateGroupStep1rops {
  setFolderName: (folderName: string) => void;
  folderOption: string;
  setFolderOption: (folderOption: string) => void;
}

const CreateCategory: React.FC<CreateGroupStep1rops> = ({
  setFolderName,
  folderOption,
  setFolderOption,
}) => {
  return (
    <div className="rounded-t bg-primary p-10 pb-0">
      <h4 className="mb-[30px] text-xl font-bold text-lighten-500">
        하위 폴더 생성
      </h4>
      <span className="mb-2 inline-block text-base text-lighten-300">
        폴더 이름
      </span>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFolderName(e.target.value)
        }
        placeholder="이름을 설정해주세요."
        className="mb-5 h-12 w-full rounded-md border-2 border-solid border-lighten-100 bg-lighten-100 p-4 text-lg text-lighten-500 placeholder:text-base placeholder:text-lighten-300"
      />
      <span className="mb-2 inline-block text-base text-lighten-300">
        폴더 설정
      </span>
      <RadioGroup className="mb-10 flex flex-col gap-2">
        <RadioGroup.Button
          name="visibleYn"
          id="MENU"
          label="카테고리 기능"
          dscr="폴더를 분류할 수 있는 카테고리 역할입니다."
          isSelected={folderOption === 'MENU'}
          onChange={setFolderOption}
        />
        <RadioGroup.Button
          name="visibleYn"
          id="REPOSITORY"
          label="폴더 기능"
          dscr="파일과 코드를 저장 할 수 있는 저장소 역할입니다."
          isSelected={folderOption === 'REPOSITORY'}
          onChange={setFolderOption}
        />
      </RadioGroup>
    </div>
  );
};

export default CreateCategory;
