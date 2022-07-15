import apiClient from 'libs/api';
import { useCallback, useEffect, useState } from 'react';
import {
  MediaData,
  TransformedMediaData,
  TargetType,
  CompanyType,
} from 'types/media-status';

function useTransformedData() {
  const [data, setData] = useState<MediaData[]>([]);

  // 데이터 받아오기
  useEffect(() => {
    apiClient('/media?date_like=2022-02') //
      .then((response) => setData(response.data));
  }, []);

  // filterDataByCompany('naver') => naver에 해당되는 데이터만 포함된 배열 반환
  const filterDataByCompany = useCallback(
    (company: CompanyType) => {
      return data.filter((item) => item.channel === company);
    },
    [data],
  );

  // sumTargetDataByCompany('naver', 'cost') => naver의 모든 cost를 더한 숫자 반환
  const sumTargetDataByCompany = useCallback(
    (company: CompanyType, target: TargetType) => {
      const targetData = target;
      return filterDataByCompany(company)
        .map((item) => item[targetData])
        .reduce((prev, current) => prev + current, 0);
    },
    [filterDataByCompany],
  );

  // sumTargetDataOfCompanies(cost) => 모든 회사의 cost를 더한 숫자 반환
  const sumTargetDataOfCompanies = useCallback(
    (target: TargetType): number => {
      return (
        sumTargetDataByCompany('google', target) +
        sumTargetDataByCompany('facebook', target) +
        sumTargetDataByCompany('naver', target) +
        sumTargetDataByCompany('kakao', target)
      );
    },
    [sumTargetDataByCompany],
  );

  // 차트에 전달해야 하는 데이터를 얻을 수 있다
  // [{name: cost, google: 123, naver: 456...}, {name: convValue...},...]
  const getTransformedData = useCallback((): TransformedMediaData[] => {
    const transformedData: TransformedMediaData[] = [];
    const targets: TargetType[] = ['cost', 'convValue', 'imp', 'click', 'conv'];

    data.length !== 0 &&
      targets.forEach((target: TargetType) => {
        transformedData.push({
          name: target,
          google:
            (sumTargetDataByCompany('google', target) /
              sumTargetDataOfCompanies(target)) *
            100,
          facebook:
            (sumTargetDataByCompany('facebook', target) /
              sumTargetDataOfCompanies(target)) *
            100,
          naver:
            (sumTargetDataByCompany('naver', target) /
              sumTargetDataOfCompanies(target)) *
            100,
          kakao:
            (sumTargetDataByCompany('kakao', target) /
              sumTargetDataOfCompanies(target)) *
            100,
          total: sumTargetDataOfCompanies(target),
        });
      });
    return transformedData;
  }, [data.length, sumTargetDataByCompany, sumTargetDataOfCompanies]);

  return { getTransformedData };
}

export default useTransformedData;
