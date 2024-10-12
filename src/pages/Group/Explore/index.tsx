/* svg */
import Bookmark from '@svg/icon_bookmark.svg?react';
import { useEffect, useState } from 'react';
import useLoadingStore from '@/shared/store/loading';
// import BookmarkActive from '@svg/icon_bookmark_active.svg?react';
/* component */
// import GroupOnboarding from '@/features/group/Onboarding';

/* hook */
import useLayout from '@/shared/hooks/useLayout';
import useAuthStore from '@/shared/store/authStore';
/* api */
import authApi from '@/shared/api/authApi';
import groupApi from '@/shared/api/groupApi';
import contentApi from '@/shared/api/contentApi';
import { HotGroupResponse } from '@/shared/types/groupType';
import { HotContentResponse } from '@/shared/types/contentType';

const GroupExplore: React.FC = () => {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const { setOnboardingStep } = useLayout();
  const { isOnBoardingComplete, setOnBoardingComplete } = useAuthStore();

  //? state
  const [hotGroupList, setHotGroupList] = useState<HotGroupResponse[]>([]);
  const [hotContentList, setHotContentList] = useState<HotContentResponse[]>(
    [],
  );

  const init = async () => {
    await Promise.all([
      groupApi.getHotGroupList().then((res) => {
        setHotGroupList(res);
      }),
      contentApi.getHotContents().then((res) => {
        setHotContentList(res);
      }),
    ]);
  };

  useEffect(() => {
    setLoading(true);
    if (!isOnBoardingComplete) {
      authApi.successOnboarding();
      setOnBoardingComplete(true);
      setOnboardingStep(5);
    }
    init();
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
        {hotGroupList.map((el, idx) => {
          return (
            <li
              key={`hot_list_${idx}`}
              className="flex h-60 min-w-64 flex-col overflow-hidden rounded-[10px] bg-darken-200"
            >
              <img
                src={el.groupImg}
                alt="그룹 이미지"
                className="h-20 bg-white"
              />
              <div className="flex-1 p-[10px]">
                <div className="flex justify-between">
                  <img
                    src={el.groupCreatorImg}
                    alt="그룹 생성자 이미지"
                    className="h-[26px] w-[26px] rounded-full border-[1px] border-lighten-600"
                  />
                  <div className="relative flex h-[26px] w-20 items-center justify-end rounded-full bg-lighten-100 p-1">
                    {el.groupUserImgs.map((userImg, idx) => {
                      const leftPosition = `${4 + idx * 12}px`; // 동적으로 left 값을 계산
                      return (
                        <img
                          key={`user_img_${idx}`}
                          src={userImg.img}
                          alt="그룹 내 유저 이미지"
                          className={`border-1 absolute top-1 h-[16px] w-[16px] rounded-full border-[1px] border-lighten-600`}
                          style={{ left: leftPosition, zIndex: idx }} // style 속성으로 동적 left 적용
                        />
                      );
                    })}
                    {el.groupUserCnt > 4 && (
                      <span className="text-[10px] text-lighten-600">
                        + {el.groupUserCnt - 3}
                      </span>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-base font-bold text-lighten-600">
                  {el.groupName}
                </p>
                <span className="line-clamp-2 overflow-hidden text-ellipsis text-[14px] text-lighten-400">
                  {el.groupDescription}
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
        트렌디 추천 게시물 ✍🏻
      </p>
      <ul className="flex flex-wrap gap-2 overflow-hidden rounded-[10px]">
        {hotContentList.map((el, index) => {
          return (
            <li
              key={`hot_content_${index}}`}
              className={`min-w-[40%] max-w-[50%] flex-1 bg-darken-200 p-5 ${index !== 9999 && 'border-b-2 border-lighten-100'}`}
            >
              <div className="flex items-center">
                <img
                  src={el.writerImg}
                  className="mr-2 h-10 w-10 rounded-full"
                />
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold text-lighten-600">
                    {el.writerName}
                  </p>
                  <span className="text-sm text-lighten-500">
                    web developer
                  </span>
                </div>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-lighten-100">
                  <Bookmark />
                </button>
              </div>
              <div className="mb-3 mt-4 rounded-lg bg-primary p-[14px]">
                <p className="text-xs text-lighten-600">{el.content}</p>
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
