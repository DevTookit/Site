import CatetoryRouned from '@svg/icon_catetory_rouned.svg?react';
import ChevronRightRounded from '@svg/icon_chevron_right_rounded.svg?react';
interface ButtonProps {
  active: boolean;
  onClickFn: () => void;
}

const EditCategoryBtn: React.FC<ButtonProps> = ({ active, onClickFn }) => {
  return (
    <button
      className={`flex h-20 w-[440px] items-center justify-start rounded-lg bg-primary p-4 hover:bg-gray-600 ${active && 'shadow-onboarding-btn border-[1px] border-solid border-brand'}`}
    >
      <CatetoryRouned className="mr-5 h-10 w-10" />
      <div className="flex flex-1 flex-col items-start">
        <p className="text-lg text-[#B4B5B5]">카테고리 수정하기</p>
        <span className="text-base text-lighten-300">
          카테고리를 분류해 파일정리하기
        </span>
      </div>
      {active && <ChevronRightRounded onClick={onClickFn} />}
    </button>
  );
};

export default EditCategoryBtn;
