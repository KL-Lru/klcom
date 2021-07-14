import React from 'react';

import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { TableCell , TableRow } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  cellRoot: {
    "&.MuiTableCell-root":{
      borderBottom: 'none',
    }
  },
  term: {
    whiteSpace: 'nowrap',
    wordBreak: 'keep-all',
    paddingLeft: 0,
    borderRight: `dashed 1px ${theme.palette.divider}`,
  },
  description: {
    width: '100%',
  },
}));

type Props = {
  term: React.ReactNode;
  description: React.ReactNode;
};

export const DefinitionItem: React.VFC<Props> = ({ term, description }) => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={clsx(classes.term, classes.cellRoot)}>{term}</TableCell>
      <TableCell className={clsx(classes.description, classes.cellRoot)}>{description}</TableCell>
    </TableRow>
  );
};
