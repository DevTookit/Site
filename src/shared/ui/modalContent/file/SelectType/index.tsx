import RadioGroup from '@/shared/ui/Radio';

interface FileSelectTypeProps {
  fileType: string;
  setFileType: (fileType: 'folder' | 'code' | 'post') => void;
}

const FileSelectType: React.FC<FileSelectTypeProps> = ({
  fileType,
  setFileType,
}) => {
  return (
    <div className="rounded-t bg-primary p-10 pb-0">
      <h4 className="mb-6 text-2xl font-bold text-lighten-500">
        카테고리 추가
      </h4>
      <span className="mb-2 inline-block text-lg text-lighten-300">
        유형 선택
      </span>
      <RadioGroup className="mb-[14px] flex flex-col gap-2">
        <RadioGroup.Button
          name="fileType"
          id="folder"
          label="폴더"
          dscr="파일을 원하는 폴더로 분류해 보관하세요"
          isSelected={fileType === 'folder'}
          onChange={() => setFileType('folder')}
        />
        <RadioGroup.Button
          name="fileType"
          id="code"
          label="코드"
          dscr="코드를 보관해보세요."
          isSelected={fileType === 'code'}
          onChange={() => setFileType('code')}
        />
        <RadioGroup.Button
          name="fileType"
          id="post"
          label="게시글"
          dscr="자유롭게 포스트해보세요."
          isSelected={fileType === 'post'}
          onChange={() => setFileType('post')}
        />
      </RadioGroup>
      <span className="mb-10 inline-block text-base text-lighten-200">
        언제든지 수정가능합니다.
      </span>
    </div>
  );
};

export default FileSelectType;
