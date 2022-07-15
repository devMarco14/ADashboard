import { ReportData } from 'types/dashboard';
import apiClient from '.';

export const getTotalReportAPI = async (): Promise<ReportData[]> => {
  const response = await apiClient.get('/report');
  return response.data;
};
