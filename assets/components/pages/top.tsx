import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'components/atoms/errorFallback';
import { Progress } from 'components/atoms/progress';
import { BasicBlock } from 'components/molecules/basicBlock';
import { Header } from 'components/templates/header';
import { Profile } from 'components/templates/profile';
import { ChangeLogContainer } from 'containers/templates/changeLog';

export const Top: React.VFC = () => {
  return (
    <>
      <Header />
      <Profile />
      <BasicBlock
        title={'Change Log'}
        id={'change_log'}
        body={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Progress />}>
              <ChangeLogContainer />
            </Suspense>
          </ErrorBoundary>
        }
      />
    </>
  );
};
