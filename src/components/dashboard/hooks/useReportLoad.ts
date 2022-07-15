import React from 'react';
import { getTotalReportAPI } from 'libs/api/reportAPI';
import { ReportData } from 'types/dashboard';

const useReportLoad = () => {
  // locaohost:json-server/report의 모든 데이터를 저장하는 state: Week 데이터로 가공하기 전 상태
  const [totalDataContainingDates, setTotalData] =
    React.useState<ReportData[]>();

  React.useEffect(() => {
    const getReportData = async () => {
      try {
        const totalData = await getTotalReportAPI();
        setTotalData(totalData);
      } catch (error) {
        console.log(error);
      }
    };

    getReportData();
  }, []);

  return { totalDataContainingDates };
};

export default useReportLoad;
