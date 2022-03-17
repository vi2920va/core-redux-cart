import styled from 'styled-components';

export const Label = styled.label<{ isChecked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  min-width: 26px;
  border-radius: 2px;
  background: ${({ isChecked }) => (isChecked ? '#e82c23' : 'gray')};
`;

export const CheckImg = styled.div<{ isChecked: boolean }>`
  display: ${({ isChecked }) => (isChecked ? 'block' : 'none')};
  width: 14px;
  height: 12px;
  background-image: url('/images/checkIcon.png');
  cursor: pointer;
`;

export const Checkbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  width: 0;
  height: 0;
  margin: 0;
`;
