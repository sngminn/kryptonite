import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const helper = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(helper);
  }, [value, delay]);

  return debouncedValue;
}
