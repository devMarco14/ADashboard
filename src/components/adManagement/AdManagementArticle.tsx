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
  const { status, startDate, report, budget, adType, title } = ad;
  const { form, onChangeForm, onChangeReportForm, onUpdateForm } =
    useAdUpdateForm(ad);
  const handleRevise = () => {
    setDetectData();
    onUpdateForm();
  };

  const array = [
    {
      category: '상태',
      name: 'status',
      contents: `${status === 'active' ? '진행중' : '종료'}`,
    },
    {
      category: '광고 생성일',
      name: 'startDate',
      contents: startDate.slice(0, 10),
    },
    {
      category: '일 희망 예산',
      name: 'budget',
      contents: budget,
    },
  ];

  const reportArray = [
    {
      category: '광고 수익률',
      name: 'roas',
      contents: report.roas,
    },
    {
      category: '매출',
      name: 'convValue',
      contents: report.convValue,
    },
    {
      category: '광고 비용',
      name: 'cost',
      contents: report.cost,
    },
  ];

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
      {/* {reportArray.map((item, index) => (
        <Section>
          <AdCategory>{item.category}</AdCategory>
          {isUpdate ? (
            <AdInputBox>
              <AdInput
                name={item.name}
                onChange={onChangeReportForm}
                value={form.report.convValue}
              />
            </AdInputBox>
          ) : (
            <AdContents>{item.contents}</AdContents>
          )}
        </Section>
      ))} */}
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
export default AdManagementArtcle;
