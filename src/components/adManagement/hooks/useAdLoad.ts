import { getTotalAdAPI } from 'libs/api/adAPI';
import { AdsData } from 'types/ad';
import { useEffect, useState } from 'react';
import { INITIAL_AD_DATA } from 'libs/utils/initialDatas';
import useToggle from 'hooks/useToggle';

const useAdLoad = (state: string) => {
  const [adData, setAdData] = useState<AdsData[]>(INITIAL_AD_DATA);
  const [detectData, setDetectData] = useToggle(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTotalAdAPI(state);
        setAdData(data.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [detectData, state]);

  return { adData, setDetectData };
};

export default useAdLoad;
