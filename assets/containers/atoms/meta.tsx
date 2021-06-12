import React from 'react';
import { Meta } from 'components/atoms/meta';
import { SITE_NAME } from 'constants/siteName';
import { MetaConfig } from 'types/meta';

type Props = MetaConfig;

export const MetaContainer: React.VFC<Props> = props => {
  const { variant, value } = props;
  const metaGenerator = () => {
    switch (variant) {
      case 'title':
        return <title>{`${value} | ${SITE_NAME}`}</title>;
    }
  };

  return <Meta>{metaGenerator()}</Meta>;
};

