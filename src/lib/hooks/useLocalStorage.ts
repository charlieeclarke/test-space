import { useCallback, useEffect, useState } from 'react';

export interface UseLocalStorageOpts {
  sync?: boolean;
}

export type SetLocalStorageValue<T> = T | ((prevValue: T) => T);
export type SetLocalStorage<T> = (value: SetLocalStorageValue<T>) => void;
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  { sync }: UseLocalStorageOpts = {}
): [T, SetLocalStorage<T>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    let result: T;
    try {
      const item = window.localStorage.getItem(key);
      result = item ? JSON.parse(item) : initialValue;
    } catch {
      result = initialValue;
    }

    return result;
  });

  const setValue = (valueOrCb: SetLocalStorageValue<T>) => {
    setStoredValue(valueOrCb);
    const valueToStore = valueOrCb instanceof Function ? valueOrCb(storedValue) : valueOrCb;

    try {
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch {
      // eslint-disable-next-line no-console
      console.warn(`Could not save ${key} to localStorage`);
    }
  };

  const onStorage = useCallback(
    (event: StorageEvent) => {
      if (event.key !== key) return;

      try {
        const item = event.newValue;
        if (item) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          setStoredValue(JSON.parse(item));
        }
      } catch {
        // eslint-disable-next-line no-console
        console.warn(`Could not update value for ${key}`);
      }
    },
    [key]
  );

  useEffect(() => {
    if (sync) {
      window.addEventListener('storage', onStorage);

      return () => {
        window.removeEventListener('storage', onStorage);
      };
    }
  }, [onStorage, sync]);

  return [storedValue, setValue];
}
