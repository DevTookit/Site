import React from 'react';

interface ContextMenuProps {
  x: number;
  y: number;
  isVisible: boolean;
  options: { label: string; onClick: () => void }[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  isVisible,
  options,
}) => {
  if (!isVisible) return null;

  return (
    <ul
      className="absolute rounded-lg border-[1px] border-solid border-lighten-200 bg-primary py-2 shadow-lg"
      style={{ top: y, left: x }}
    >
      {options.map((option, index) => (
        <li
          key={index}
          className="cursor-pointer px-4 py-2 text-base text-lighten-500 hover:text-lighten-600"
          onClick={option.onClick}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
};

export default ContextMenu;
