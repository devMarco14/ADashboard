import React from 'react';
import styled from 'styled-components';
import SideBarInner from './SideBarInner';

function WebSideBar() {
  return (
    <SideBarBlock>
      <BlankSpace />
      <SideBarInner />
    </SideBarBlock>
  );
}
const BlankSpace = styled.div`
  height: 45px;
`;
const SideBarBlock = styled.div`
  max-width: 250px;
  width: 100%;
  display: block;
  position: relative;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.22);
  ${({ theme }) => theme.media.small} {
    display: none;
    position: relative;
  }
`;

export default WebSideBar;
