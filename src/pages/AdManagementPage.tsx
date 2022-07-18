import AdManagementArtcle from 'components/adManagement/AdManagementArticle';
import useAdLoad from 'components/adManagement/hooks/useAdLoad';
import useInput from 'hooks/useInput';
import React, { useState } from 'react';
import styled from 'styled-components';

function AdManagementPage() {
  const [selectedAd, setSelectedAd] = useState<number | null>(null);
  const [stateAD, onChangeStateAD] = useInput('');

  /* 추 후 수정되고 있는 섹션의 보더를 변경 */
  const { adData, setDetectData } = useAdLoad(stateAD as string);
  return (
    <AdManagement>
      <AdManagementTitle>광고관리</AdManagementTitle>
      <AdManagementSection>
        <AdManagementHeader>
          <div>
            <ADFilterSelect
              name="filter"
              value={stateAD}
              onChange={onChangeStateAD}
            >
              <option value="">전체</option>
              <option value="active">진행중</option>
              <option value="ended">종료</option>
            </ADFilterSelect>
          </div>
          <AdManagementButton>광고 만들기</AdManagementButton>
        </AdManagementHeader>
        <AdManagementArticle>
          {adData.map((item) => (
            <AdManagementArtcle
              key={item.id}
              ad={item}
              setDetectData={setDetectData}
            />
          ))}
        </AdManagementArticle>
      </AdManagementSection>
    </AdManagement>
  );
}

const AdManagement = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

const AdManagementTitle = styled.div`
  width: 80%;
  margin: 20px auto 0 auto;
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  font-weight: bold;
`;

const AdManagementSection = styled.section`
  width: 90%;
  margin: 40px auto;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
`;

const AdManagementHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;

const AdManagementButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.blueColor};
  border: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-weight: bold;
`;

const AdManagementArticle = styled.article`
  display: grid;
  justify-content: space-between;
  margin: 30px 15px;
  grid-template-columns: repeat(3, 1fr);
  ${({ theme }) => theme.media.large} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.media.xsmall} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ADFilterSelect = styled.select`
  width: 100px;
  height: 32px;
  border-radius: 6px;
  margin-left: 20px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
  ${({ theme }) => theme.media.small} {
    margin-left: 0px;
  }
`;
export default AdManagementPage;
