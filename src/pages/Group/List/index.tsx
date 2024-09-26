/* component */
import Breadcrumb from '@/shared/ui/group/BreadCrumb';
import UploadButton from '@/shared/ui/group/button/upload';
import ShowEmptyFile from '@/shared/ui/group/EmptyFile';
import CreateFileModal from '@/features/group/modal/CreateFile';
import { useState } from 'react';

/* hook */

const GroupList: React.FC = () => {
  const [fileModalisOpen, setFileModalisOpen] = useState(false);
  return (
    <>
      <CreateFileModal
        isOpen={fileModalisOpen}
        setIsOpen={setFileModalisOpen}
      />
      <div className="flex w-full flex-1 flex-col">
        <div className="mb-1 mt-6 flex justify-start">
          <Breadcrumb items={['CSS', 'Animation', 'Modal']} />
        </div>
        <h4 className="text-[32px] font-bold text-lighten-500">{'Modal'}</h4>
        <div className="mb-[6px] mt-6 flex justify-between">
          <UploadButton onClickFn={() => setFileModalisOpen(true)} />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <ShowEmptyFile />
        </div>
      </div>
    </>
  );
};

export default GroupList;
