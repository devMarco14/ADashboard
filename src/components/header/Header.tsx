import React from 'react';
import styled from 'styled-components';
import {
  AiOutlineBell as AlertIcon,
  AiOutlineChrome as OptionIcon,
  AiOutlineUser as UserIocon,
  AiOutlineMenu as HambergerIcon,
} from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import { FlexCenter } from 'libs/style/commonStyles';

interface MobileSideBarProps {
  onToggleSideBar: () => void;
}

function Header({ onToggleSideBar }: MobileSideBarProps) {
  return (
    <FlexColumn>
      <AppHeaderBlock>
        <FlexCenter>
          <HambergerElement onClick={onToggleSideBar}>
            <HambergerIcon size={18} />
          </HambergerElement>
        </FlexCenter>
        <FlexCenter>
          <HeaderElement>
            <AlertIcon size={18} />
          </HeaderElement>
          <HeaderElement>
            <OptionIcon size={18} />
          </HeaderElement>
          <UserElement>
            <UserIocon size={18} />
            <UserName>원티드님</UserName>
          </UserElement>
        </FlexCenter>
      </AppHeaderBlock>
      <Outlet />
    </FlexColumn>
  );
}
const FlexColumn = styled.div`
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const AppHeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  color: black;
  width: 100%;
  margin: 0 auto;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.fontColor};
`;

const HeaderElement = styled.div`
  margin: 0 6px;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.blueColor};
  }
`;

const UserElement = styled(HeaderElement)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  display: flex;
  align-items: center;
`;
const UserName = styled.div`
  margin: 0 2px;
`;

const HambergerElement = styled(HeaderElement)`
  display: none;
  ${({ theme }) => theme.media.small} {
    display: block;
  }
`;
export default Header;
