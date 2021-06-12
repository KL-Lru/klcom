import React from 'react';
import { NavHeader } from 'components/organisms/navHeader';
import { routings } from 'constants/routings';
import { strictValues } from 'utils/object';

export const NavHeaderContainer: React.VFC = () => {
  const navItems = strictValues(routings).filter(route => route.intoNav);
  
  return (
    <NavHeader items = {navItems}/>
  )
}
