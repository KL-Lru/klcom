import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import 'devicon';

export * from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '110%',
  },
}));

const devIco =
  (iconName: string): React.VFC =>
  // eslint-disable-next-line react/display-name
  () => {
    const classes = useStyles();
    return <i className={clsx(iconName, classes.icon)} />;
  };

export const CppIcon = devIco('devicon-cplusplus-plain');
export const PythonIcon = devIco('devicon-python-plain');
export const RubyIcon = devIco('devicon-ruby-plain');
export const RustIcon = devIco('devicon-rust-plain');
export const TypescriptIcon = devIco('devicon-typescript-plain');

export const MysqlIcon = devIco('devicon-mysql-plain');
export const PostgresIcon = devIco('devicon-postgresql-plain');

export const KubernetesIcon = devIco('devicon-kubernetes-plain');

export const RailsIcon = devIco('devicon-rails-plain');
export const ReactIcon = devIco('devicon-react-plain');
