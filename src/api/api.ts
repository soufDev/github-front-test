import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { URL } from '../constants';

class ApiService {
  client: AxiosInstance;

  constructor() {
    const client = axios.create({
      baseURL: URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    this.client = client;
  }

  async get(path: string, options?: AxiosRequestConfig) {
    const response = await this.client.get(path, options);
    return response.data;
  }
}

export default new ApiService();