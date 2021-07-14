import React from 'react';
import { Alert } from 'components/atoms';

type Props = {
  error: Error;
};

export const ErrorFallback: React.VFC<Props> = ({ error }) => {
  return <Alert severity='error'>{error.message}</Alert>;
};
