import React, { useState } from "react";

export const ButtonFuc = () => {
  const [isClick, setIsClick] = useState(false);
  const onClick = () => {
    setIsClick(true);
  };
  return (
    <div>
      <button onClick={onClick} disabled={isClick}>
        스킬 사용
      </button>
    </div>
  );
};
