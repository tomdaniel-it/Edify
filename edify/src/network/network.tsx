import axios from 'axios';

const BACKEND_URL = 'backend';

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
      throw new Error('An unknown error occured.');
    } else {
      throw new Error(error.response.data.error);
    }
  }
};

export const get = async (endpoint: string) => request(endpoint, 'get');

export const post = async (endpoint: string, data?: any) => request(endpoint, data, 'post');

export const put = async (endpoint: string, data?: any) => request(endpoint, data, 'put');

export const del = async (endpoint: string) => request(endpoint, 'delete');
