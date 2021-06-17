import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Button, InternalLink } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1),
  },
  linkButton: {
    width: '100%',
    padding: theme.spacing(1),
  },
}));

type Props = {
  path: string;
  label: string;
};

export const ButtonLink: React.VFC<Props> = ({ path, label }) => {
  const classes = useStyles();

  return (
    <InternalLink to={path} className={clsx(classes.link)}>
      <Button className={clsx(classes.linkButton)} fullWidth>
        {label}
      </Button>
    </InternalLink>
  );
};
