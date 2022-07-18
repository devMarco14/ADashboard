import { AdsData } from 'types/ad';
import apiClient from '.';

export const getTotalAdAPI = async (state: string) => {
  const response = await apiClient.get(`/ad?status_like=${state}`);
  return response.data;
};

export const putAdByIdAPI = async (body: AdsData) => {
  const response = await apiClient.patch(`/ad/${body.id}`, body);
  return response.data;
};
