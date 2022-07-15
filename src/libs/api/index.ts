import axios from 'axios';
import { SERVER_URL } from 'libs/utils/constants';

const apiClient = axios.create({
  withCredentials: false,
  baseURL: SERVER_URL,
});

export default apiClient;
