/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

const useOutsideClick = (callback: () => void) => {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current?.contains(event?.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
