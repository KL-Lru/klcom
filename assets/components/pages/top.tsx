import React from 'react';
import { BasicBlock } from 'components/molecules';
import { Boundary } from 'components/molecules/boundary';
import { ChangeLog, Header, Profile } from 'components/templates';

export const Top: React.VFC = () => {
  return (
    <>
      <Header />
      <Profile />
      <BasicBlock
        title={'Change Log'}
        id={'change_log'}
        body={
          <Boundary>
            <ChangeLog />
          </Boundary>
        }
      />
    </>
  );
};
