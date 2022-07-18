/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */
import useMediaLoad from 'components/dashboard/hooks/useMediaLoad';
import { WeekContext } from 'libs/context';
import { useCallback, useContext, useEffect, useState } from 'react';
import {
  TransformedMediaData,
  DataType,
  CompanyType,
  KoreanDataType,
} from 'types/media-status';

function useTransformedData() {
  const [data, setData] = useState<any[]>([]);
  const { currentWeek } = useContext(WeekContext);
  const { totalDataContainingDates: mediaData } = useMediaLoad(
    currentWeek[0],
    currentWeek[1],
  );

  // 선택된 주간의 데이터 받아오기
  // 받아온 데이터에 매출 추가하기 (roas = (매출/cost) * 100 이용)
  useEffect(() => {
    if (mediaData) {
      const mediaDataCopy = [...mediaData];
      const addRevenueToMediaData = (CopyData: any[]) => {
        CopyData.forEach((dataItem) => {
          dataItem['광고비'] = dataItem['cost'];
          dataItem.revenue = (dataItem.roas * dataItem.cost) / 100;
          dataItem['매출'] = dataItem['revenue'];
          dataItem['노출수'] = dataItem['imp'];
          dataItem['클릭수'] = dataItem['click'];
          dataItem['전환수'] = dataItem['convValue'];
        });
      };

      addRevenueToMediaData(mediaDataCopy);
      setData(mediaDataCopy);
    }
  }, [mediaData]);

  // filterDataByCompany('naver') => naver에 해당되는 데이터만 포함된 배열 반환
  const filterDataByCompany = useCallback(
    (company: CompanyType) => {
      return data.filter((item) => item.channel === company);
    },
    [data],
  );

  // sumTargetDataByCompany('naver', 'cost') => naver의 모든 cost를 더한 숫자 반환
  const sumTargetDataByCompany = useCallback(
    (company: CompanyType, target: DataType | KoreanDataType) => {
      return filterDataByCompany(company)
        .map((item) => item[target])
        .reduce((prev, current) => prev + current, 0);
    },
    [filterDataByCompany],
  );

  // sumTargetDataOfCompanies(cost) => 모든 회사의 cost를 더한 숫자 반환
  const sumTargetDataOfCompanies = useCallback(
    (target: DataType | KoreanDataType): number => {
      const companies: CompanyType[] = ['google', 'facebook', 'kakao', 'naver'];
      let total = 0;

      companies.forEach((company) => {
        total += sumTargetDataByCompany(company, target);
      });

      return total;
    },
    [sumTargetDataByCompany],
  );

  // cost와 cpa를 이용해서 conv 계산하는 함수

  // 스택바 차트에 전달해야 하는 백분율 데이터를 얻을 수 있다
  const getStackedBarData = useCallback((): TransformedMediaData[] => {
    const transformedData: TransformedMediaData[] = [];
    const targets: KoreanDataType[] = [
      '광고비',
      '매출',
      '노출수',
      '클릭수',
      '전환수',
    ];

    data &&
      targets.forEach((target: KoreanDataType) => {
        const totalTargetData = sumTargetDataOfCompanies(target);

        transformedData.push({
          name: target,
          google:
            (sumTargetDataByCompany('google', target) / totalTargetData) * 100,
          facebook:
            (sumTargetDataByCompany('facebook', target) / totalTargetData) *
            100,
          naver:
            (sumTargetDataByCompany('naver', target) / totalTargetData) * 100,
          kakao:
            (sumTargetDataByCompany('kakao', target) / totalTargetData) * 100,
          total: totalTargetData,
        });
      });
    return transformedData;
  }, [data, sumTargetDataByCompany, sumTargetDataOfCompanies]);

  // 테이블 차트에 전달해야 하는 데이터를 얻을 수 있다
  const getTableData = useCallback((): TransformedMediaData[] => {
    const transformedData: TransformedMediaData[] = [];
    const targets: DataType[] = [
      'cost',
      'convValue',
      'roas',
      'imp',
      'click',
      'ctr',
      'cvr',
      'cpc',
      'cpa',
    ];

    data &&
      targets.forEach((target: DataType) => {
        transformedData.push({
          name: target,
          google: sumTargetDataByCompany('google', target),
          facebook: sumTargetDataByCompany('facebook', target),
          naver: sumTargetDataByCompany('naver', target),
          kakao: sumTargetDataByCompany('kakao', target),
          total: sumTargetDataOfCompanies(target),
        });
      });
    return transformedData;
  }, [data, sumTargetDataByCompany, sumTargetDataOfCompanies]);

  return { getStackedBarData, getTableData };
}

export default useTransformedData;
