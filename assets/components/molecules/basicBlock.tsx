import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Paper, Typography } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  paper: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(5),
  },
  title: {
    marginBottom: '40px',
    fontWeight: 'lighter',
    letterSpacing: '0.02em',
    fontFamily: 'raleway',
  },
  body: {},
}));

type Props = {
  title: React.ReactNode;
  body: React.ReactNode;
  id?: string;
};

export const BasicBlock: React.VFC<Props> = ({ title, body, id }) => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={clsx(classes.paper)}>
      <Typography
        className={clsx(classes.title)}
        variant={'h4'}
        component={'div'}
        id={id}
      >
        {title}
      </Typography>
      <Typography
        className={clsx(classes.body)}
        variant={'body1'}
        component={'div'}
      >
        {body}
      </Typography>
    </Paper>
  );
};
