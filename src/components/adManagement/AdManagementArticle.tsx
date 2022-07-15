import React from 'react';
import styled from 'styled-components';

function AdManagementArtcle() {
  const data = {
    id: 1,
    adType: 'web',
    title: '광고 1234',
    budget: 500000,
    status: 'active',
    startDate: '2020-10-19T00:00:00',
    endDate: null,
    report: {
      cost: 267144117,
      convValue: 1157942685,
      roas: 433,
    },
  };
  // 데이터 받아오면 받아오느 데이터로 전환
  const array = [
    {
      category: '상태',
      contents: `${data.status === 'active' ? '진행중' : '종료'}`,
    },
    {
      category: '광고 생성일',
      contents: data.startDate.slice(0, 10),
    },
    {
      category: '일 희망 예산',
      contents: data.budget,
    },
    {
      category: '광고 수익률',
      contents: data.report.roas,
    },
    {
      category: '매출',
      contents: data.report.convValue,
    },
    {
      category: '광고 비용',
      contents: data.report.cost,
    },
  ];

  return (
    <AdArtcle>
      <AdArtcleTitle>{`${data.adType}_${data.title}`}</AdArtcleTitle>
      {array.map((value, index) => (
        <Section key={index}>
          <Category>{value.category}</Category>
          <Value>{value.contents}</Value>
        </Section>
      ))}
      <EditSection>
        <EditButton>수정하기</EditButton>
      </EditSection>
    </AdArtcle>
  );
}

const AdArtcle = styled.article`
  width: 90%;
  margin: 0 auto 10px auto;
  border: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
  border-radius: 5px;
`;

const AdArtcleTitle = styled.div`
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
`;

const Section = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
`;

const Category = styled.span`
  flex: 1;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.lightGrayColor};
`;

const Value = styled.span`
  flex: 2;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.fontColor};
`;

const EditSection = styled.div`
  width: 90%;
  margin: 20px auto;
`;

const EditButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: bold;
  align-items: center;
`;
export default AdManagementArtcle;
