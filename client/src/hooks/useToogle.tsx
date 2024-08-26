import { useCallback, useState } from "react";

export const useToogle = (initialValue: boolean = false) => {
  const [isToggled, setIsToggled] = useState(initialValue);

  const handleToogle = useCallback(() => {
    setIsToggled((prev) => !prev);
  }, []);

  return [isToggled, handleToogle] as const;
};
