import React, { useEffect, useRef } from "react";

interface ClickAwayListenerProps {
  children: React.ReactNode;
  isActive: boolean;
  onClickAway: () => void;
}

export const ClickAwayListener = ({
  onClickAway,
  children,
  isActive,
}: ClickAwayListenerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        isActive
      ) {
        onClickAway();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onClickAway, isActive]);

  return <div ref={ref}>{children}</div>;
};
