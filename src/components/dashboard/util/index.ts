import { format } from 'date-fns';
import { KOREAN_DATE_FORMAT } from 'libs/utils/constants';

// yyyy년 MM월 dd일 ~ yyyy년 MM월 dd일로 데이터를 표시하는 함수
export const formatize = (firstDate: string, lastDate: string) => {
  return `${format(new Date(firstDate), KOREAN_DATE_FORMAT)} ~
  ${format(new Date(lastDate), KOREAN_DATE_FORMAT)}`;
};
