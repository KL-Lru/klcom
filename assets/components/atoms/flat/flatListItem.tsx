import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  item: {
    padding: theme.spacing(0.5),
  }
}));

type Props = {
  children: React.ReactNode;
}

export const FlatListItem: React.VFC<Props> = ({children}) => {
  const classes = useStyles();
  return (
    <li className={clsx(classes.item)}>
      {children}
    </li>
  )
}
