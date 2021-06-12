import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { SignInForm } from 'components/organisms/signInForm';
import { signIn } from 'requests/internal/authorize';

export type FormValue = {
  email: string;
  password: string;
};

export const SignInFormContainer: React.VFC = () => {
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
    signIn(data).then(
      () => {setSuccess(true);}
    ).catch(
      () => {setError("Failed");}
    );
  };

  if (success) return <Redirect to='/'></Redirect>
  return <SignInForm {...{ handleSubmit, control, onSubmit, error }} />;
};
