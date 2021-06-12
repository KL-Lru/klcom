import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Button } from 'components/atoms/button';
import { Link } from 'components/atoms/link';
import { RouteConfig } from 'types/routes';

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
  route: RouteConfig;
};

export const NavLink: React.VFC<Props> = ({ route }) => {
  const classes = useStyles();

  return (
    <Link to={route.path} className={clsx(classes.link)}>
      <Button className={clsx(classes.linkButton)} fullWidth>
        {route.label}
      </Button>
    </Link>
  );
};
