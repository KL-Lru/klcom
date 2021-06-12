import { ChangeLog } from 'types/changeLog';
import api from './api';

export const getChangeLogs = async (): Promise<ChangeLog[]> => {
  return await api.get('change_logs').json();
}
