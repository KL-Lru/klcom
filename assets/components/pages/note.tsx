import React from 'react';
import { BasicBlock } from 'components/molecules/basicBlock';
import { Header } from 'components/templates/header';

export const Note: React.VFC = () => {
  return (
    <>
      <Header />
      <BasicBlock
        title={'Note'}
        id={'note'}
        body={"準備中..."}
      />
    </>
  )
}
