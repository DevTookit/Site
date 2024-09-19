import SearchExploreRounded from '@svg/icon_search_explore_rounded.svg?react';
import ChevronRightRounded from '@svg/icon_chevron_right_rounded.svg?react';
interface ButtonProps {
  active: boolean;
  onClickFn: () => void;
}

const ExplorePageBtn: React.FC<ButtonProps> = ({ active, onClickFn }) => {
  return (
    <button
      className={`flex h-20 w-[440px] items-center justify-start rounded-lg bg-primary p-4 hover:bg-gray-600 ${active && 'shadow-onboarding-btn border-[1px] border-solid border-brand'}`}
    >
      <SearchExploreRounded className="mr-5 h-10 w-10" />
      <div className="flex flex-1 flex-col items-start">
        <p className="text-lg text-[#B4B5B5]">첫 게시글 작성하기</p>
        <span className="text-base text-lighten-300">
          파일, 글, 코드를 모아 아카이빙하기
        </span>
      </div>
      {active && <ChevronRightRounded onClick={onClickFn} />}
    </button>
  );
};

export default ExplorePageBtn;
