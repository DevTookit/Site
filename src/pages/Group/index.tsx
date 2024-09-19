/*svg */
import AlarmCircleRounded from '@svg/icon_alarm_circle_rounded.svg?react';
import MypageCircleRounded from '@svg/icon_mypage_circle_rounded.svg?react';
import SearchRounded from '@svg/icon_search_rounded.svg?react';
import Edit from '@svg/icon_edit.svg?react';
import Add from '@svg/icon_add.svg?react';
import AddCircle from '@svg/icon_add_circle.svg?react';
import ExploreRounded from '@svg/icon_explore_rounded.svg?react';
import FolderRounded from '@svg/icon_folder_rounded.svg?react';
import ArrowDownRounded from '@svg/icon_arrow_chevron_down_rounded.svg?react';
/* onboarding-btn */
import CreateGroupBtn from '@/shared/ui/onboarding/Button/CreateGroup';
import EditCategoryBtn from '@/shared/ui/onboarding/Button/EditCategory';
import WritePostBtn from '@/shared/ui/onboarding/Button/WritePost';
import ExplorePageBtn from '@/shared/ui/onboarding/Button/ExplorePage';

const Group = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
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

      {/* Main Content Area */}
      <main className="flex flex-1 flex-grow flex-col items-center justify-between bg-lighten-100 px-10 pt-[60px]">
        {/* Search Bar */}
        <div className="flex w-full items-center justify-between">
          <label className="relative mr-10 w-full max-w-[500px]">
            <input
              type="text"
              className="w-full rounded-[10px] bg-lighten-200 p-3 pr-10 text-white placeholder-lighten-400"
              placeholder="검색어를 입력해주세요."
            />
            <button>
              <SearchRounded className="absolute right-[12px] top-[12px]" />
            </button>
          </label>

          <div className="flex gap-5 text-lighten-400">
            <button className="">
              <AlarmCircleRounded className="h-9 w-9" />
            </button>
            <button className="">
              <MypageCircleRounded className="h-9 w-9" />
            </button>
          </div>
        </div>
        {/* Welcome Section */}
        <section className="mb-20">
          <h1 className="mb-3 text-[32px] font-bold text-[#D2D3D3]">
            환영합니다, 영우님!
          </h1>
          <p className="mb-[30px] text-base text-lighten-400">
            영우님만을 위한 새로운 그룹을 만들어 데브툴킷을 100% 활용해보세요!
          </p>

          {/* Action Buttons */}
          <div className="space-y-[10px]">
            <CreateGroupBtn active={true} />
            <EditCategoryBtn active={false} />
            <WritePostBtn active={false} />
            <ExplorePageBtn active={false} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Group;
