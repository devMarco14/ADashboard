import apiClient from '.';

export const getTotalDataAPI = async (property: string, param = '') => {
  const response = await apiClient.get(`/${property}${param}`);
  return response;
};
