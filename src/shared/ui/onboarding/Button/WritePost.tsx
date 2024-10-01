import EditDocumentRounded from '@svg/icon_edit_document_rounded.svg?react';
import ChevronRightRounded from '@svg/icon_chevron_right_rounded.svg?react';
import CheckRounded from '@svg/icon_check_rounded.svg?react';
interface ButtonProps {
  state: 'check' | 'active' | '';
  onClickFn: () => void;
}

const WritePostBtn: React.FC<ButtonProps> = ({ state, onClickFn }) => {
  return (
    <button
      className={`flex h-20 w-[440px] items-center justify-start rounded-lg border-[1px] border-solid bg-primary p-4 hover:bg-gray-600 ${state === 'active' ? 'border-brand shadow-onboarding-btn' : 'border-lighten-100'}`}
      onClick={() => state === 'active' && onClickFn()}
    >
      <EditDocumentRounded className="mr-5 h-10 w-10" />
      <div className="flex flex-1 flex-col items-start">
        ㅈ<p className="text-lg text-[#B4B5B5]">첫 게시글 작성하기</p>
        <span className="text-base text-lighten-300">
          파일, 글, 코드를 모아 아카이빙하기
        </span>
      </div>
      {state === 'active' && <ChevronRightRounded />}
      {state === 'check' && <CheckRounded />}
    </button>
  );
};

export default WritePostBtn;
