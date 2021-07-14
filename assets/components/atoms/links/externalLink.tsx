import React from 'react';

type Props = {
  url: string;
  children: React.ReactNode;
};

export const ExternalLink: React.VFC<Props> = ({ url, children }) => {
  const href = url.startsWith('http') ? url : '#';
  return <a href={href}>{children}</a>;
};
