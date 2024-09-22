import { useState, useCallback } from 'react';

interface ContextMenuHandler {
  x: number;
  y: number;
  isVisible: boolean;
  showContextMenu: (e: React.MouseEvent) => void;
  hideContextMenu: () => void;
}

const useContextMenu = (): ContextMenuHandler => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const showContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setX(e.clientX);
    setY(e.clientY);
    setIsVisible(true);
  }, []);

  const hideContextMenu = useCallback(() => {
    setIsVisible(false);
  }, []);

  return {
    x,
    y,
    isVisible,
    showContextMenu,
    hideContextMenu,
  };
};

export default useContextMenu;
