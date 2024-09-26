import React, { createContext, useState, ReactNode } from 'react';

import { LayoutData } from '@/shared/types/types';

export interface LayoutContextType {
  data: LayoutData;
  setCurrentFolder: (src: string) => void;
  setCgryModalIsOpen: (open: boolean) => void;
  setGroupModalIsOpen: (open: boolean) => void;
  setOnboardingStep: (step: number) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<LayoutData>({
    currentFolder: '',
    cgryModalIsOpen: false,
    groupModalIsOpen: false,
    onboardingStep: 1,
  });
  const setCurrentFolder = (src: string) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      currentFolder: src,
    }));
  };
  const setCgryModalIsOpen = (open: boolean) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      cgryModalIsOpen: open,
    }));
  };
  const setGroupModalIsOpen = (open: boolean) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      groupModalIsOpen: open,
    }));
  };
  const setOnboardingStep = (step: number) => {
    setData((prevData: LayoutData) => ({
      ...prevData,
      onboardingStep: step,
    }));
  };

  return (
    <LayoutContext.Provider
      value={{
        data,
        setCurrentFolder,
        setCgryModalIsOpen,
        setGroupModalIsOpen,
        setOnboardingStep,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
