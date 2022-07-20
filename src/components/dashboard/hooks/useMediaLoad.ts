import React from 'react';
import { getTotalDataAPI } from 'libs/api/getDataAPI';
import { INITIAL_WEEK_STATE } from 'libs/utils/constants';
import { MediaData } from 'types/dashboard';

const useMediaLoad = (gteDate: string, lteDate: string) => {
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
