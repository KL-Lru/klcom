import React from 'react';
import clsx from 'clsx';
import { CodeChunk } from 'components/atoms/codeChunk';
import { usePrism } from 'hooks/prism';

type Props = {
  children: React.ReactNode[];
  className?: string; 
}

export const PrismCode: React.VFC<Props> = ({children, className}) => {
  const {tokenize} = usePrism();
  const langs = className?.match(/language-([^ ]*)/);
  if (langs == null){
    return (
      <code className={clsx({'language-unknown': !className}, className)} style={{padding: !className ? '5px' : ''}}>
        {children}
      </code>
    ) 
  }

  const lang = langs[1] || 'unknown';
  const isString = (arg: unknown): arg is string => typeof arg == 'string';
  const chunksList = children.filter(isString).map(c => tokenize(lang, c));
  return (
    <code  className={clsx({'language-unknown': !className}, className)} style={{padding: !className ? '5px' : ''}}>
      {chunksList.map((chunks, idx) => <CodeChunk contents={chunks} key={idx}/>)} 
    </code>
  )
};

