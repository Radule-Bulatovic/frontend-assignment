import axios, { AxiosResponse } from 'axios';

import { ENDPOINTS } from '../constants';
import { ProductT } from '../types';

export const products = {
  all: (): Promise<AxiosResponse<ProductT[], any>> => axios(ENDPOINTS.products.all),
  categories: (): Promise<AxiosResponse<string[], any>> => axios(ENDPOINTS.products.categories)
};
