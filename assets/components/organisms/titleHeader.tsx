import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Toolbar } from 'components/atoms/toolbar';
import { Logo } from 'components/molecules/logo';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: 0,
  },
}));

export const TitleHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Toolbar className = {clsx(classes.root)}>
        <Logo />
      </Toolbar>
    </Fragment>
  )
}
