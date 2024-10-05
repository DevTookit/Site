import React, { useState } from 'react';
import ArrowDownRounded from '@svg/icon_arrow_chevron_down_rounded.svg?react';
import Layer from '@svg/icon_layer.svg?react';
import useLayout from '@/shared/hooks/useLayout';
import sectionApi from '@/shared/api/sectionApi';

type DropdownProps = {
  children: React.ReactNode;
  title: string;
  folderId: number;
  onContextMenu: (e: any) => void;
};

const CategoryDropdown: React.FC<DropdownProps> = ({
  children,
  title,
  folderId,
  onContextMenu,
}) => {
  const { data, setCurrentCategoryChildList } = useLayout();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = <T extends HTMLElement>(e: React.MouseEvent<T>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const getChildList = async <T extends HTMLElement>(
    e: React.MouseEvent<T>,
  ) => {
    if (!isOpen) {
      await sectionApi
        .getSections(data.currentGroupTab?.id ?? 0, folderId)
        .then((res) => {
          setCurrentCategoryChildList(folderId, res);
        });
    }
    toggleDropdown(e);
  };

  return (
    <>
      <li onContextMenu={onContextMenu} className="mb-2">
        <div
          className={`flex h-10 cursor-pointer rounded-lg p-2 ${data.currentCategory?.folderId === folderId ? 'bg-lighten-100' : 'bg-primary'}`}
          onClick={getChildList}
        >
          <div className="flex flex-1 items-center overflow-hidden">
            <Layer className="mr-[10px] min-w-6" />
            <span
              className="block flex-1 overflow-hidden text-ellipsis text-nowrap text-base text-[#D2D3D3]"
              title={title}
            >
              {title}
            </span>
          </div>
          <span
            className={`w-6 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <ArrowDownRounded />
          </span>
        </div>
        <div
          className={`w-full pl-6 transition-all duration-300 ${
            isOpen ? 'opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="mt-1 rounded-md shadow-lg">{children}</div>
        </div>
      </li>
    </>
  );
};

export default CategoryDropdown;
