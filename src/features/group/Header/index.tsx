/*svg */
import AlarmCircleRounded from '@svg/icon_alarm_circle_rounded.svg?react';
import MypageCircleRounded from '@svg/icon_mypage_circle_rounded.svg?react';
import SearchRounded from '@svg/icon_search_rounded.svg?react';
/*components*/

const GroupHeader = () => {
  return (
    <>
      <div className="mb-5 flex w-full items-center justify-between">
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
    </>
  );
};

export default GroupHeader;
