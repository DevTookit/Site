/* component */
import Breadcrumb from '@/shared/ui/group/BreadCrumb';
import UploadButton from '@/shared/ui/group/button/upload';
import ShowEmptyFile from '@/shared/ui/group/EmptyFile';
import CreateFileModal from '@/features/group/modal/CreateFile';
import { useState } from 'react';

/* hook */

const GroupList: React.FC = () => {
  const [fileModalisOpen, setFileModalisOpen] = useState(false);
  const [list, setList] = useState<number[]>([]);

  const notEmpty = () => {
    setList([1, 2, 3]);
  };
  return (
    <>
      <CreateFileModal
        isOpen={fileModalisOpen}
        setIsOpen={setFileModalisOpen}
      />
      <div className="flex w-full flex-1 flex-col">
        <div className="mb-1 mt-6 flex justify-start">
          <Breadcrumb items={['CSS', 'Animation', 'Modal']} />
          <button
            className="ml-10 flex h-10 items-center rounded-lg bg-black p-4 text-white"
            onClick={notEmpty}
          >
            notEmpty(누르면 리스트 노출)
          </button>
        </div>
        <h4 className="text-[32px] font-bold text-lighten-500">{'Modal'}</h4>
        <div className="mb-[6px] mt-6 flex justify-between">
          <UploadButton onClickFn={() => setFileModalisOpen(true)} />
        </div>
        <div className="flex flex-1 items-center justify-center">
          {list.length === 0 ? (
            <ShowEmptyFile />
          ) : (
            <div className="mt-3 flex h-full w-full flex-col items-start">
              <ul className="flex">
                <li className="flex h-[42px] w-[124px] items-center justify-center rounded-t-xl bg-[#D9D9D9] text-lg font-bold text-lighten-400">
                  전체
                </li>
                <li className="flex h-[42px] w-[124px] items-center justify-center rounded-tr-xl bg-darken-100 text-lg font-bold text-lighten-400">
                  폴더
                </li>
                <li className="flex h-[42px] w-[124px] items-center justify-center rounded-tr-xl bg-darken-200 text-lg font-bold text-lighten-400">
                  코드
                </li>
                <li className="flex h-[42px] w-[124px] items-center justify-center rounded-tr-xl bg-darken-300 text-lg font-bold text-lighten-400">
                  게시판
                </li>
              </ul>
              <ul>
                <li></li>
                <li>유형</li>
                <li>제목</li>
                <li>작성자</li>
                <li>업로드</li>
                <li>용량</li>
                <li>북마크</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GroupList;
