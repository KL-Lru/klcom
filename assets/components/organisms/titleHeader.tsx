import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Toolbar } from 'components/atoms';
import { Logo } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: 0,
  },
}));

export const TitleHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.root)}>
      <Logo />
    </Toolbar>
  );
};
