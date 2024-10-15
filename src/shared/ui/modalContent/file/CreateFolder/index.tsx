import { ChangeEvent, DragEvent } from 'react';
import Document from '@svg/icon_document.svg?react';
import Close from '@svg/icon_close.svg?react';
import { formatBytes } from '@/shared/util/common';

interface CreateFolderProps {
  setFolderName: (folderName: string) => void;
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  files: File[];
  isDragOver: boolean;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (e: DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
  handleSave: () => void;
}

const CreateFolder: React.FC<CreateFolderProps> = ({
  setFolderName,
  handleCheckboxChange,
  files,
  isDragOver,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  handleSave,
}) => {
  return (
    <div className="rounded-t bg-primary p-10 pb-0">
      <h4 className="mb-[30px] text-xl font-bold text-lighten-500">폴더</h4>
      <span className="mb-2 flex items-center text-base text-lighten-300">
        <input
          type="checkbox"
          className="mr-2"
          onChange={handleCheckboxChange}
        />
        폴더 생성 후 업로드
      </span>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFolderName(e.target.value)
        }
        placeholder="폴더명을 설정해주세요."
        className="mb-5 h-12 w-full rounded-md border-2 border-solid border-lighten-100 bg-lighten-100 p-4 text-lg text-lighten-500 placeholder:text-base placeholder:text-lighten-300"
      />
      <span className="mb-2 flex items-center text-base text-lighten-300">
        파일 업로드
      </span>
      <div
        className={`relative mb-6 h-[200px] rounded-md bg-lighten-100 ${isDragOver && 'border border-brand'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {files?.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center">
            <span className="text-lg font-medium text-lighten-200">
              파일을 이 곳으로 드래그 해주세요.
              <br />
              5MB 미만 파일만 업로드 됩니다.
            </span>
            <p className="mt-2 w-40 rounded border-[1px] border-lighten-300 py-2 text-center text-lg text-lighten-400">
              파일 업로드
            </p>
          </div>
        ) : (
          <ul>
            {files?.map((el, idx) => {
              return (
                <li
                  key={`file_list_${idx}`}
                  className="mb-1 flex items-center pr-[10px]"
                >
                  <Document className="h-[50px] w-[50px]" />
                  <div className="flex flex-1 flex-col items-start justify-between">
                    <span className="text-lg font-bold text-lighten-600">
                      {el.name}
                    </span>
                    <span className="text-base text-lighten-600">
                      {formatBytes(el.size)}
                    </span>
                  </div>
                  <button>
                    <Close />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="flex rounded-b pb-5">
        <button
          className="h-10 w-full rounded-md bg-brand text-base font-bold text-lighten-600"
          onClick={() => handleSave()}
        >
          생성
        </button>
      </div>
    </div>
  );
};

export default CreateFolder;
