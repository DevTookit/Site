/* component */
import GroupOnboarding from '@/features/group/Onboarding';
import GroupSideBar from '@/features/group/SideBar';
/* lifecicle */
import { useState } from 'react';
/* provider */
import { CreateProvider } from '@/features/Provider';
/* svg */
import AlarmCircleRounded from '@svg/icon_alarm_circle_rounded.svg?react';
import MypageCircleRounded from '@svg/icon_mypage_circle_rounded.svg?react';
import SearchRounded from '@svg/icon_search_rounded.svg?react';
import CreateGroupModal from '@/features/group/modal/CreateGroup';

const Group: React.FC = () => {
  const [onboardingStep, setOnboardingStep] = useState(1); //온보딩 상태
  const [createGroupIsOpen, setCreateGroupIsOpen] = useState(false);

  return (
    <div className="flex h-screen w-full">
      <CreateGroupModal
        isOpen={createGroupIsOpen}
        setIsOpen={setCreateGroupIsOpen}
      />
      {/* Sidebar */}
      <GroupSideBar />

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

          <GroupOnboarding
            onboardingStep={onboardingStep}
            setOnboardingStep={setOnboardingStep}
            setCreateGroupIsOpen={setCreateGroupIsOpen}
          />
        </section>
      </main>
    </div>
  );
};

const GroupWrapper: React.FC = () => (
  <CreateProvider>
    <Group />
  </CreateProvider>
);

export default GroupWrapper;
