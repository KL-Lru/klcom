import { entryof } from 'types/entryof';
import { valueof } from 'types/valueof';

export const strictKeys = <T>(obj: T): Array<keyof T> => {
  return Object.keys(obj) as Array<keyof T>;
};

export const strictValues = <T>(obj: T): Array<valueof<T>> => {
  return Object.values(obj) as Array<valueof<T>>;
};

export const strictEntries = <T>(obj: T): Array<entryof<T>> => {
  return Object.entries(obj) as Array<entryof<T>>;
};
