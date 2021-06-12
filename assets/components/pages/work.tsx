import React from 'react';
import { BasicBlock } from 'components/molecules/basicBlock';
import { Header } from 'components/templates/header';

export const Work: React.VFC = () => {
  return (
    <>
      <Header />
      <BasicBlock
        title={'Work'}
        id={'work'}
        body={"準備中..."}
      />
    </>
  );
}
