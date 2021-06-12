import React from 'react';
import { TitleHeader } from 'components/organisms/titleHeader';
import { NavHeaderContainer } from 'containers/organisms/navHeader';

export const Header: React.FC = () => {
  return (
    <>
      <TitleHeader />
      <NavHeaderContainer />
    </>
  );
}
