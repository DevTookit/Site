import GroupAddRounded from '@svg/icon_group_add_rounded.svg?react';
import ChevronRightRounded from '@svg/icon_chevron_right_rounded.svg?react';
interface ButtonProps {
  active: boolean;
  onClickFn: () => void;
}

const CreateGroupBtn: React.FC<ButtonProps> = ({ active, onClickFn }) => {
  return (
    <button
      className={`flex h-20 w-[440px] items-center justify-start rounded-lg bg-primary p-4 hover:bg-gray-600 ${active && 'shadow-onboarding-btn border-[1px] border-solid border-brand'}`}
      onClick={() => active && onClickFn()}
    >
      <GroupAddRounded className="mr-5 h-10 w-10" />
      <div className="flex flex-1 flex-col items-start">
        <p className="text-lg text-[#B4B5B5]">그룹 생성하기</p>
        <span className="text-base text-lighten-300">
          나만의 그룹을 만들고 관리하기
        </span>
      </div>
      {active && <ChevronRightRounded />}
    </button>
  );
};

export default CreateGroupBtn;
