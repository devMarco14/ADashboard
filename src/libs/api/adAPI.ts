import { AdsData } from 'types/ad';
import apiClient from '.';

export const getTotalAdAPI = async () => {
  const response = await apiClient.get('/ad');
  return response.data;
};

export const putAdByIdAPI = async (body: AdsData) => {
  const response = await apiClient.patch(`/ad/${body.id}`, body);
  return response.data;
};
