import { useRef } from "react";

function RefSelect() {
  const forSelect = useRef(null);

  const selectText = () => {
    forSelect.current.select();
  };

  return (
    <>
      <input type="text" ref={forSelect} />
      <button onClick={selectText}>select</button>
    </>
  );
}

export default RefSelect;
