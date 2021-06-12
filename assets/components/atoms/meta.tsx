import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  children: React.ReactNode;
}

export const Meta: React.VFC<Props> = props => {  
  return (
    <Helmet>
      {props.children}
    </Helmet>
  );
};
