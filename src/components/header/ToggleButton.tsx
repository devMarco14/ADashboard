import React from 'react';
import styled from 'styled-components';

interface ToggleButtonProps {
  isActive: boolean;
  onToggle: () => void;
}

function ToggleButton({ isActive, onToggle }: ToggleButtonProps) {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
}

export default ToggleButton;

const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  display: flex;
`;
const Notch = styled.div<{ isActive: boolean }>`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transform: translate(${(props) => (props.isActive ? '26px' : '1px')});
  transition: transform 0.1s linear;
`;
