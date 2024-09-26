import EmptyFile from '@svg/icon_empty_file.svg?react';
const ShowEmptyFile = () => {
  return (
    <div className="mb-10 flex flex-col items-center">
      <EmptyFile />
      <p className="text-lg font-bold text-lighten-400">
        아직 저장된 파일이 없네요
      </p>
      <span className="text-base text-lighten-300">
        업로드 버튼을 눌러 파일을 채워보세요.
      </span>
    </div>
  );
};

export default ShowEmptyFile;
