import React from 'react';
import styled from 'styled-components';

interface MobileSideBarProps {
  isSideBar: boolean;
  onToggleSideBar: () => void;
}

function MobileSideBar({ isSideBar, onToggleSideBar }: MobileSideBarProps) {
  return (
    <SideBarBlock>
      <SideBarInner isSideBar={isSideBar}>
        <button type="button" onClick={onToggleSideBar}>
          asd
        </button>
      </SideBarInner>
      <NavBackground isSideBar={isSideBar} onClick={onToggleSideBar} />
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

const SideBarInner = styled.div<{ isSideBar: boolean }>`
  width: 200px;
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
`;

const NavBackground = styled.div<{ isSideBar: boolean }>`
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
