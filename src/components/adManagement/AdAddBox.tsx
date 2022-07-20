import { FlexAround } from 'libs/style/commonStyles';
import React from 'react';
import styled from 'styled-components';
import AdCard from './AddCardInner';
import { UpdateTitle } from './AdManagementArticle';
import useAdPost from './hooks/useAdPost';

interface AdAddBoxProps {
  setDetectData: () => void;
  handleAdd: () => void;
}

function AdAddBox({ setDetectData, handleAdd }: AdAddBoxProps) {
  const { onPostForm, onChangeForm, onChangeReportForm, form } =
    useAdPost(setDetectData);

  return (
    <AdBox>
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
          placeholder="제목입력"
        />
      </UpdateTitle>
      <AdCard
        form={form}
        setDetectData={setDetectData}
        onChangeForm={onChangeForm}
        onChangeReportForm={onChangeReportForm}
      />
      <EditSection>
        <FlexAround>
          <CancleButton onClick={handleAdd}>취소</CancleButton>
          <AddButton
            onClick={() => {
              onPostForm();
              handleAdd();
            }}
          >
            생성하기
          </AddButton>
        </FlexAround>
      </EditSection>
    </AdBox>
  );
}

const AdBox = styled.article`
  width: 270px;
  margin: 0 auto 10px auto;
  border: 1px solid ${({ theme }) => theme.colors.blueColor};
  border-radius: 5px;
`;

const EditSection = styled.div`
  width: 90%;
  margin: 20px auto;
`;

const CancleButton = styled.button`
  display: flex;
  justify-content: center;
  width: 110px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: bold;
  align-items: center;
`;

const AddButton = styled(CancleButton)``;
export default AdAddBox;
