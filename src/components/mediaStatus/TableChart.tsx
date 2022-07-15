import React from 'react';
import styled from 'styled-components';

function TableChart() {
  return (
    <TableLayout>
      <Table>
        <thead>
          <tr>
            <th className="col flatform" aria-label="플랫폼" />
            <th className="col" scope="col">
              광고비
            </th>
            <th className="col" scope="col">
              매출
            </th>
            <th className="col" scope="col">
              ROAS
            </th>
            <th className="col" scope="col">
              노출수
            </th>
            <th className="col" scope="col">
              클릭수
            </th>
            <th className="col" scope="col">
              클릭률 <br /> (CTR)
            </th>
            <th className="col" scope="col">
              클릭당 비용 <br /> (CTC)
            </th>
            <th className="col" scope="col">
              전환당 비용 <br /> (CPA)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="flatform row" scope="row">
              페이스북
            </th>
            <td>123</td>
          </tr>
          <tr>
            <th className="flatform row" scope="row">
              네이버
            </th>
            <td>123</td>
          </tr>
          <tr>
            <th className="flatform row" scope="row">
              구글
            </th>
            <td>123</td>
          </tr>
          <tr>
            <th className="flatform row" scope="row">
              카카오
            </th>
            <td>123</td>
          </tr>
          <tr>
            <th className="total row">총계</th>
            <td className="total">123</td>
          </tr>
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
  }
`;
