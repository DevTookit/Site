/* svg */
import Bookmark from '@svg/icon_bookmark.svg?react';
import ExploreManual1 from '@svg/explore_manual_1.svg?react';
import ExploreManual2 from '@svg/explore_manual_2.svg?react';
import ExploreManual3 from '@svg/explore_manual_3.svg?react';
import ExploreManual4 from '@svg/explore_manual_4.svg?react';
import ExploreManual5 from '@svg/explore_manual_5.svg?react';
import ExploreManual6 from '@svg/explore_manual_6.svg?react';

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
import { useNavigate } from 'react-router-dom';

const GroupExplore: React.FC = () => {
  const navigate = useNavigate();
  const setLoading = useLoadingStore((state) => state.setLoading);
  const { data, setOnboardingStep } = useLayout();
  const { isOnBoardingComplete, setOnBoardingComplete } = useAuthStore();

  //? state
  const [hotGroupList, setHotGroupList] = useState<HotGroupResponse[]>([]);
  const [hotContentList, setHotContentList] = useState<HotContentResponse[]>(
    [],
  );

  const userTips: any = [
    {
      exploreManual: <ExploreManual1 />,
      title: '카테고리 꾸미기',
      description:
        '다양한 방법으로 내 그룹 카테고리 꾸미는 방법을 알려드리고 싶어요!',
    },
    {
      exploreManual: <ExploreManual2 />,
      title: '카테고리 꾸미기',
      description:
        '다양한 방법으로 내 그룹 카테고리 꾸미는 방법을 알려드리고 싶어요!',
    },
    {
      exploreManual: <ExploreManual3 />,
      title: '카테고리 꾸미기',
      description:
        '다양한 방법으로 내 그룹 카테고리 꾸미는 방법을 알려드리고 싶어요!',
    },
    {
      exploreManual: <ExploreManual4 />,
      title: '카테고리 꾸미기',
      description:
        '다양한 방법으로 내 그룹 카테고리 꾸미는 방법을 알려드리고 싶어요!',
    },
    {
      exploreManual: <ExploreManual5 />,
      title: '카테고리 꾸미기',
      description:
        '다양한 방법으로 내 그룹 카테고리 꾸미는 방법을 알려드리고 싶어요!',
    },
    {
      exploreManual: <ExploreManual6 />,
      title: '카테고리 꾸미기',
      description:
        '다양한 방법으로 내 그룹 카테고리 꾸미는 방법을 알려드리고 싶어요!',
    },
  ];

  const init = async () => {
    setLoading(true);
    if (!isOnBoardingComplete && data.onboardingStep === 4) {
      authApi.successOnboarding();
      setOnBoardingComplete(true);
      setOnboardingStep(5);
    }
    await Promise.all([
      groupApi.getHotGroupList().then((res) => {
        setHotGroupList(res);
      }),
      contentApi.getHotContents().then((res) => {
        setHotContentList(res);
      }),
    ]);
    setLoading(false);
  };

  useEffect(() => {
    if (data.onboardingStep < 4 && !isOnBoardingComplete) {
      alert('앗! 스텝에서 이탈하셨어요!');
      navigate(-1);
    } else {
      init();
    }
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
      <div className="flex gap-5">
        <div className="w-1/2">
          <p className="my-6 text-2xl font-bold text-lighten-500">
            트렌디 추천 게시물 ✍🏻
          </p>
          <ul className="custom-scrollbar flex max-h-[550px] flex-col flex-nowrap overflow-auto rounded-[10px]">
            {hotContentList.map((el, index) => {
              return (
                <li
                  key={`hot_content_${index}}`}
                  className={`w-full flex-1 bg-darken-200 p-5 ${index !== 9999 && 'border-b-2 border-lighten-100'}`}
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
        <div className="w-1/2">
          <p className="my-6 text-2xl font-bold text-lighten-500">
            사용 🐕🍯팁 🔎
          </p>
          <ul className="flex w-full flex-wrap gap-[3%] overflow-hidden rounded-[10px]">
            {userTips.map((el: any, index: number) => {
              return (
                <li
                  key={index}
                  className="h-[260px overflow-hidden] mb-[14px] flex max-w-[30%] flex-col rounded-[10px] bg-darken-200 px-[10px] pb-3 pt-5"
                >
                  {el.exploreManual}
                  <p className="mb-[10px] text-lg font-bold text-lighten-600">
                    {el.title}
                  </p>
                  <span className="mb-[10px] flex-1 text-sm text-lighten-500">
                    {el.description}
                  </span>
                  <div className="flex justify-end">
                    <button className="text-base font-medium text-brand">
                      Team Dev.
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GroupExplore;
