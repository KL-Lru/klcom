import React from 'react';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string; 
}

export const PrismPre: React.VFC<Props> = ({children, className}) => {
  return (
    <pre className={clsx('line-numbers', 'show-language', {'language-unknown': className == undefined}, className)}>
      {children}
    </pre>
  )
}
