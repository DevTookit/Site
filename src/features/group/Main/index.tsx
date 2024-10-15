/* svg */
import ErrorRoudned from '@svg/icon_error_rounded.svg?react';
import Menu from '@svg/icon_menu.svg?react';
import BookmarkActive from '@svg/icon_bookmark_active.svg?react';
import File from '@svg/icon_file.svg?react';
import Folder from '@svg/icon_folder.svg?react';
/* hook */
import useLayout from '@/shared/hooks/useLayout';
import { useEffect, useState } from 'react';

/* api */
import groupApi from '@/shared/api/groupApi';
import bookmarkApi from '@/shared/api/bookmarkApi';

import { Log } from '@/shared/types/groupType';
import { formatTimeAgo } from '@/shared/util/common';
import { BookmarkResponse } from '@/shared/types/bookmark';

const GroupMain: React.FC = () => {
  const { data } = useLayout();

  const [logs, setLogs] = useState<Log[]>([]);
  const [bookmarks, setBookmarks] = useState<BookmarkResponse[]>([]);

  const init = async () => {
    Promise.all([
      groupApi.getGroupLogs(data.currentGroupTab?.id ?? 0).then((res) => {
        setLogs(res.logs);
      }),
      bookmarkApi.getBookmarks(data.currentGroupTab?.id ?? 0).then((res) => {
        setBookmarks(res);
      }),
    ]);
  };

  useEffect(() => {
    init();
  }, [data.currentGroupTab]);
  return (
    <div className="w-full flex-1">
      <div className="flex items-center text-sm">
        <span className="text-lighten-400 hover:underline">
          그룹 대시보드 &gt; {data.currentGroupTab?.name}
        </span>
      </div>
      <div className="mt-[10px] flex overflow-hidden rounded-lg bg-darken-200">
        <div className="mx-3 flex items-center">
          <ErrorRoudned className="mr-2" />
          <span className="text-lg font-medium text-lighten-500">공지</span>
        </div>
        <div className="flex flex-1 items-center bg-darken-100">
          <span className="flex-1 text-base text-lighten-400">
            Hey, guys! Assignment for this week 1 should be uploaded at Code
            files due to 24th , Oct 16:00!
          </span>
          <img
            className="mr-1 h-6 w-6 rounded-full"
            src={data.currentGroupTab?.img}
            alt="공지 작성자"
          />
          <span className="mr-8 text-base text-lighten-500">Jack</span>
          <span className="mr-6 text-sm text-lighten-300">24.09.27</span>
          <Menu />
        </div>
      </div>
      {/* <div className="relative mt-5 h-[300px] w-full overflow-hidden rounded-[20px] bg-black">
        <img
          className="h-full w-full"
          src={data.currentGroupTab?.img}
          alt="그룹 이미지"
        />
        <div className="absolute bottom-[30px] left-[30px]">
          <div className="mb-1 flex">
            <img
              className="mr-1 h-7 w-7 rounded-full"
              src={data.currentGroupTab?.img}
              alt="그룹 생성자 프로필 이미지"
            />
            <span className="text-2xl text-lighten-400">우인우</span>
          </div>
          <div className="mb-3">
            <p className="text-[32px] font-bold text-lighten-600">
              {data.currentGroupTab?.name}
            </p>
          </div>
          <span className="text-base text-lighten-400">
            {data.currentGroupTab?.description}
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
      </div> */}
      <div className="mt-3 flex gap-9">
        <div className="flex-1">
          <h4 className="mb-[14px] text-xl font-bold text-lighten-500">
            최근 게시물
          </h4>
          <ul className="flex flex-wrap gap-[3%]">
            <li className="mb-3 flex h-40 min-w-[30%] flex-1 flex-col items-center rounded-[10px] bg-darken-200">
              <Folder />
              <span className="text-base font-bold text-lighten-500">
                UI 아이콘.zip
              </span>
              <span className="text-sm text-lighten-300">1.2KB</span>
            </li>
            <li className="mb-3 flex h-40 min-w-[30%] flex-1 flex-col items-center rounded-[10px] bg-darken-200">
              <File />
              <span className="text-base font-bold text-lighten-500">
                문서.html
              </span>
              <span className="text-sm text-lighten-300">1.2KB</span>
            </li>
            <li className="mb-3 flex h-40 min-w-[30%] flex-1 flex-col items-center rounded-[10px] bg-darken-200">
              <File />
              <span className="text-base font-bold text-lighten-500">
                문서2.html
              </span>
              <span className="text-sm text-lighten-300">1.2KB</span>
            </li>
            <li className="mb-3 flex h-40 min-w-[30%] flex-1 flex-col items-center rounded-[10px] bg-darken-200">
              <Folder />
              <span className="text-base font-bold text-lighten-500">
                UI 아이콘.zip
              </span>
              <span className="text-sm text-lighten-300">1.2KB</span>
            </li>
            <li className="mb-3 flex h-40 min-w-[30%] flex-1 flex-col items-center rounded-[10px] bg-darken-200">
              <File />
              <span className="text-base font-bold text-lighten-500">
                문서.html
              </span>
              <span className="text-sm text-lighten-300">1.2KB</span>
            </li>
            <li className="mb-3 flex h-40 min-w-[30%] flex-1 flex-col items-center rounded-[10px] bg-darken-200">
              <File />
              <span className="text-base font-bold text-lighten-500">
                문서2.html
              </span>
              <span className="text-sm text-lighten-300">1.2KB</span>
            </li>
          </ul>
          <h4 className="mb-[14px] mt-6 text-xl font-bold text-lighten-500">
            북마크 목록
          </h4>
          <ul className="flex flex-wrap gap-[2%]">
            {bookmarks.map((el, index) => {
              return (
                <li
                  key={`bookmark_lst_${index}`}
                  className="mb-2 flex h-10 w-[48%] items-center justify-between rounded-lg bg-darken-200 px-3 py-2"
                >
                  <span className="overflow-hidden text-ellipsis text-nowrap text-base text-lighten-500">
                    {el.name}
                  </span>
                  <BookmarkActive />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="mb-[14px] text-xl font-bold text-lighten-500">로그</h4>
          <ul className="overflow-hidden rounded-[10px] bg-darken-200 p-[14px]">
            {logs?.map((el, index) => {
              return (
                <li
                  key={`logs_${index}`}
                  className={`bg-darken-200 p-3 ${index !== 2 && 'border-b-[1px] border-primary'}`}
                >
                  <div className="flex items-center">
                    <img
                      src={el.writerImg}
                      className="mr-2 h-6 w-6 rounded-full"
                    />
                    <div className="flex flex-1 flex-col">
                      <p className="flex justify-between text-base text-lighten-400">
                        {el.writerName}
                        <span className="text-sm text-lighten-200">
                          {formatTimeAgo(el.createdAt)}
                        </span>
                      </p>
                      <span className="text-sm text-lighten-500"></span>
                    </div>
                  </div>
                  <p className="ml-7 mt-2 text-base font-medium text-lighten-500">
                    "{el.contentName}"{' '}
                    {el.type === 'BOARD' || el.type === 'CODE'
                      ? '게시물이 등록되었습니다.'
                      : '파일이 업로드되었습니다.'}
                  </p>
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
