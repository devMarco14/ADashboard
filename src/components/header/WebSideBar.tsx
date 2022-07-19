import { ThemeContext } from 'libs/context/theme';
import { FlexCenter } from 'libs/style/commonStyles';
import React, { useContext } from 'react';
import styled from 'styled-components';
import SideBarInner from './SideBarInner';
import ToggleButton from './ToggleButton';

function WebSideBar() {
  const { ThemeMode, onToggleTheme } = useContext(ThemeContext);

  return (
    <SideBarBlock>
      <BlankSpace>
        테마 변환
        <ToggleButton isActive={ThemeMode} onToggle={onToggleTheme} />
      </BlankSpace>
      <SideBarInner />
    </SideBarBlock>
  );
}
const BlankSpace = styled(FlexCenter)`
  height: 45px;
  gap: 8px;
`;
const SideBarBlock = styled.div`
  max-width: 250px;
  width: 100%;
  display: block;
  position: relative;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.22);
  ${({ theme }) => theme.media.small} {
    display: none;
    position: relative;
  }
`;

export default WebSideBar;
