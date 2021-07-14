import React from 'react';
import { CardActionArea, makeStyles } from '@material-ui/core';
import moment from 'moment';
import { useQuery } from 'react-query';
import { Box, Card, CardContent, CardHeader, InternalLink, Typography } from 'components/atoms';
import { AccessTime } from 'components/atoms/icons';
import { BasicBlock } from 'components/molecules';
import { getPosts } from 'requests/internal/posts';

const useStyles = makeStyles(theme => ({
  card: {
    width: '300px',
    height: '300px',
  },
  previewLayout: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '220px',
  },
  preview: {
    lineClamp: 5,
    wordBreak: "break-word",
    display: "-webkit-box",
    boxOrient: "vertical",
  },
  timeArea:{
    padding: theme.spacing(1),
  },
  timeRow: {
    padding: 0,
    margin: 0,
    lineHeight: 1.6,
    display: 'flex',
    justifyContent: 'end',
    alignItems: "center",
  },
  timeIcon: {
    fontSize: '1rem',
  },
  noDecorate: {
    textDecoration: 'none !important',
    color: theme.palette.text.primary,
  }
}))

export const PostList: React.VFC = () => {
  const {data: posts = []} = useQuery(['posts'], () => getPosts());
  const classes = useStyles();

  if (posts.length == 0) return(<div> 準備中... </div>); 
  return (
    <BasicBlock
    title={'Note'}
    id={'note'}
    body={
      posts.map(post => (
        <Card key={post.id} className={classes.card} variant={'outlined'}>
          <InternalLink to={`/notes/${post.id}`} className={classes.noDecorate}>
            <CardActionArea>
              <CardHeader 
                title={<Typography variant={'h6'}>{post.title}</Typography>}
              />
              <CardContent>
                <div className={classes.previewLayout}>
                  <div>
                    <Box
                      component="div"
                      textOverflow="ellipsis"
                      overflow="hidden"
                      className={classes.preview}
                    >
                      <Typography  variant={'body1'}>
                        {post.body} 
                      </Typography>
                    </Box>
                  </div>
                  <div className={classes.timeArea}>
                    <div className={classes.timeRow}>
                      <Typography variant={'overline'}>
                        CREATED:
                      </Typography>
                      <AccessTime className ={classes.timeIcon}/>
                      <Typography component={'div'} variant={'overline'}>
                        {moment(post.created_at).format('YYYY-MM-DD')}
                      </Typography>
                    </div>
                    <div className={classes.timeRow}>
                      <Typography variant={'overline'}>
                        UPDATED:
                      </Typography>
                      <AccessTime className ={classes.timeIcon}/>
                      <Typography component={'div'} variant={'overline'}>
                        {moment(post.updated_at).format('YYYY-MM-DD')}
                      </Typography>
                    </div>
                    </div>
                </div>
              </CardContent>
            </CardActionArea>            
          </InternalLink>
        </Card>
      ))
    }
    />
  )
};
