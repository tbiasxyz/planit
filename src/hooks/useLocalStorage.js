import { useEffect, useState } from "react";

export function useLocalStorage(initialStorageState, storageKey) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(storageKey);
    return storedValue ? JSON.parse(storedValue) : initialStorageState;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, value]);

  return [value, setValue];
}
