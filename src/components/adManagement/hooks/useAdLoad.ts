import { getTotalAdAPI } from 'libs/api/adAPI';
import { AdsData } from 'types/ad';
import { useEffect, useState } from 'react';
import { INITIAL_AD_DATA } from 'libs/utils/initialDatas';
import useToggle from 'hooks/useToggle';

/**
 * @decoration 이건 ad를 불러오는 훅 입니다.
 */
const useAdLoad = (state: string) => {
  const [adData, setAdData] = useState<AdsData[]>(INITIAL_AD_DATA);
  const [detectData, setDetectData] = useToggle(true);
  // useEffect로 첫 렌더링때 data를 adData에 보관

  useEffect(() => {
    const getData = async () => {
      // 트라이 캐치로 에러처리
      try {
        const data = await getTotalAdAPI(state);
        setAdData(data.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [detectData, state]);

  // 보관한 adData 리턴
  return { adData, setDetectData };
};

export default useAdLoad;
