import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Backdrop } from 'components/atoms/backdrop';
import { Progress } from 'components/atoms/progress';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
  progress: {
    color: '#fff',
  }
}));

type Props = {
  isOpen: boolean;
}

export const ProgressScreen: React.VFC<Props> = ({isOpen}) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop}  open={isOpen}>
      <Progress className={classes.progress}/>
    </Backdrop>
  )
}
