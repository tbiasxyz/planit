import { useEffect, useRef } from "react";
import styled from "styled-components";

const Cursor1 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border: 1px solid var(--color-accent-500);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: 0.1s ease;
`;

const Cursor2 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: var(--color-accent-500);
  pointer-events: none;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: 0.15s;
`;

function Cursor() {
  const cursor1 = useRef(null);
  const cursor2 = useRef(null);

  useEffect(function () {
    function handleMouseMove(e) {
      cursor1.current.style.cssText =
        cursor2.current.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px`;

      if (e.target.tagName.toLowerCase() === "a") {
        cursor1.current.style.cssText += `background-color: var(--color-accent-opacity);`;
        cursor2.current.style.cssText += `width: 16px; height: 16px`;
      }
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Cursor1 ref={cursor1} />
      <Cursor2 ref={cursor2} />
    </>
  );
}

export default Cursor;
