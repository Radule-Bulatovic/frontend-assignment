import axios, { AxiosResponse } from 'axios';

import { ENDPOINTS } from '../constants';
import { LoginT, UserT } from '../types';

export const auth = {
  login: (credentials: LoginT): Promise<AxiosResponse<string, any>> =>
    axios.post(ENDPOINTS.auth.login, JSON.stringify(credentials)),
  register: (credentials: UserT): Promise<AxiosResponse<UserT, any>> =>
    axios(ENDPOINTS.auth.register, {
      data: JSON.stringify(credentials),
      method: 'POST'
    })
};
