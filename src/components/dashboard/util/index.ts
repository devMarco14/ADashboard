import { format } from 'date-fns';
import { KOREAN_DATE_FORMAT } from 'libs/utils/constants';

export const formatize = (firstDate: string, lastDate: string) => {
  return `${format(new Date(firstDate), KOREAN_DATE_FORMAT)} ~
  ${format(new Date(lastDate), KOREAN_DATE_FORMAT)}`;
};
