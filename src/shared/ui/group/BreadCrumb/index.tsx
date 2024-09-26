import React from 'react';

// interface BreadcrumbItem {
//   label: string; // 표시할 텍스트
//   path: string; // 이동할 경로
// }

interface BreadcrumbProps {
  items: string[]; // 경로 아이템 목록
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="flex">
      {items.map((item, index) => (
        <div key={index} className="flex items-center text-sm">
          {index !== 0 && <span className="mx-2 text-lighten-400">/</span>}
          <span className="text-lighten-400 hover:underline">{item}</span>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
