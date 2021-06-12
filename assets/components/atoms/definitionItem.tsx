import React from 'react';

import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import {TableCell} from 'components/atoms/tableCell';
import {TableRow} from 'components/atoms/tableRow';

const useStyles = makeStyles((theme) => ({
  term: {
    whiteSpace: 'nowrap',
    wordBreak: 'keep-all',
    paddingLeft: 0,
    border: 'none',
    borderRight: `dashed 1px ${theme.palette.divider}`,
  },
  description: {
    width: '100%',
    border: 'none',
  }
}))

type Props = {
  term: React.ReactNode;
  description: React.ReactNode;
}

export const DefinitionItem: React.VFC<Props> = ({term, description}) => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={clsx(classes.term)}>
        {term}
      </TableCell>
      <TableCell className={clsx(classes.description)}>
        {description}
      </TableCell>
    </TableRow>
  );
}
