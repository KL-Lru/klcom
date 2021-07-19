/* eslint-disable react/display-name */
import React from 'react';
import { makeStyles } from '@material-ui/core';

import ReactMarkdown from 'react-markdown';
import ReKatex from 'rehype-katex';
import ReBreak from 'remark-breaks';
import ReGfm from 'remark-gfm';
import ReImage from 'remark-images';
import ReMath from 'remark-math';
import ReToc from 'remark-toc';
import {
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from 'components/atoms';
import 'katex/dist/katex.min.css';
import { PrismCode } from 'components/molecules/prismCode';
import { PrismPre } from 'components/molecules/prismPre';
import { usePrism } from 'hooks/prism';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    lineHeight: theme.typography.body1.lineHeight,
  },
  h1: {
    marginBottom: '30px',
    marginTop: '15px',
  },
  h2: {
    marginBottom: '20px',
    marginTop: '15px',
  },
  h3: {
    marginBottom: '15px',
    marginTop: '15px',
  },
  table: {
    marginBottom: '10px',
    marginTop: '10px',
  }
}));

export const Markdown: React.VFC<{ markdown: string }> = ({ markdown }) => {
  usePrism();
  const classes = useStyles();
  return (
    <ReactMarkdown
      remarkPlugins={[ReGfm, ReMath, ReBreak, ReImage, [ReToc, { heading: '目次' }], ]}
      rehypePlugins={[ReKatex]}
      className={classes.root}
      components={{
        h1: node => {
          return <Typography variant={'h4'} className={classes.h1}>{node.children}</Typography>
        },
        h2: node => {
          return <Typography variant={'h5'} className={classes.h2}>{node.children}</Typography>
        },
        h3: node => {
          return <Typography variant={'h6'} className={classes.h3}>{node.children}</Typography>
        },
        p: node => {
          return <Typography variant={'body1'}>{node.children}</Typography>;
        },
        table: node => {
          return <Table className={classes.table}>{node.children}</Table>;
        },
        thead: node => {
          return <TableHead>{node.children}</TableHead>;
        },
        tbody: node => {
          return <TableBody>{node.children}</TableBody>;
        },
        tr: node => {
          return <TableRow>{node.children}</TableRow>;
        },
        th: node => {
          return (
            <TableCell variant={'head'} style={node.style}>
              {node.children}
            </TableCell>
          );
        },
        td: node => {
          return (
            <TableCell variant={'body'} style={node.style}>
              {node.children}
            </TableCell>
          );
        },
        ul: node => {
          return <List>{node.children}</List>;
        },
        li: node => {
          return (
            <ListItem
              alignItems={'flex-start'}
              style={{ flexFlow: 'column' }}
            >
              {node.children}
            </ListItem>
          );
        },
        pre: PrismPre,
        code: PrismCode,
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};
