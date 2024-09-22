import React, { ReactNode } from 'react';
import RadioButton from './Buton';

interface RadioGroupProps {
  children: ReactNode;
  className: string;
}
interface RadioGroupType extends React.FC<RadioGroupProps> {
  Button: typeof RadioButton; // static 속성 정의
}

const RadioGroup: RadioGroupType = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

RadioGroup.Button = RadioButton;
export default RadioGroup;
