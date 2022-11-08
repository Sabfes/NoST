import { instanceWithoutToken } from './index';

export const apiAuth = {
  loginMe: (data) => {
    return instanceWithoutToken.post(
      `/api/auth/login`,
      data
    );
  },
  regMe: (data) => {
    return instanceWithoutToken.post(
      '/api/auth/registration',
      data
    )
  }
};
