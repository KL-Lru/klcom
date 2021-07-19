import React from 'react';
import clsx from 'clsx';

type Props = {
  contents: Prism.TokenStream
}
export const CodeChunk: React.VFC<Props> = ({contents}) => {
  if (contents instanceof Array) return <>{contents.map((chunk, idx) => <CodeChunk contents={chunk} key={idx}/>)}</>;
  if (typeof contents == 'string') return <>{contents}</>;
  return (
    <span className={clsx('token', contents.type)}>
      <CodeChunk contents = {contents.content} />
    </span>
  );
};
