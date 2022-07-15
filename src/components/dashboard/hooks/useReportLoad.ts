import React from 'react';
import { getTotalReportAPI } from 'libs/api/reportAPI';
import { ReportData } from 'types/dashboard';

const useReportLoad = () => {
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
