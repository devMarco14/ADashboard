/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';
import { CompanyType } from 'types/media-status';
import useTransformedData from './hooks/useTransformedData';

function TableChart() {
  const { getTableData } = useTransformedData();
  const tableData = getTableData();
  const companeis: CompanyType[] = ['google', 'naver', 'kakao', 'facebook'];

  const columnHeader = tableData.map((data) => (
    <th key={data.name} className="col" scope="col">
      {data.name}
    </th>
  ));

  const dataByCompany = companeis.map((company) => (
    <tr key={Math.random().toString()}>
      <th key={company} className="flatform row" scope="row">
        {company}
      </th>
      {tableData.map((data) => (
        <td key={`${company}_${data.name}`}>{Math.round(data[company])}</td>
      ))}
    </tr>
  ));

  const totalData = (
    <tr>
      <th className="total row">총계</th>
      {tableData.map((data) => (
        <td key={`${data.name}_total`} className="total">
          {Math.round(data.total)}
        </td>
      ))}
    </tr>
  );

  return (
    <TableLayout>
      <Table>
        <thead aria-label="플랫폼 기준 데이터">
          <tr>
            <th className="col flatform" />
            {columnHeader}
          </tr>
        </thead>
        <tbody aria-label="플랫폼">
          {dataByCompany}
          {totalData}
        </tbody>
      </Table>
    </TableLayout>
  );
}

export default TableChart;

const TableLayout = styled.section`
  overflow-x: scroll;
  display: block;
  width: 90%;
  min-width: 320px;
  margin: 0 auto 16px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 8px;
  font-weight: 300;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 5%;
    background: ${({ theme }) => theme.colors.lightGrayColor};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundColor};
    border-radius: 10px;
  }
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  & th,
  & td {
    min-width: 125px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
    padding: 12px;
    text-align: right;
  }

  & .col {
    color: ${({ theme }) => theme.colors.lightGrayColor};
  }

  & .row {
    text-align: left;
  }
  & .total,
  & .total {
    color: ${({ theme }) => theme.colors.blueColor};
    font-weight: 700;
  }
`;
