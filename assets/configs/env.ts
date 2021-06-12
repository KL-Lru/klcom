import dotenv from 'dotenv';

const denv = dotenv.config().parsed;
const penv = process.env;
export const env = { ...denv, ...penv };

export const isValidMode = (
  arg: string | undefined,
): arg is 'production' | 'development' | undefined => {
  if (arg == undefined || arg == 'production' || arg == 'development') {
    return true;
  }
  return false;
};

export const isValidHost = (arg: string | undefined): arg is string => {
  if (arg != undefined && arg.startsWith('http')) return true;
  return false;
};
