import axios from 'axios';
import { isProduction } from '../util';

const BACKEND_URL = isProduction() ? 'backend' : 'http://localhost:8000/backend';

type Method = 'get' | 'post' | 'put' | 'delete';

const request = async (endpoint: string, method: Method, data?: any) => {
  try {
    return (await axios({
      method,
      url: `${BACKEND_URL}/${endpoint}`,
      data,
    })).data;
  } catch (error) {
    if (!error.response || !error.response.data || !error.response.data.error) {
      console.trace(error);
      throw new Error('An unknown error occured.');
    } else {
      console.trace(error.response.data.error);
      throw new Error(error.response.data.error);
    }
  }
};

export const get = async (endpoint: string) => request(endpoint, 'get');

export const post = async (endpoint: string, data?: any) => request(endpoint, 'post', data);

export const put = async (endpoint: string, data?: any) => request(endpoint, 'put', data);

export const del = async (endpoint: string) => request(endpoint, 'delete');
