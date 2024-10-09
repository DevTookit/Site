import React from 'react';
import useLoadingStore from '@/shared/store/loading';
/* svg */
import IconLoading1 from '@svg/icon_loading1.svg?react';
import IconLoading2 from '@svg/icon_loading2.svg?react';
import IconLoading3 from '@svg/icon_loading3.svg?react';
import IconLoading4 from '@svg/icon_loading4.svg?react';
/* css */
const Loading: React.FC = () => {
  const { isLoading } = useLoadingStore();

  if (!isLoading) return null; // 로딩 중이 아닐 때는 아무것도 렌더링하지 않음

  return (
    <div className="loader fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
      <div className="flex">
        <IconLoading1 className="dot h-[46px] w-[46px]" />
        <IconLoading3 className="dot h-[46px] w-[46px]" />
        <IconLoading2 className="dot h-[46px] w-[46px]" />
        <IconLoading4 className="dot h-[46px] w-[46px]" />
      </div>
      <span className="text-xl font-bold text-lighten-600">loading...</span>
    </div>
  );
};

export default Loading;
