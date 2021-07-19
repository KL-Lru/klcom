import React from 'react';
import { colors } from '@material-ui/core';
import {
  createTheme,
  ThemeProvider as BaseThemeProvider,
} from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.cyan[800],
    },
  },
  typography: {
    fontFamily: ['Lato', '"Noto Sans JP"'].join(','),
  },
});

export const ThemeProvider: React.FC = props => {
  return <BaseThemeProvider theme={theme}>{props.children}</BaseThemeProvider>;
};
