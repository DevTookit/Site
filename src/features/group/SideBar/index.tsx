/*svg */
import Add from '@svg/icon_add.svg?react';
import AddCircle from '@svg/icon_add_circle.svg?react';
import ArrowDownRounded from '@svg/icon_arrow_chevron_down_rounded.svg?react';
import Edit from '@svg/icon_edit.svg?react';
import ExploreRounded from '@svg/icon_explore_rounded.svg?react';
import FolderRounded from '@svg/icon_folder_rounded.svg?react';

const GroupSideBar = () => {
  return (
    <aside className="flex w-[280px] flex-col bg-darken-300 p-5 text-gray-200">
      <div className="mb-3 flex">
        <div className="bg-error mr-2 h-6 w-6 rounded-[4px]">
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
      <div className="text-sm text-gray-400">
        <div className="flex justify-between">
          <p className="mb-2 text-lg font-medium text-[#B4B5B5]">category</p>
          <button>
            <Add />
          </button>
        </div>
        <ul>
          <li className="flex h-10 cursor-pointer rounded-lg bg-primary p-2">
            <div className="flex flex-1 items-center">
              <FolderRounded className="mr-[10px]" />
              <span className="text-base text-[#D2D3D3]">임시 카테고리</span>
            </div>
            <ArrowDownRounded />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default GroupSideBar;
