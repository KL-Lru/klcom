import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Link } from 'components/atoms/link';
import { Typography } from 'components/atoms/typography';
import { routings } from 'constants/routings';
import { SITE_NAME } from 'constants/siteName';

const useStyles = makeStyles(theme => ({
  logoLink: {
    textDecoration: 'none',
  },
  logo: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontFamily: 'raleway'
  },
}));

export const Logo: React.VFC = () => {
  const classes = useStyles();

  return (
    <Link to={routings.top.path} className={classes.logoLink}>
      <Typography
        variant='h3'
        align='left'
        color='primary'
        noWrap
        className={clsx(classes.logo)}
      >
        {SITE_NAME}
      </Typography>
    </Link>
  );
};
