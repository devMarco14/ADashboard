import React from 'react';
import {
  AiOutlineConsoleSql as DashBoardIcon,
  AiOutlineBarChart as ChartIcon,
} from 'react-icons/ai';
import { checkADManagementPage } from 'libs/utils/sideBar';
import { Link, useLocation } from 'react-router-dom';
import Path from 'routes/Path';
import styled, { css } from 'styled-components';

function SideBarInner() {
  const location = useLocation();
  return (
    <InnerLayout>
      <LinkTitle>로고 센터</LinkTitle>
      <LinkLabel
        to={Path.LandingPage}
        isActive={!checkADManagementPage(location.pathname)}
      >
        <DashBoardIcon />
        대시보드
      </LinkLabel>
      <LinkLabel
        to={Path.ADManagementPage}
        isActive={checkADManagementPage(location.pathname)}
      >
        <ChartIcon />
        광고관리
      </LinkLabel>
    </InnerLayout>
  );
}
const InnerLayout = styled.article`
  padding: 12px;
`;
const LinkTitle = styled.div`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  margin: 4px 4px 8px 4px;
`;
const LinkLabel = styled(Link)<{ isActive: boolean }>`
  width: 100%;
  font-weight: 500;
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 2px 0;
  gap: 4px;
  transition: all 0.3s ease-in-out;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.lightGrayColor};
      border-radius: 6px;
      color: ${({ theme }) => theme.colors.blueColor};
    `}
  :hover {
    background-color: ${({ theme }) => theme.colors.lightGrayColor};
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.blueColor};
  }
`;
export default SideBarInner;
