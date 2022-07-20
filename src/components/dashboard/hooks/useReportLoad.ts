import React from 'react';
import { getTotalDataAPI } from 'libs/api/getDataAPI';
import { ReportData } from 'types/dashboard';
import { AxiosResponse } from 'axios';
import { INITIAL_WEEK_STATE } from 'libs/utils/constants';

const useReportLoad = (gteDate = '', lteDate = '') => {
  const [totalDataContainingDates, setTotalData] =
    React.useState<ReportData[]>();
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
