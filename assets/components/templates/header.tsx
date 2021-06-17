import React from 'react';
import { NavHeader } from 'components/organisms';
import { TitleHeader } from 'components/organisms/titleHeader';

export const Header: React.FC = () => {
  return (
    <>
      <TitleHeader />
      <NavHeader />
    </>
  );
}
