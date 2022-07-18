import AdManagementArtcle from 'components/adManagement/AdManagementArticle';
import useAdLoad from 'components/adManagement/hooks/useAdLoad';
import React, { useState } from 'react';
import styled from 'styled-components';

function AdManagementPage() {
  const [selectedAd, setSelectedAd] = useState<number | null>(null);
  /* 추 후 수정되고 있는 섹션의 보더를 변경 */
  const { adData, setDetectData } = useAdLoad();
  return (
    <AdManagement>
      <AdManagementTitle>광고관리</AdManagementTitle>
      <AdManagementSection>
        <AdManagementHeader>
          <div>드롭다운메뉴</div>
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

export default AdManagementPage;
