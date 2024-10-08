/* svg */
import Bookmark from '@svg/icon_bookmark.svg?react';
import { useEffect } from 'react';
import useLoadingStore from '@/shared/store/loading';
// import BookmarkActive from '@svg/icon_bookmark_active.svg?react';
/* component */
// import GroupOnboarding from '@/features/group/Onboarding';

/* hook */
import useLayout from '@/shared/hooks/useLayout';
// import useAuthStore from '@/shared/store/authStore';

const GroupExplore: React.FC = () => {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const { setOnboardingStep } = useLayout();
  // const { userName, isOnBoardingComplete } = useAuthStore();
  useEffect(() => {
    setLoading(true);
    setOnboardingStep(5);
    setLoading(false);
  }, []);
  return (
    <div className="mb-5 flex w-full flex-1 flex-col">
      <div className="flex items-center text-sm">
        <span className="text-lighten-400 hover:underline">탐색페이지</span>
      </div>
      <h4 className="text-[32px] font-bold text-lighten-600">탐색페이지</h4>
      <p className="my-6 text-2xl font-bold text-lighten-500">
        최신 핫 그룹 🔥
      </p>
      <ul className="flex gap-[10px] overflow-x-auto scrollbar-hide">
        {[1, 2, 3, 4, 5].map((el) => {
          return (
            <li
              key={el}
              className="flex h-60 min-w-64 flex-col overflow-hidden rounded-[10px] bg-darken-200"
            >
              <img src="" alt="그룹 이미지" className="h-20 bg-white" />
              <div className="flex-1 p-[10px]">
                <div className="flex justify-between">
                  <img
                    src=""
                    alt=""
                    className="h-[26px] w-[26px] rounded-full border-[1px] border-lighten-600"
                  />
                  <div className="relative flex h-[26px] w-20 items-center justify-end rounded-full bg-lighten-100 p-1">
                    {[1, 2, 3].map((el, idx) => {
                      const leftPosition = `${4 + idx * 12}px`; // 동적으로 left 값을 계산
                      return (
                        <img
                          key={el}
                          src=""
                          alt=""
                          className={`border-1 absolute top-1 h-[16px] w-[16px] rounded-full border-[1px] border-lighten-600`}
                          style={{ left: leftPosition, zIndex: idx }} // style 속성으로 동적 left 적용
                        />
                      );
                    })}
                    <span className="text-[10px] text-lighten-600">+ 20</span>
                  </div>
                </div>
                <p className="mt-3 text-base font-bold text-lighten-600">
                  Junior Coders
                </p>
                <span className="line-clamp-2 overflow-hidden text-ellipsis text-[14px] text-lighten-400">
                  주니어 개발자들을 위한 코딩 커뮤니티 입니다. 매일 개발관련
                  지식을 보내드려요!
                </span>

                <div className="mt-2 flex justify-end">
                  <button className="rounded-lg bg-lighten-100 px-6 py-1 text-[14px] text-lighten-600">
                    가입
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="my-6 text-2xl font-bold text-lighten-500">
        트랜디 추천 게시물 ✍🏻
      </p>
      <ul className="w-6/12 overflow-hidden rounded-[10px]">
        {[1, 2, 3].map((el, index) => {
          return (
            <li
              key={el}
              className={`bg-darken-200 p-5 ${index !== 2 && 'border-b-2 border-lighten-100'}`}
            >
              <div className="flex items-center">
                <img src="" className="h-10 w-10 rounded-full" />
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold text-lighten-600">Daniel J</p>
                  <span className="text-sm text-lighten-500">
                    Front-end Dev.
                  </span>
                </div>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-lighten-100">
                  <Bookmark />
                </button>
              </div>
              <div className="mb-3 mt-4 rounded-lg bg-primary p-[14px]">
                <p className="text-xs text-lighten-600">
                  hello everyone! Good evening. Today, I would like to share and
                  resolve errors I found while coding the commerce payment
                  process.
                </p>
              </div>
              <div className="flex justify-end">
                <button className="h-6 w-36 rounded-[4px] bg-lighten-100 text-sm font-bold text-lighten-600">
                  원문 보기
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GroupExplore;
