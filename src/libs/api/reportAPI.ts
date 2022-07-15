import { ReportData } from 'types/dashboard';
import apiClient from '.';

// report 데이터를 받아오는 api
export const getTotalReportAPI = async (): Promise<ReportData[]> => {
  const response = await apiClient.get('/report');
  return response.data;
};
