import React from 'react';
import { getTotalDataAPI } from 'libs/api/getDataAPI';
import { ReportData } from 'types/dashboard';

const useReportLoad = (gteDate = '', lteDate = '') => {
  // locaohost:json-server/report의 모든 데이터를 저장하는 state: Week 데이터로 가공하기 전 상태
  const [totalDataContainingDates, setTotalData] =
    React.useState<ReportData[]>();

  const optionalParam =
    gteDate !== '' && lteDate !== ''
      ? `?date_gte=${gteDate}&date_lte=${lteDate}`
      : '';

  React.useEffect(() => {
    const getReportData = async () => {
      try {
        const totalData = await getTotalDataAPI<ReportData[]>(
          'report',
          optionalParam,
        );
        setTotalData(totalData);
      } catch (error) {
        console.log(error);
      }
    };

    getReportData();
  }, [gteDate, lteDate]);

  return { totalDataContainingDates };
};

export default useReportLoad;
