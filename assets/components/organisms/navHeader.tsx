import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Toolbar } from 'components/atoms';
import { ButtonLink } from 'components/molecules';

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

  return (
    <Toolbar component='nav' variant='dense' className={clsx(classes.toolbar)}>
      <ButtonLink path={'/'} label={'Top'} />
      <ButtonLink path={'/notes'} label={'Note'} />
      <ButtonLink path={'/works'} label={'Work'} />
    </Toolbar>
  );
};
