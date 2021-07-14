import React from 'react';
import { useParams } from 'react-router';
import { ErrorFallback, Meta } from 'components/atoms';
import { Boundary } from 'components/molecules';
import { PostTemplate } from 'components/templates/postTemplate';

type ContextProp = {
  postId?: string;
}

export const Show: React.VFC = () => {
  const { postId } = useParams<ContextProp>();

  if (postId == undefined) return <ErrorFallback error={new Error("不明なパラメータが指定されました")}/>;

  const numId = parseInt(postId);
  return (
    <>
      <Meta variant="title" value={'Notes'} />
      <Boundary>
        <PostTemplate postId={numId} />
      </Boundary>
    </>
  );
};
