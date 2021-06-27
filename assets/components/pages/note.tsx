import React from 'react';
import { Meta } from 'components/atoms';
import { Boundary } from 'components/molecules';
import { PostList } from 'components/templates';

export const Note: React.VFC = () => {
  return (
    <>
      <Meta variant="title" value = {'Notes'} />
      <Boundary>
        <PostList />
      </Boundary>
    </>
  )
}
