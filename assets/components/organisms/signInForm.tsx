import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Controller, Control, UseFormHandleSubmit } from 'react-hook-form';
import { Alert } from 'components/atoms/alert';
import { Button } from 'components/atoms/button';
import { Container } from 'components/atoms/container';
import { TextField } from 'components/atoms/textField';
import { Typography } from 'components/atoms/typography';
import { LockedAvatar } from 'components/molecules/lockedAvatar';

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

type Props = {
  control: Control<FormValue>;
  error: string;
  handleSubmit: UseFormHandleSubmit<FormValue>;
  onSubmit: (data: FormValue) => void;
};

export const SignInForm: React.VFC<Props> = ({
  control,
  error,
  handleSubmit,
  onSubmit,
}) => {
  const classes = useStyles();
  const formInputOptions = {
    variant: 'outlined',
    margin: 'normal',
    required: true,
    fullWidth: true,
  } as const;

  return (
    <Container className={clsx(classes.paper)} maxWidth='xs'>
      <LockedAvatar />
      <Typography variant='h5'>Sign in</Typography>
      <form className={classes.form}>
        {error.length != 0 && <Alert severity='error' >{error}</Alert>}
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
