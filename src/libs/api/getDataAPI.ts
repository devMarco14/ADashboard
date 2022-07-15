import { ReportData, MediaData } from 'types/dashboard';
import apiClient from '.';

// report 데이터를 받아오는 api
export const getTotalDataAPI = async (
  property: string,
  param = '',
): Promise<ReportData[] | MediaData[]> => {
  const response = await apiClient.get(`/${property}${param}`);
  return response.data;
};
