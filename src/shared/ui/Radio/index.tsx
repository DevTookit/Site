import React from 'react';

interface RadioButtonProps {
  name: string;
  id: string;
  label: string;
  isSelected: boolean;
  onChange: (id: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  id,
  label,
  isSelected,
  onChange,
}) => {
  return (
    <li className="relative h-24 w-full border-b border-gray-800">
      <input
        type="radio"
        id={id}
        name={name}
        className="invisible absolute"
        checked={isSelected}
        onChange={() => onChange(id)}
      />
      <label
        htmlFor={id}
        className={`relative block cursor-pointer px-20 py-6 text-[1.35em] font-light transition-all duration-300 ${
          isSelected ? 'text-[#0DFF92]' : 'text-gray-400'
        }`}
      >
        {label}
      </label>
      <div
        className={`check absolute left-5 top-7 h-6 w-6 rounded-full border-4 transition-all duration-300 ${
          isSelected ? 'border-[#0DFF92]' : 'border-gray-400'
        }`}
      >
        <div
          className={`inside absolute left-[1px] top-[1px] h-3.5 w-3.5 rounded-full transition-all duration-300 ${
            isSelected ? 'bg-[#0DFF92]' : ''
          }`}
        />
      </div>
    </li>
  );
};

export default RadioButton;
