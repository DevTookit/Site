import React from 'react';
import Upload from '@svg/icon_upload.svg?react';

interface UploadButtonProps {
  onClickFn: () => void; // 경로 아이템 목록
}

const UploadButton: React.FC<UploadButtonProps> = ({ onClickFn }) => {
  return (
    <button
      className="flex h-9 w-[86px] items-center justify-center rounded-[10px] bg-brand text-base font-medium text-lighten-500"
      onClick={onClickFn}
    >
      <Upload />
      업로드
    </button>
  );
};

export default UploadButton;
