import React from 'react';
import { getTotalDataAPI } from 'libs/api/getDataAPI';
import { MediaData } from 'types/media-status';
import { INITIAL_WEEK_STATE } from 'libs/utils/constants';

const useMediaLoad = (gteDate: string, lteDate: string) => {
  // locaohost:json-server/report의 모든 데이터를 저장하는 state: Week 데이터로 가공하기 전 상태
  const [totalDataContainingDates, setTotalData] =
    React.useState<MediaData[]>();

  React.useEffect(() => {
    const getMediaData = async () => {
      try {
        const mediaResponse = await getTotalDataAPI(
          'media',
          `?date_gte=${gteDate}&date_lte=${lteDate}`,
        );
        setTotalData(mediaResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (lteDate !== INITIAL_WEEK_STATE[1]) {
      getMediaData();
    }
  }, [lteDate]);

  return { totalDataContainingDates };
};

export default useMediaLoad;
