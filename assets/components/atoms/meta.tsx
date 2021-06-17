import React from 'react';
import { Helmet } from 'react-helmet';
import { SITE_NAME } from 'constants/siteName';

type Props = {
  variant: 'title';
  value: string;
};

export const Meta: React.VFC<Props> = props => {
  const { variant, value } = props;
  const metaGenerator = () => {
    switch (variant) {
      case 'title':
        return <title>{`${value} | ${SITE_NAME}`}</title>;
    }
  };

  return <Helmet>{metaGenerator()}</Helmet>;
};
