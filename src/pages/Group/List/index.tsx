/* svg */
import TypeCode from '@svg/icon_type_code.svg?react';
import TypeBoard from '@svg/icon_type_board.svg?react';
import TypeFolder from '@svg/icon_type_folder.svg?react';
import TypeFile from '@svg/icon_type_file.svg?react';
import Bookmark from '@svg/icon_bookmark.svg?react';
import BookmarkActive from '@svg/icon_bookmark_active.svg?react';
// import BookmarkOn from '@svg/icon_bookmark_on.svg?react';
import { format } from 'date-fns';

/* component */
import Breadcrumb from '@/shared/ui/group/BreadCrumb';
import UploadButton from '@/shared/ui/group/button/upload';
import ShowEmptyFile from '@/shared/ui/group/EmptyFile';
import CreateFileModal from '@/features/group/modal/CreateFile';
import { useEffect, useState } from 'react';
import useLayout from '@/shared/hooks/useLayout';
import contentApi from '@/shared/api/contentApi';
import { ContentResponse } from '@/shared/types/contentType';
import useLoadingStore from '@/shared/store/loading';
import bookmarkApi from '@/shared/api/bookmarkApi';
import { converterJson } from '@/shared/util/common';

/* hook */

const GroupList: React.FC = () => {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const { data } = useLayout();
  const [tab, setTab] = useState<'CODE' | 'BOARD' | 'FOLDER' | ''>('');
  const [fileModalisOpen, setFileModalisOpen] = useState(false);
  const [list, setList] = useState<any>([]);

  const onHandleTabBg = (tabIdx: number) => {
    const tabTypeIndex = {
      '': 0,
      FOLDER: 1,
      CODE: 2,
      BOARD: 3,
    };
    const bgs = [
      'bg-lighten-100',
      'bg-darken-100',
      'bg-darken-200',
      'bg-darken-300',
    ];
    return bgs[Math.abs(tabIdx - tabTypeIndex[tab])];
  };

  const handleBookmark = async (
    type: 'CODE' | 'BOARD' | 'FILE',
    contentId: number,
    bookmarkId: number | null,
    idx: number,
  ) => {
    if (data.currentRepository?.folderId && data.currentGroupTab?.id)
      if (!bookmarkId) {
        await bookmarkApi
          .createBookmark({
            groupId: data.currentGroupTab?.id,
            type: type,
            sectionId: data.currentRepository?.folderId,
            contentId: contentId,
          })
          .then((res) => {
            const copyList: ContentResponse[] = converterJson(list);
            copyList[idx].bookmarkId = res.bookmarkId;
            setList(copyList);
          });
      } else {
        await bookmarkApi
          .deleteBookmark(bookmarkId, data.currentGroupTab?.id)
          .then(() => {
            const copyList: ContentResponse[] = converterJson(list);
            copyList[idx].bookmarkId = null;
            setList(copyList);
          });
      }
  };

  const getList = async (tab: '' | 'CODE' | 'BOARD' | 'FOLDER') => {
    await contentApi
      .searchContent(data.currentGroupTab?.id ?? 0, tab)
      .then((res) => {
        setList(res);
      });
  };

  const getFolderContents = async (folderId: number) => {
    await contentApi
      .getFolderContents(
        data.currentGroupTab?.id ?? 0,
        data.currentRepository?.folderId ?? 0,
        folderId,
      )
      .then((res) => {
        setList(res.contents);
      });
  };
  const onClickTab = (tab: 'CODE' | 'BOARD' | '' | 'FOLDER') => {
    setLoading(true);
    setTab(tab);
    getList(tab);
    setLoading(false);
  };

  useEffect(() => {
    getList('');
  }, []);

  return (
    <>
      <CreateFileModal
        isOpen={fileModalisOpen}
        setIsOpen={setFileModalisOpen}
      />
      <div className="flex w-full flex-1 flex-col">
        <div className="mb-1 flex justify-start">
          <Breadcrumb
            items={
              (data.currentRepository?.depth1 ?? '') +
              (data.currentRepository?.depth2
                ? '|' + data.currentRepository?.depth2
                : '') +
              (data.currentRepository?.depth3
                ? '|' + data.currentRepository?.depth3
                : '')
            }
          />
        </div>
        <h4 className="text-[32px] font-bold text-lighten-600">
          {data.currentRepository?.name}
        </h4>
        {(data.currentRepository?.folderId ?? 0) > 0 ? (
          <div className="mt-6 flex justify-between">
            <UploadButton onClickFn={() => setFileModalisOpen(true)} />
          </div>
        ) : (
          <></>
        )}
        <div className="mt-[6px] flex flex-1 items-center justify-center">
          <div className="mt-3 flex h-full w-full flex-col items-start">
            <ul className="flex">
              <li
                onClick={() => onClickTab('')}
                className={`flex h-[42px] w-[124px] cursor-pointer items-center justify-center rounded-t-xl text-lg font-bold text-lighten-400 ${onHandleTabBg(0)}`}
              >
                전체
              </li>
              <li
                onClick={() => onClickTab('FOLDER')}
                className={`flex h-[42px] w-[124px] cursor-pointer items-center justify-center rounded-t-xl text-lg font-bold text-lighten-400 ${onHandleTabBg(1)}`}
              >
                폴더
              </li>
              <li
                onClick={() => onClickTab('CODE')}
                className={`flex h-[42px] w-[124px] cursor-pointer items-center justify-center rounded-t-xl text-lg font-bold text-lighten-400 ${onHandleTabBg(2)}`}
              >
                코드
              </li>
              <li
                onClick={() => onClickTab('BOARD')}
                className={`flex h-[42px] w-[124px] cursor-pointer items-center justify-center rounded-t-xl text-lg font-bold text-lighten-400 ${onHandleTabBg(3)}`}
              >
                게시판
              </li>
            </ul>
            <ul className="flex min-h-12 w-full bg-lighten-100">
              <li className="flex w-12 flex-shrink-0 items-center justify-center">
                <input
                  type="checkbox"
                  className="h-[17px] w-[17px] bg-lighten-500"
                />
              </li>
              <li className="flex flex-1 items-center justify-center text-lighten-400">
                유형
              </li>
              <li className="flex flex-[3] items-center justify-center text-lighten-400">
                제목
              </li>
              <li className="flex flex-1 items-center justify-center text-lighten-400">
                스킬
              </li>
              <li className="flex flex-1 items-center justify-center text-lighten-400">
                작성자
              </li>
              <li className="flex flex-1 items-center justify-center text-lighten-400">
                업로드
              </li>
              <li className="flex flex-1 items-center justify-center text-lighten-400">
                용량
              </li>
              <li className="flex w-20 items-center justify-center text-lighten-400">
                북마크
              </li>
            </ul>
            {list.length === 0 ? (
              <div className="flex h-full w-full items-center justify-center">
                <ShowEmptyFile />
              </div>
            ) : (
              <ul className="w-full">
                {list.map((el: any, idx: number) => {
                  return (
                    <li
                      key={`list_${el.contentId}_${idx}`}
                      className="h-16 w-full cursor-pointer border border-lighten-100 hover:bg-darken-100"
                      onDoubleClick={() => getFolderContents(el.contentId)}
                    >
                      <ul className="flex h-full">
                        <li className="flex w-12 flex-shrink-0 items-center justify-center">
                          <input
                            type="checkbox"
                            className="h-[17px] w-[17px] bg-lighten-500"
                          />
                        </li>
                        <li className="flex flex-1 items-center justify-center text-lighten-400">
                          {el.type === 'BOARD' ? (
                            <TypeBoard />
                          ) : el.type === 'CODE' ? (
                            <TypeCode />
                          ) : el.type === 'FOLDER' ? (
                            <TypeFolder />
                          ) : (
                            <TypeFile />
                          )}
                        </li>
                        <li className="flex flex-[3] items-center justify-start text-lg font-bold text-lighten-500">
                          {el.name}
                        </li>
                        <li className="flex flex-1 items-center justify-center text-lighten-400">
                          유형
                        </li>
                        <li className="flex flex-1 items-center justify-center text-lighten-400">
                          <img
                            src={el.writerImg}
                            className="mr-2 h-6 w-6 rounded-full border-2 border-lighten-500"
                          />
                          {el.writerName}
                        </li>
                        <li className="flex flex-1 items-center justify-center text-lighten-400">
                          {format(new Date(el.createdDate), 'yyyy.MM.dd')}
                        </li>
                        <li className="flex flex-1 items-center justify-center text-lighten-400">
                          {el?.size}
                        </li>
                        <li className="flex w-20 items-center justify-center text-lighten-400">
                          <button
                            onClick={() =>
                              handleBookmark(
                                el.type,
                                el.contentId,
                                el.bookmarkId,
                                idx,
                              )
                            }
                          >
                            {el.bookmarkId ? <BookmarkActive /> : <Bookmark />}
                          </button>
                        </li>
                      </ul>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupList;
