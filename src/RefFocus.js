import { useRef } from "react";

function RefFocus() {
  const forFocus = useRef(null);

  const focusText = () => {
    forFocus.current.focus();
  };

  return (
    <>
      <input type="text" ref={forFocus} />
      <button onClick={focusText}>focus</button>
    </>
  );
}

export default RefFocus;
