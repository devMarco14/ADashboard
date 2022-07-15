import React from 'react';
import { getTotalDataAPI } from 'libs/api/getDataAPI';
import { MediaData } from 'types/dashboard';

const useMediaLoad = (gteDate: string, lteDate: string) => {
  // locaohost:json-server/report의 모든 데이터를 저장하는 state: Week 데이터로 가공하기 전 상태
  const [totalDataContainingDates, setTotalData] =
    React.useState<MediaData[]>();

  React.useEffect(() => {
    const getMediaData = async () => {
      try {
        const totalData = (await getTotalDataAPI(
          'media',
          `?date_gte=${gteDate}&date_lte=${lteDate}`,
        )) as MediaData[];
        setTotalData(totalData);
      } catch (error) {
        console.log(error);
      }
    };
    if (gteDate && lteDate) {
      getMediaData();
    }
  }, [gteDate, lteDate]);

  return { totalDataContainingDates };
};

export default useMediaLoad;
