import React from 'react';
import { Meta } from 'components/atoms';
import { BasicBlock } from 'components/molecules';
import { Boundary } from 'components/molecules/boundary';
import { ChangeLog, Profile } from 'components/templates';

export const Top: React.VFC = () => {
  return (
    <>
      <Meta variant="title" value = {'Top'} />
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
