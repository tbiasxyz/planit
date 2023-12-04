import { useEffect, useRef } from "react";

export function useClickOutside(handlerFunction, capturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function click(e) {
        if (ref.current && !ref.current.contains(e.target)) handlerFunction();
      }

      document.addEventListener("click", click, capturing);

      return () => document.removeEventListener("click", click, capturing);
    },
    [handlerFunction, capturing]
  );
  return ref;
}
