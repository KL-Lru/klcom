import React from 'react';
import {
  Suspense,
  ErrorBoundary,
  Progress,
  ErrorFallback,
} from 'components/atoms';

type Props = {
  children: React.ReactNode;
};

export const Boundary: React.VFC<Props> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Progress />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};
