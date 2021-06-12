import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { QueryProvider } from 'providers/queryProvider';
import { ThemeProvider } from 'providers/themeProvider';
import { Router } from 'routes';
import 'constants/fonts';

const useStyles = makeStyles(() => ({
  main: {
    maxWidth: '1024px',
  }
}))

export const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <ThemeProvider>
        <QueryProvider >
          <Router />
        </QueryProvider>
      </ThemeProvider>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
