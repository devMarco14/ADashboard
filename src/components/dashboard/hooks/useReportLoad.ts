import React from 'react';
import { getTotalDataAPI } from 'libs/api/getDataAPI';
import { ReportData } from 'types/dashboard';
import { AxiosResponse } from 'axios';
import { INITIAL_WEEK_STATE } from 'libs/utils/constants';

const useReportLoad = (gteDate = '', lteDate = '') => {
  // locaohost:json-server/report의 모든 데이터를 저장하는 state
  const [totalDataContainingDates, setTotalData] =
    React.useState<ReportData[]>();
  // Week 리스트를 만들기 위해 첫 번째 report 데이터를 저장하는 state
  const [firstReportData, setFirstReportData] = React.useState<AxiosResponse>();

  const optionalParam =
    gteDate !== '' && lteDate !== ''
      ? `?date_gte=${gteDate}&date_lte=${lteDate}`
      : '?_limit=1&_page=1';

  React.useEffect(() => {
    const getReportData = async () => {
      try {
        const reportResponse = await getTotalDataAPI('report', optionalParam);
        setTotalData(reportResponse.data);
        setFirstReportData(reportResponse);
      } catch (error) {
        console.log(error);
      }
    };

    if (lteDate !== INITIAL_WEEK_STATE[1]) {
      getReportData();
    }
  }, [lteDate]);

  return { totalDataContainingDates, firstReportData };
};

export default useReportLoad;
