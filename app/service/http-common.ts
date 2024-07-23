import axios from 'axios';
import {CONFIG} from '../constants/config';

const authAxios = axios.create({
  baseURL: CONFIG.BASE_URL,
  timeout: 60000,
  timeoutErrorMessage: 'timeout',
  headers: {
    'content-type': 'application/json; multipart/form-data',
    'Content-Type': 'application/json',
    Accept: 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});
authAxios.interceptors.request.use(async (configAuth: any) => {
  console.log(`configAuth`, configAuth);
  return configAuth;
});
authAxios.interceptors.response.use((res: any) => {
  return res;
});
export default authAxios;
