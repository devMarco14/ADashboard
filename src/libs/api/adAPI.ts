import apiClient from '.';

export const getTotalAdAPI = async () => {
  const response = await apiClient.get('/ad');
  return response.data;
};
