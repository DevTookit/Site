/*svg */
import Add from '@svg/icon_add.svg?react';
import AddCircle from '@svg/icon_add_circle.svg?react';
import Edit from '@svg/icon_edit.svg?react';
import ExploreRounded from '@svg/icon_explore_rounded.svg?react';
import FolderRounded from '@svg/icon_folder_rounded.svg?react';
import All from '@svg/icon_all.svg?react';
/*components*/
import useContextMenuStore from '@/shared/store/contextStore';
import ContextMenu from '@/shared/ui/ContextMenu';
import CreateFolderModal from '@/features/category/modal/CreateFolder';
import { useState } from 'react';
import CategoryDropdown from '@/features/category/Dropdown';
/* hook */
import useLayout from '@/shared/hooks/useLayout';

import { Link } from 'react-router-dom'; // 라우팅 라이브러리에 따라 변경 가능

const GroupSideBar: React.FC = () => {
  const [createFolderIsOpen, setCreateFolderIsOpen] = useState(false);
  const { setCgryModalIsOpen } = useLayout();

  const { x, y, isVisible, showContextMenu, hideContextMenu } =
    useContextMenuStore();
  const options = [
    {
      label: '카테고리 편집',
      onClick: () => setCgryModalIsOpen(true),
      className: '',
    },
    {
      label: '하위 폴더 생성',
      onClick: () => setCreateFolderIsOpen(true),
      className: '',
    },
    {
      label: '카테고리 복제',
      onClick: () => alert('카테고리 복제'),
      className: '',
    },
    {
      label: '카테고리 삭제',
      onClick: () => alert('카테고리 삭제'),
      className: 'text-error',
    },
  ];

  return (
    <>
      <CreateFolderModal
        isOpen={createFolderIsOpen}
        setIsOpen={setCreateFolderIsOpen}
      />

      <aside
        className="flex w-[280px] flex-col bg-darken-300 p-5 text-gray-200"
        onClick={hideContextMenu}
      >
        <div className="mb-3 flex">
          <div className="mr-2 h-6 w-6 rounded-[4px] bg-error">
            {/* <img src="" alt="프로필 이미지" /> */}
          </div>
          <h4>DEV.TOOLKIT</h4>
        </div>
        <div className="mb-5 flex items-center rounded-md bg-primary p-[10px]">
          <img
            src="/assets/img/login_developer.jpg"
            alt="User Profile"
            className="mr-3 h-10 w-10 rounded-full"
          />
          <div className="flex-1">
            <p className="text-[10px] text-lighten-400">채널 관리자</p>
            <p className="text-xl font-medium text-[#D2D3D3]">우영우</p>
          </div>
          <button>
            <Edit className="h-5 w-5" />
          </button>
        </div>
        <div className="mb-[35px] flex gap-1">
          <button className="">
            <AddCircle className="h-10 w-10" />
          </button>
          <button className="">
            <ExploreRounded className="h-10 w-10 text-brand" />
          </button>
        </div>
        {/* Category List */}
        <div className="mb-2 flex justify-between">
          <p className="text-lg font-medium text-[#B4B5B5]">category</p>
          <button onClick={() => setCgryModalIsOpen(true)}>
            <Add />
          </button>
        </div>
        <div className="flex-1 overflow-x-auto text-sm text-gray-400">
          <ul className="flex flex-col">
            <li className="mb-2 flex h-10 cursor-pointer rounded-lg bg-primary p-2">
              <All className="mr-[10px]" />
              <span className="block flex-1 overflow-hidden text-ellipsis text-nowrap text-base text-[#D2D3D3]">
                전체보기
              </span>
            </li>
            {[1, 2, 3].map(() => {
              return (
                <CategoryDropdown
                  title={'임시 카테고리'}
                  onContextMenu={(e) => {
                    e.preventDefault(); // 기본 브라우저 컨텍스트 메뉴 막기
                    e.stopPropagation(); // 이벤트 전파 방지
                    showContextMenu(e.clientX, e.clientY);
                  }}
                >
                  <CategoryDropdown
                    title={'임시 카테고리'}
                    onContextMenu={(e) => {
                      e.preventDefault(); // 기본 브라우저 컨텍스트 메뉴 막기
                      e.stopPropagation(); // 이벤트 전파 방지
                      showContextMenu(e.clientX, e.clientY);
                    }}
                  >
                    <CategoryDropdown
                      title={'임시 카테고리'}
                      onContextMenu={(e) => {
                        e.preventDefault(); // 기본 브라우저 컨텍스트 메뉴 막기
                        e.stopPropagation(); // 이벤트 전파 방지
                        showContextMenu(e.clientX, e.clientY);
                      }}
                    >
                      <Link
                        to="/group/list"
                        className="relative flex h-10 w-full cursor-pointer rounded-lg bg-primary p-2"
                      >
                        <FolderRounded className="mr-[10px]" />
                        <span
                          className="block flex-1 overflow-hidden text-ellipsis text-nowrap text-base text-[#D2D3D3]"
                          title={'안녕하세요'}
                        >
                          {'안녕하세요'}
                        </span>
                      </Link>
                    </CategoryDropdown>
                  </CategoryDropdown>
                </CategoryDropdown>
              );
            })}
          </ul>
        </div>
        <ContextMenu x={x} y={y} isVisible={isVisible} options={options} />
      </aside>
    </>
  );
};

export default GroupSideBar;
