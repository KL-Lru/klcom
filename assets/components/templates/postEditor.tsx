import React, { useEffect, useRef, useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Box } from 'components/atoms';
import { BasicBlock, Boundary, ProgressScreen } from 'components/molecules';
import { Markdown } from 'components/templates';
import { Editor, EditorRef } from 'components/templates/editor';
import { getPost, updatePost } from 'requests/internal/posts';

type Prop = {
  postId: number;
};

type FormValue = {
  title: string;
  body: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '2048px',
    marginLeft: '-512px',
  },
  segments: {
    maxWidth: '1024px',
  },
  submit: {
    marginTop: theme.spacing(2),
  },
}));

export const PostEditor: React.VFC<Prop> = ({postId}) => {
  const {data: post = null} = useQuery(['posts', postId], () => getPost(postId));

  const {handleSubmit, register, control, setValue, watch} = useForm<FormValue>({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      body: ''
    } 
  });
  const title = watch('title', '');


  const monaco = useRef<EditorRef>(null);
  const [editData, setEditData] = useState<string>('');
  const classes = useStyles();
  useEffect(() => {
    if (post) {
      setEditData(post.body);
      setValue('title', post.title);
      setValue('body', post.body);
    }
  }, [post]);

  const handleChange = (currentValue: string) => {
    setEditData(currentValue);
    setValue('body', currentValue);
  }
  const onSubmit = (value: FormValue) => {
    return updatePost(postId, {id: postId, publish: true, ...value});
  }

  if (post == null) return <ProgressScreen isOpen={post == null} />;  

  return (
    <BasicBlock 
      title={'  '}
      body={
      <div className={classes.root}>
        <Box display={'flex'} >
          <Box flexGrow={1} p={1} className={classes.segments}>
            <Controller
              name='title'
              control={control}
              render={({ field }) => (
                <TextField {...field} variant={'outlined'} margin='normal' required fullWidth label='Title' />
              )}
            />
            <input hidden name='body' ref={() => {register('body')}} />

            <Boundary>
              <Editor 
                value={post.body} 
                language={'markdown'} 
                theme={'vs-dark'} 
                ref={monaco} 
                onChange={handleChange}
              />
            </Boundary>
          </Box>
          <Box flexGrow={1} p={1} className={classes.segments}>
            <Boundary>
              <BasicBlock
                title={title}
                body={<Markdown markdown={editData} />}
              />
            </Boundary>
          </Box>
        </Box>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          onClick={handleSubmit(onSubmit)}
          className={clsx(classes.submit)}
          fullWidth
        >
          Save
        </Button>
 
      </div>
      }
    />    
  )
}
