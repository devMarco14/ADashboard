import React from 'react';
import useToggle from 'hooks/useToggle';
import styled from 'styled-components';
import MobileSideBar from './MobileSideBar';
import WebSideBar from './WebSideBar';
import Header from './Header';

function AppHeader() {
  const [isSideBar, onToggleSideBar] = useToggle(false);
  return (
    <HeaderLayout>
      <WebSideBar />
      <MobileSideBar isSideBar={isSideBar} onToggleSideBar={onToggleSideBar} />
      <Header onToggleSideBar={onToggleSideBar} />
    </HeaderLayout>
  );
}

const HeaderLayout = styled.article`
  display: flex;
`;

export default AppHeader;
