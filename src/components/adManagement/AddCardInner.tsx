import { FlexCenter } from 'libs/style/commonStyles';
import React from 'react';
import styled from 'styled-components';
import { AdsData } from 'types/ad';
import { ADD_DATA } from 'libs/utils/initalDatas';

interface CardInnerProps {
  ad: AdsData;
  isUpdate: boolean;
  form: AdsData;
  onChangeForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onChangeReportForm: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
}

function AddCardInner({
  ad,
  isUpdate,
  form,
  onChangeForm,
  onChangeReportForm,
}: CardInnerProps) {
  const { status, startDate, report, budget, adType, title } = ad;
  console.log(ADD_DATA);
  return (
    <>
      <CardInnerStyled>
        <AdCategory>상태</AdCategory>
        {isUpdate ? (
          <AdInputBox>
            <AdInput
              name="status"
              onChange={onChangeForm}
              value={ADD_DATA.status}
            />
          </AdInputBox>
        ) : (
          <AdContents>{{ active: '진행중', ended: '종료' }[status]}</AdContents>
        )}
      </CardInnerStyled>

      <CardInnerStyled>
        <AdCategory>광고 생성일</AdCategory>
        {isUpdate ? (
          <AdInputBox>
            <AdInput
              name="startDate"
              onChange={onChangeForm}
              value={ADD_DATA.startDate}
            />
          </AdInputBox>
        ) : (
          <AdContents>{startDate.slice(0, 10)}</AdContents>
        )}
      </CardInnerStyled>
      <CardInnerStyled>
        <AdCategory>일 회망 예산</AdCategory>
        {isUpdate ? (
          <AdInputBox>
            <AdInput
              name="budget"
              onChange={onChangeForm}
              value={ADD_DATA.budget}
            />
          </AdInputBox>
        ) : (
          <AdContents>{budget.toLocaleString('ko-kr')}원</AdContents>
        )}
      </CardInnerStyled>
      <CardInnerStyled>
        <AdCategory>광고 수익률</AdCategory>
        {isUpdate ? (
          <AdInputBox>
            <AdInput
              name="roas"
              onChange={onChangeReportForm}
              value={ADD_DATA.report.roas}
              disabled
            />
          </AdInputBox>
        ) : (
          <AdContents>{report.roas}%</AdContents>
        )}
      </CardInnerStyled>
      <CardInnerStyled>
        <AdCategory>매출</AdCategory>
        {isUpdate ? (
          <AdInputBox>
            <AdInput
              name="convValue"
              onChange={onChangeReportForm}
              value={ADD_DATA.report.convValue}
            />
          </AdInputBox>
        ) : (
          <AdContents>{report.convValue.toLocaleString('ko-kr')}원</AdContents>
        )}
      </CardInnerStyled>
      <CardInnerStyled>
        <AdCategory>광고 비용</AdCategory>
        {isUpdate ? (
          <AdInputBox>
            <AdInput
              name="cost"
              onChange={onChangeReportForm}
              value={ADD_DATA.report.cost}
            />
          </AdInputBox>
        ) : (
          <AdContents>{report.cost.toLocaleString('ko-kr')}원</AdContents>
        )}
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

const AdContents = styled(AdCategory)`
  flex: 2;
  color: ${({ theme }) => theme.colors.fontColor};
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
