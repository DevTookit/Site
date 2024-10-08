import React, { ReactNode } from 'react';

interface ModalLayoutProps {
  children: ReactNode;
  isOpen: boolean;
  btnOption: {
    closeFn?: () => void;
    lBtnNm?: string;
    lBtnFn?: () => void;
    rBtnNm?: string;
    rBtnFn?: () => void;
  };
}

const ModalLayout: React.FC<ModalLayoutProps> = ({
  children,
  isOpen,
  btnOption,
}) => {
  if (!isOpen) return null; // 모달이 열리지 않았으면 null 반환 (렌더링 안함)

  return (
    <div
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-[#000000] bg-opacity-[68%]"
      onClick={btnOption.closeFn}
    >
      <div
        className="relative max-h-full w-full max-w-[520px]"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative rounded-lg bg-primary shadow dark:bg-gray-700">
          {children}
          {(btnOption.lBtnNm || btnOption.rBtnNm) && (
            <div className="flex items-end justify-between rounded-b px-10 pb-5">
              <button
                onClick={btnOption.lBtnFn}
                className="border-b-[1px] border-solid border-lighten-300 text-lighten-300"
              >
                {btnOption.lBtnNm}
              </button>
              <button
                onClick={btnOption.rBtnFn}
                className="h-10 min-w-[90px] rounded-md bg-brand text-base font-bold text-lighten-600"
              >
                {btnOption.rBtnNm}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
