import React from 'react';
import styled from 'styled-components';
import { AiFillCaretLeft as ExitIcon } from 'react-icons/ai';
import SideBarInner from './SideBarInner';

interface MobileSideBarProps {
  isSideBar: boolean;
  onToggleSideBar: () => void;
}

function MobileSideBar({ isSideBar, onToggleSideBar }: MobileSideBarProps) {
  return (
    <SideBarBlock>
      <InnerBox isSideBar={isSideBar}>
        <DashBoardHeader>
          <ExitIcon onClick={onToggleSideBar} size={18} />
        </DashBoardHeader>

        <SideBarInner />
      </InnerBox>
      <Background isSideBar={isSideBar} onClick={onToggleSideBar} />
    </SideBarBlock>
  );
}
const SideBarBlock = styled.div`
  display: none;
  position: relative;
  ${({ theme }) => theme.media.small} {
    display: block;
  }
`;
const DashBoardHeader = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 0 6px;
  color: ${({ theme }) => theme.colors.fontColor};
`;

const InnerBox = styled.div<{ isSideBar: boolean }>`
  width: 250px;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 900;
  ${({ isSideBar }) =>
    isSideBar ? 'visibility: visible' : 'visibility : hidden'};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  transition: all 0.3s ease-in-out;
  transform: translateX(${({ isSideBar }) => (isSideBar ? 0 : -75)}vw);
  box-shadow: 5px;
`;

const Background = styled.div<{ isSideBar: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 800;
  opacity: 0.5;
  ${({ isSideBar }) => (isSideBar ? 'display: block' : 'display: none')}
`;
export default MobileSideBar;
