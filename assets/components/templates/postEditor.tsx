import React from 'react';
import { useQuery } from 'react-query';
import { BasicBlock, ProgressScreen } from 'components/molecules';
import { Markdown } from 'components/templates';
import { getPost } from 'requests/internal/posts';

type Prop = {
  postId: number;
};

export const PostTemplate: React.VFC<Prop> = ({postId}) => {
  const {data: post = null} = useQuery(['posts', postId], () => getPost(postId))

  if (post == null) return <ProgressScreen isOpen={post == null} />;
  return (
    <BasicBlock 
      title={post.title}
      body={
        <Markdown markdown={post.body} />
      }
    />    
  )
}
