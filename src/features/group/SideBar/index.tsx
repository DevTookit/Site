/*svg */
import DevToolKit from '@svg/icon_dev_tool_kit.svg?react';
import Add from '@svg/icon_add.svg?react';
import AddCircle from '@svg/icon_add_circle.svg?react';
import Edit from '@svg/icon_edit.svg?react';
import ExploreRounded from '@svg/icon_explore_rounded.svg?react';
import FolderRounded from '@svg/icon_folder_rounded.svg?react';
import All from '@svg/icon_all.svg?react';
/*components*/
import useContextMenuStore from '@/shared/store/contextStore';
import ContextMenu from '@/shared/ui/ContextMenu';
import CreateFolderModal from '@/features/category/modal/CreateFolder';
import { useEffect, useState } from 'react';
import CategoryDropdown from '@/features/category/Dropdown';
/* hook */
import useLayout from '@/shared/hooks/useLayout';

import { Link, useLocation, useNavigate } from 'react-router-dom'; // 라우팅 라이브러리에 따라 변경 가능
import useAuthStore from '@/shared/store/authStore';

/* api */
import sectionApi from '@/shared/api/sectionApi';
import groupApi from '@/shared/api/groupApi';

const GroupSideBar: React.FC = () => {
  const location = useLocation(); // 현재 경로 가져오기
  const navigate = useNavigate();
  const { userImg, userJob, userName } = useAuthStore();
  const [groupTab, setGroupTab] = useState(0);
  const [createFolderIsOpen, setCreateFolderIsOpen] = useState(false);
  const [options, setOptions] = useState<
    {
      label: string;
      onClick: () => void;
      className: string;
    }[]
  >([]);
  const {
    setCgryModalIsOpen,
    data,
    setGroupModalIsOpen,
    setCurrentCategory,
    setCurrentGroupTab,
    setCurrentGroup,
    setCurrentCategoryList,
    setMyJoinedGroupList,
    setCurrentRepository,
  } = useLayout();
  const { x, y, isVisible, showContextMenu, hideContextMenu } =
    useContextMenuStore();

  const groupContextOptions = [
    {
      label: `[${data.currentGroup?.name}]`,
      onClick: () => {},
      className: '',
    },
    {
      label: '그룹 수정(미개발)',
      onClick: () => alert('그룹수정'),
      className: '',
    },
    {
      label: '그룹 삭제',
      onClick: () => {
        if (data.currentGroup?.id && confirm(` 그룹을 삭제하시겠습니까?`)) {
          groupApi.deleteGroup(data.currentGroup.id).then(() => {
            groupApi.getMyJoinedGroupList().then((res) => {
              setMyJoinedGroupList(res);
            });
          });
        }
      },
      className: '',
    },
  ];
  const categoryContextOptions = [
    {
      label: '카테고리 편집',
      onClick: () => setCgryModalIsOpen(true),
      className: '',
    },
    {
      label: '하위 폴더 생성',
      onClick: () => setCreateFolderIsOpen(true),
      className: '',
    },
    {
      label: '카테고리 복제',
      onClick: () => alert('카테고리 복제'),
      className: '',
    },
    {
      label: '카테고리 삭제',
      onClick: () => {
        if (
          data.currentCategory?.folderId &&
          confirm(
            `${data.currentCategory?.name}(${data.currentCategory.type})를 삭제하시겠습니까?`,
          )
        )
          sectionApi.deleteSection(data.currentCategory?.folderId).then(() => {
            onClickGroupTab(groupTab);
          });
      },
      className: 'text-error',
    },
  ];

  const getSections = async (groupId: number) => {
    await sectionApi.getSections(groupId).then(async (res) => {
      setCurrentCategoryList(res);

      if (res.length === 0) {
        await sectionApi.createSection({
          groupId: groupId,
          name: '임시 카테고리',
          isPublic: true,
          parentSectionId: null,
          type: 'MENU',
        });
        await getSections(groupId);
      }
    });
  };

  const onClickGroupTab = async (tab: number) => {
    setCurrentGroupTab(data.myJoinedGroupList[tab]);
    setGroupTab(tab);
    if (groupTab !== tab) {
      const groupId = data.myJoinedGroupList[tab].id;
      await getSections(groupId);
    }
    navigate('/group');
  };

  const goToExplore = () => {
    navigate('/group/explore');
  };

  useEffect(() => {
    if (data.myJoinedGroupList.length > 0) onClickGroupTab(0);
    setOptions(categoryContextOptions);
  }, [data.myJoinedGroupList]);

  return (
    <>
      <CreateFolderModal
        isOpen={createFolderIsOpen}
        setIsOpen={setCreateFolderIsOpen}
      />

      <aside
        className="flex w-[280px] flex-col bg-darken-300 p-5 text-gray-200"
        onClick={hideContextMenu}
      >
        <div className="mb-3 flex">
          <div className="mr-2 h-6 w-6 rounded-[4px] bg-error">
            <DevToolKit />
          </div>
          <h4>DEV.TOOLKIT</h4>
        </div>
        <div className="mb-5 flex items-center rounded-md bg-primary p-[10px]">
          <img
            src={userImg ?? ''}
            alt="User Profile"
            className="mr-3 h-10 w-10 rounded-full"
          />
          <div className="flex-1">
            <p className="text-[10px] text-lighten-400">{userJob}</p>
            <p className="text-xl font-medium text-[#D2D3D3]">{userName}</p>
          </div>
          <button>
            <Edit className="h-5 w-5" />
          </button>
        </div>
        <div className="mb-[35px] flex gap-1">
          {data.myJoinedGroupList.map((el, idx) => {
            return (
              <button
                key={`myjoingroup_${idx}`}
                className=""
                onClick={() => onClickGroupTab(idx)}
                onContextMenu={(e) => {
                  setOptions(groupContextOptions);
                  e.preventDefault(); // 기본 브라우저 컨텍스트 메뉴 막기
                  e.stopPropagation(); // 이벤트 전파 방지
                  setCurrentGroup(el); //카테고리 선택
                  showContextMenu(e.clientX, e.clientY);
                }}
              >
                <img
                  src={el.img}
                  className={`h-10 w-10 rounded-full border-4 ${groupTab === idx && 'border-brand'}`}
                />
              </button>
            );
          })}
          <button
            className="cursor-pointer"
            onClick={() => setGroupModalIsOpen(true)}
          >
            <AddCircle className="h-10 w-10" />
          </button>
          <button
            className={`rounded-full ${location.pathname === '/group/explore' ? 'bg-brand' : ''}`}
            onClick={goToExplore}
          >
            <ExploreRounded className="h-10 w-10 rounded-full" />
          </button>
        </div>
        {/* Category List */}
        <div className="mb-2 flex justify-between">
          <p className="text-lg font-medium text-[#B4B5B5]">category</p>
          <button
            onClick={() => {
              setCurrentCategory(null);
              setCgryModalIsOpen(true);
            }}
          >
            <Add />
          </button>
        </div>
        <div className="flex-1 overflow-x-auto text-sm text-gray-400">
          <ul className="flex flex-col">
            <li
              className={`mb-2 flex h-10 cursor-pointer rounded-lg p-2 ${data.currentRepository?.folderId === -1 ? 'bg-lighten-100' : 'bg-primary'}`}
            >
              <All className="mr-[10px]" />
              <Link
                to="/group/list"
                className="block flex-1 overflow-hidden text-ellipsis text-nowrap text-base text-[#D2D3D3]"
                onClick={() =>
                  setCurrentRepository({
                    folderId: -1,
                    name: '전체보기',
                    depth1: data.currentGroupTab?.name ?? '',
                    depth2: '전체보기',
                  })
                }
              >
                <span className="block flex-1 overflow-hidden text-ellipsis text-nowrap text-base text-[#D2D3D3]">
                  전체보기
                </span>
              </Link>
            </li>
            {data.currentCategoryList.length ? (
              data.currentCategoryList.map((el, idx) => {
                return (
                  <CategoryDropdown
                    key={`category_${idx}`}
                    title={el.name}
                    folderId={el.folderId}
                    onContextMenu={(e) => {
                      setOptions(categoryContextOptions);
                      e.preventDefault(); // 기본 브라우저 컨텍스트 메뉴 막기
                      e.stopPropagation(); // 이벤트 전파 방지
                      setCurrentCategory(el); //카테고리 선택
                      showContextMenu(e.clientX, e.clientY);
                    }}
                  >
                    {data.currentCategoryChildList['2depth']?.[
                      el.folderId
                    ]?.map((el2, idx) => {
                      return el2.type === 'MENU' ? (
                        <CategoryDropdown
                          key={`category2_${idx}`}
                          title={el2.name}
                          folderId={el2.folderId}
                          onContextMenu={(e) => {
                            setOptions(categoryContextOptions);
                            e.preventDefault(); // 기본 브라우저 컨텍스트 메뉴 막기
                            e.stopPropagation(); // 이벤트 전파 방지
                            setCurrentCategory(el2, el.folderId); //카테고리 선택
                            showContextMenu(e.clientX, e.clientY);
                          }}
                        >
                          {data.currentCategoryChildList['3depth']?.[
                            el2.folderId
                          ]?.map((el3, idx) => {
                            return el3.type === 'MENU' ? (
                              <CategoryDropdown
                                key={`category3_${idx}`}
                                title={el3.name}
                                folderId={el3.folderId}
                                onContextMenu={(e) => {
                                  setOptions(categoryContextOptions);
                                  e.preventDefault(); // 기본 브라우저 컨텍스트 메뉴 막기
                                  e.stopPropagation(); // 이벤트 전파 방지
                                  setCurrentCategory(el3, el2.folderId); //카테고리 선택
                                  showContextMenu(e.clientX, e.clientY);
                                }}
                              >
                                {data.currentCategoryChildList['4depth']?.[
                                  el3.folderId
                                ]?.map((el4, idx) => {
                                  return (
                                    <Link
                                      key={`repository_${idx}`}
                                      to="/group/list"
                                      className={`relative flex h-10 w-full cursor-pointer rounded-lg p-2 ${data.currentRepository?.folderId === el4.folderId ? 'bg-lighten-100' : 'bg-primary'}`}
                                      onClick={() =>
                                        setCurrentRepository({
                                          folderId: el4.folderId,
                                          name: el4.name,
                                          depth1: el.name,
                                          depth2: el2.name,
                                          depth3: el3.name,
                                        })
                                      }
                                    >
                                      <FolderRounded className="mr-[10px]" />
                                      <span
                                        className="block flex-1 overflow-hidden text-ellipsis text-nowrap text-base text-[#D2D3D3]"
                                        title={el4.name}
                                      >
                                        {el4.name}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </CategoryDropdown>
                            ) : (
                              <Link
                                key={`repository_${idx}`}
                                to="/group/list"
                                className="relative flex h-10 w-full cursor-pointer rounded-lg bg-primary p-2"
                              >
                                <FolderRounded className="mr-[10px]" />
                                <span
                                  className="block flex-1 overflow-hidden text-ellipsis text-nowrap text-base text-[#D2D3D3]"
                                  title={el3.name}
                                >
                                  {el3.name}
                                </span>
                              </Link>
                            );
                          })}
                        </CategoryDropdown>
                      ) : (
                        <Link
                          to="/group/list"
                          className="relative flex h-10 w-full cursor-pointer rounded-lg bg-primary p-2"
                        >
                          <FolderRounded className="mr-[10px]" />
                          <span
                            className="block flex-1 overflow-hidden text-ellipsis text-nowrap text-base text-[#D2D3D3]"
                            title={el2.name}
                          >
                            {el2.name}
                          </span>
                        </Link>
                      );
                    })}
                  </CategoryDropdown>
                );
              })
            ) : (
              <></>
            )}
          </ul>
        </div>
        <ContextMenu
          x={x}
          y={y}
          isVisible={isVisible}
          options={options}
          hideContextMenu={hideContextMenu}
        />
      </aside>
    </>
  );
};

export default GroupSideBar;
