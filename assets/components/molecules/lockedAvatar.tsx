import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Avatar } from 'components/atoms';
import { LockOutlined } from 'components/atoms/icons';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export const LockedAvatar: React.VFC = () => {
  const classes = useStyles();

  return (
    <Avatar className={clsx(classes.avatar)}>
      <LockOutlined />
    </Avatar>
  );
};
