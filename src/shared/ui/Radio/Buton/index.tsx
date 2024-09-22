import React from 'react';

type RadioButtonProps = {
  name: string;
  id: string;
  label: string;
  dscr?: string;
  isSelected: boolean;
  onChange: (id: string) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  id,
  label,
  dscr,
  isSelected,
  onChange,
}) => {
  return (
    <li className="relative flex w-full items-center rounded-md bg-lighten-100">
      <input
        type="radio"
        id={id}
        name={name}
        className="invisible absolute"
        checked={isSelected}
        onChange={() => onChange(id)}
      />
      <div
        className={`check absolute left-4 h-6 w-6 rounded-full border-2 transition-all duration-300 ${
          isSelected ? 'border-lighten-600' : 'border-lighten-400'
        }`}
      >
        <div
          className={`inside absolute left-[3px] top-[3px] h-3.5 w-3.5 rounded-full transition-all duration-300 ${
            isSelected ? 'bg-lighten-600' : ''
          }`}
        />
      </div>
      <label
        htmlFor={id}
        className={`relative flex w-full cursor-pointer flex-col py-2 pl-[60px] pr-4 text-lg font-bold transition-all duration-300 ${
          isSelected ? 'text-lighten-600' : 'text-lighten-500'
        }`}
      >
        {label}

        <span className="font- text-base text-lighten-400">{dscr}</span>
      </label>
    </li>
  );
};

export default RadioButton;
