import apiClient from '.';

// report 데이터를 받아오는 api
export const getTotalDataAPI = async (property: string, param = '') => {
  const response = await apiClient.get(`/${property}${param}`);
  return response;
};
