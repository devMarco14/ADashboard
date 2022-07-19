import useToggle from 'hooks/useToggle';
import { FlexAround, FlexCenter } from 'libs/style/commonStyles';
import React from 'react';
import styled from 'styled-components';
import { AdsData } from 'types/ad';
import AdCard from './CardInner';
import useAdUpdateForm from './hooks/useAdUpdateForm';

interface AdArtcleProps {
  ad: AdsData;
  setDetectData: () => void;
}

function AdManagementArtcle({ ad, setDetectData }: AdArtcleProps) {
  const [isUpdate, onToggleUpdate] = useToggle(false);
  const { adType, title } = ad;
  const { form, onChangeForm, onChangeReportForm, onUpdateForm } =
    useAdUpdateForm(ad);

  const handleRevise = () => {
    setDetectData();
    onUpdateForm();
    onToggleUpdate();
  };

  return (
    <AdBox>
      {isUpdate ? (
        <UpdateTitle>
          <select name="adType" value={form.adType} onChange={onChangeForm}>
            <option value="web">web</option>
            <option value="app">app</option>
          </select>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={onChangeForm}
          />
        </UpdateTitle>
      ) : (
        <AdArtcleTitle>{`${adType}_${title}`}</AdArtcleTitle>
      )}

      <AdCard
        ad={ad}
        form={form}
        isUpdate={isUpdate}
        onChangeForm={onChangeForm}
        onChangeReportForm={onChangeReportForm}
      />
      <EditSection>
        {isUpdate ? (
          <FlexAround>
            <EditButton onClick={onToggleUpdate}>취소</EditButton>
            <EditButton onClick={handleRevise}>수정완료</EditButton>
          </FlexAround>
        ) : (
          <EditButton onClick={onToggleUpdate}>수정하기</EditButton>
        )}
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
  display: flex;
  gap: 8px;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
`;

export const UpdateTitle = styled(AdArtcleTitle)`

  padding: 14px 0;
  input {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.fontColor};
    border: 1px solid ${({ theme }) => theme.colors.lightBlueColor};
    width: 110px;
    border-radius: 4px;
    padding: 4px;
  }
  select {
    border: 1px solid ${({ theme }) => theme.colors.lightBlueColor};
    border-radius: 4px;
  }
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
export default AdManagementArtcle;
