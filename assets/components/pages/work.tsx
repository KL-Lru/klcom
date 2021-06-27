import React from 'react';
import { Meta } from 'components/atoms';
import { BasicBlock } from 'components/molecules';

export const Work: React.VFC = () => {
  return (
    <>
      <Meta variant="title" value = {'Works'} />
      <BasicBlock
        title={'Work'}
        id={'work'}
        body={"準備中..."}
      />
    </>
  );
}
