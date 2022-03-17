import React, { useState } from "react";
import * as S from './CheckBox.styled';

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const onChange = () => {
    setIsChecked((prev: boolean) => !prev)
  };
  return (
    <S.Label isChecked={isChecked}>
      <S.CheckImg isChecked={isChecked} />
      <S.Checkbox checked={isChecked} onChange={onChange} />
    </S.Label>
  );
}
export default CheckBox;
