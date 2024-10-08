/* svg */
import Person from '@svg/icon_person.svg?react';
import BookmarkActive from '@svg/icon_bookmark_active.svg?react';
/* hook */
import useLayout from '@/shared/hooks/useLayout';
const GroupMain: React.FC = () => {
  const { data } = useLayout();
  return (
    <div className="w-full flex-1">
      <div className="flex items-center text-sm">
        <span className="text-lighten-400 hover:underline">
          그룹 대시보드 &gt; {data.currentGroupTab?.name}
        </span>
      </div>
      <div className="relative mt-5 h-[300px] w-full overflow-hidden rounded-[20px] bg-black">
        <img className="h-full w-full" src="" alt="그룹 이미지" />
        <div className="absolute bottom-[30px] left-[30px]">
          <div className="mb-1 flex">
            <img
              className="mr-1 h-7 w-7 rounded-full"
              src=""
              alt="그룹 생성자 프로필 이미지"
            />
            <span className="text-2xl text-lighten-400">Jack F. Eron</span>
          </div>
          <div className="mb-3">
            <p className="text-[32px] font-bold text-lighten-600">
              Junior Coders
            </p>
          </div>
          <span className="text-base text-lighten-400">
            We’re gathering to study as Junior Developers!
          </span>
        </div>
        <div className="absolute bottom-[30px] right-[30px] flex">
          <Person />
          <span className="mr-[6px] text-sm text-lighten-600">24</span>
          <ul className="flex">
            {[1, 2, 3, 4, 5].map((el, idx) => {
              return (
                <li
                  style={{
                    transform: `translateX(-${12 * idx}px)`,
                    zIndex: 5 - idx,
                  }}
                  key={`usr_lst_${idx}`}
                >
                  <img
                    className={`h-[30px] w-[30px] rounded-full bg-white`}
                    src=""
                    alt="그룹 내 유저 이미지"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mt-3 flex gap-9">
        <div className="flex-1">
          <h4 className="mb-[14px] text-xl font-bold text-lighten-500">
            최근 게시물
          </h4>
          <ul className="flex gap-3">
            <li className="h-40 flex-1 rounded-[10px] bg-darken-200"></li>
            <li className="h-40 flex-1 rounded-[10px] bg-darken-200"></li>
            <li className="h-40 flex-1 rounded-[10px] bg-darken-200"></li>
          </ul>
          <h4 className="mb-[14px] mt-6 text-xl font-bold text-lighten-500">
            북마크 목록
          </h4>
          <ul className="flex flex-wrap gap-[2%]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, index) => {
              return (
                <li
                  key={`bookmark_lst_${index}`}
                  className="mb-2 flex h-10 w-[48%] items-center justify-between rounded-lg bg-darken-200 px-3 py-2"
                >
                  <span className="overflow-hidden text-ellipsis text-nowrap text-base text-lighten-500">
                    Java Script 코딩의 이해-2-_240
                  </span>
                  <BookmarkActive />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="mb-[14px] text-xl font-bold text-lighten-500">로그</h4>
          <ul className="overflow-hidden rounded-[10px]">
            {[1, 2, 3].map((el, index) => {
              return (
                <li
                  key={el}
                  className={`bg-darken-200 p-5 ${index !== 2 && 'border-b-2 border-lighten-100'}`}
                >
                  <div className="flex items-center">
                    <img src="" className="h-10 w-10 rounded-full" />
                    <div className="flex flex-1 flex-col">
                      <p className="text-lg font-bold text-lighten-600">
                        Daniel J
                      </p>
                      <span className="text-sm text-lighten-500">
                        Front-end Dev.
                      </span>
                    </div>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-lighten-100"></button>
                  </div>
                  <div className="mb-3 mt-4 rounded-lg bg-primary p-[14px]">
                    <p className="text-xs text-lighten-600">
                      hello everyone! Good evening. Today, I would like to share
                      and resolve errors I found while coding the commerce
                      payment process.
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
      </div>
    </div>
  );
};

export default GroupMain;
