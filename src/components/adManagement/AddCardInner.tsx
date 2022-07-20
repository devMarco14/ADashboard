import { FlexCenter } from 'libs/style/commonStyles';
import React from 'react';
import styled from 'styled-components';
import { AdsData } from 'types/ad';

interface CardInnerProps {
  form: AdsData;
  onChangeForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onChangeReportForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  setDetectData: () => void;
}

function AddCardInner({
  form,
  onChangeForm,
  onChangeReportForm,
  setDetectData,
}: CardInnerProps) {
  const { budget, report, startDate, status } = form;
  return (
    <>
      <CardInnerStyled>
        <AdCategory>상태</AdCategory>
        <AdInputBox>
          <AdInput name="status" onChange={onChangeForm} value={status} />
        </AdInputBox>
      </CardInnerStyled>
      <CardInnerStyled>
        <AdCategory>광고 생성일</AdCategory>
        <AdInputBox>
          <AdInput name="startDate" onChange={onChangeForm} value={startDate} />
        </AdInputBox>
      </CardInnerStyled>
      <CardInnerStyled>
        <AdCategory>일 회망 예산</AdCategory>
        <AdInputBox>
          <AdInput name="budget" onChange={onChangeForm} value={budget} />
        </AdInputBox>
      </CardInnerStyled>
      <CardInnerStyled>
        <AdCategory>광고 수익률</AdCategory>
        <AdInputBox>
          <AdInput
            name="roas"
            onChange={onChangeReportForm}
            value={report.roas}
            disabled
          />
        </AdInputBox>
      </CardInnerStyled>
      <CardInnerStyled>
        <AdCategory>매출</AdCategory>
        <AdInputBox>
          <AdInput
            name="convValue"
            onChange={onChangeReportForm}
            value={report.convValue}
          />
        </AdInputBox>
      </CardInnerStyled>
      <CardInnerStyled>
        <AdCategory>광고 비용</AdCategory>
        <AdInputBox>
          <AdInput
            name="cost"
            onChange={onChangeReportForm}
            value={report.cost}
          />
        </AdInputBox>
      </CardInnerStyled>
    </>
  );
}
const CardInnerStyled = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
`;

const AdCategory = styled.span`
  flex: 1;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.lightGrayColor};
`;

const AdInputBox = styled(FlexCenter)`
  align-items: center;
`;

const AdInput = styled.input`
  height: 28px;
  padding: 0 6px;
  width: 160px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.lightBlueColor};
`;

export default AddCardInner;
