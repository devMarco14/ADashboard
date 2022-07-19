import { FlexCenter } from 'libs/style/commonStyles';
import React from 'react';
import styled from 'styled-components';
import { AdsData } from 'types/ad';

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

function CardInner({
  ad,
  isUpdate,
  form,
  onChangeForm,
  onChangeReportForm,
}: CardInnerProps) {
  const { status, startDate, report, budget } = ad;
  return (
    <>
      <CardInnerStyled>
        <AdCategory>상태</AdCategory>
        {isUpdate ? (
          <AdInputBox>
            <AdSelectBox
              name="status"
              value={form.status}
              onChange={onChangeForm}
            >
              <option value="active">진행중</option>
              <option value="ended">종료</option>
            </AdSelectBox>
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
              type="date"
              name="startDate"
              onChange={onChangeForm}
              value={form.startDate}
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
              value={form.budget}
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
              value={form.report.roas}
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
              value={form.report.convValue}
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
              value={form.report.cost}
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

const AdSelectBox = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.lightBlueColor};
  border-radius: 4px;
  height: 28px;
  padding: 0 6px;
  width: 160px;
  font-weight: 600;
`;

const AdInput = styled.input`
  font-weight: 600;
  height: 28px;
  padding: 0 6px;
  width: 160px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.lightBlueColor};
`;

export default CardInner;
