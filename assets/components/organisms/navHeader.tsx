import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Toolbar } from 'components/atoms/toolbar';
import { NavLink } from 'components/molecules/navLink';
import { RouteConfig } from 'types/routes';

const useStyles = makeStyles(theme => ({
  toolbar: {
    justifyContent: 'end',
    overflowX: 'auto',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(5),
  },
}));

type Props = {
  items: RouteConfig[];
}

export const NavHeader: React.VFC<Props> = ({items}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Toolbar component='nav' variant='dense' className={clsx(classes.toolbar)}>
        {items.map((route) => <NavLink route = {route} key={route.path}/>)}
      </Toolbar>
    </Fragment>
  );
};
