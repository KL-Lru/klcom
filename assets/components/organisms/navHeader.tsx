import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Toolbar } from 'components/atoms';
import { ButtonLink } from 'components/molecules';
import { routings } from 'constants/routings';
import { strictValues } from 'utils/object';

const useStyles = makeStyles(theme => ({
  toolbar: {
    justifyContent: 'end',
    overflowX: 'auto',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(5),
  },
}));

export const NavHeader: React.VFC = () => {
  const classes = useStyles();
  const items = strictValues(routings);

  return (
    <Toolbar component='nav' variant='dense' className={clsx(classes.toolbar)}>
      {items.map(route => (
        <ButtonLink path={route.path} label={route.label} key={route.path} />
      ))}
    </Toolbar>
  );
};
