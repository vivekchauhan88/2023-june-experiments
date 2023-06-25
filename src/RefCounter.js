import { useRef, useState } from "react";

function RefCounter() {
  const count = useRef(0);
  const [realCount, setRealCount] = useState(0);

  const incrementRef = () => {
    count.current = count.current + 1;
    if (count.current % 5 === 0) setRealCount(count.current);
  };

  return (
    <button onClick={incrementRef}>increment count ref: {realCount}</button>
  );
}

export default RefCounter;
