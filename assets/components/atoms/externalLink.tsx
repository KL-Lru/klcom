import React from 'react';

type Props = {
  url: string;
  children: React.ReactNode;
};

export const ExternalLink: React.VFC<Props> = ({ url, children }) => {
  return <a href={url}>{children}</a>;
};
