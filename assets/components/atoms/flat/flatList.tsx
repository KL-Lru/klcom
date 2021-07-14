import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  list: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  }
}));

type Props = {
  children: React.ReactNode;
}

export const FlatList: React.VFC<Props> = ({children}) => {
  const classes = useStyles();
  return (
    <ul className={clsx(classes.list)}>
      {children}
    </ul>
  )
}
