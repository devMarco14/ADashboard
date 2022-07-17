import useToggle from 'hooks/useToggle';
import { FlexAround, FlexCenter } from 'libs/style/commonStyles';
import React from 'react';
import styled from 'styled-components';
import { AdsData } from 'types/ad';
import AdCard from './AddCardInner';
import useAdPost from './hooks/useAdPost';
import useAdUpdateForm from './hooks/useAdUpdateForm';

// interface AdArtcleProps {
//   // ad: AdsData;
//   // setDetectData: () => void;
// }

function AdAddBox() {
  const [isUpdate, onToggleUpdate] = useToggle(false);
  const { onPostForm, onChangeForm, onChangeReportForm, form } = useAdPost();
  return (
    <AdBox>
      <AdArtcleTitle>{`${adType}_${title}`}</AdArtcleTitle>
      <AdCard
        ad={ad}
        form={form}
        isUpdate={isUpdate}
        onChangeForm={onChangeForm}
        onChangeReportForm={onChangeReportForm}
      />
      <EditSection>
        <FlexAround>
          <EditButton onClick={onToggleUpdate}>취소</EditButton>
          <EditButton onClick={onPostForm}>생성하기</EditButton>
        </FlexAround>
      </EditSection>
    </AdBox>
  );
}

const AdBox = styled.article`
  width: 270px;
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

const EditSection = styled.div`
  width: 90%;
  margin: 20px auto;
`;

const EditButton = styled.button`
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
export default AdAddBox;
