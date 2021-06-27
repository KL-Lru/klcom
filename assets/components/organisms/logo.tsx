import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { InternalLink, Typography } from 'components/atoms';
import { SITE_NAME } from 'constants/siteName';

const useStyles = makeStyles(theme => ({
  logoLink: {
    textDecoration: 'none',
  },
  logo: {
    color: theme.palette.primary.main,
    fontWeight: 200,
    fontFamily: 'raleway',
  },
}));

export const Logo: React.VFC = () => {
  const classes = useStyles();

  return (
    <InternalLink to={"/"} className={classes.logoLink}>
      <Typography
        variant='h3'
        align='left'
        color='primary'
        noWrap
        className={clsx(classes.logo)}
      >
        {SITE_NAME}
      </Typography>
    </InternalLink>
  );
};
