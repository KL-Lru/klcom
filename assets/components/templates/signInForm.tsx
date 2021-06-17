import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';

import { Redirect } from 'react-router-dom';
import {
  Alert,
  Button,
  Container,
  TextField,
  Typography,
} from 'components/atoms';
import { LockedAvatar } from 'components/molecules';
import { signIn } from 'requests/internal/authorize';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
  submit: {
    marginTop: theme.spacing(2),
  },
}));

type FormValue = {
  email: string;
  password: string;
};

export const SignInForm: React.VFC = () => {
  const classes = useStyles();
  const formInputOptions = {
    variant: 'outlined',
    margin: 'normal',
    required: true,
    fullWidth: true,
  } as const;
  const { handleSubmit, control } = useForm<FormValue>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const onSubmit = (data: FormValue) => {
    signIn(data)
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setError('Sign in failed.');
      });
  };

  if (success) return <Redirect to='/'></Redirect>;
  return (
    <Container className={clsx(classes.paper)} maxWidth='xs'>
      <LockedAvatar />
      <Typography variant='h5'>Sign in</Typography>
      <form className={classes.form}>
        {error.length != 0 && <Alert severity='error'>{error}</Alert>}
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <TextField {...field} {...formInputOptions} label='Email' />
          )}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              {...formInputOptions}
              label='Password'
              type='password'
            />
          )}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          onClick={handleSubmit(onSubmit)}
          className={clsx(classes.submit)}
          fullWidth
        >
          Sign in
        </Button>
      </form>
    </Container>
  );
};
