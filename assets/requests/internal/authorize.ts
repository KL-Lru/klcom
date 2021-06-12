import api from './api';

type Param = {
  email: string;
  password: string;
}

export const signIn = async (param: Param): Promise<void> => {
  await api.post('auths/signin', {json: param});
};
