import React from 'react';
import {
  Avatar,
  Chip,
  FlatList,
  FlatListItem,
  DefinitionItem,
  DefinitionList,
  ExternalLink,
} from 'components/atoms';
import {
  CppIcon,
  PythonIcon,
  RubyIcon,
  RustIcon,
  TypescriptIcon,
  MysqlIcon,
  PostgresIcon,
  KubernetesIcon,
  RailsIcon,
  ReactIcon,
} from 'components/atoms/icons';
import { BasicBlock } from 'components/molecules';
import { TWITTER_LINK, GITHUB_LINK } from 'constants/links';
import { EMAIL_ADDRESS } from 'constants/mail_address';

export const Profile: React.VFC = () => {
  const skills: Array<{ label: string; icon: React.ReactNode }> = [
    { label: 'C++', icon: <CppIcon /> },
    { label: 'Python', icon: <PythonIcon /> },
    { label: 'Ruby', icon: <RubyIcon /> },
    { label: 'Rust', icon: <RustIcon /> },
    { label: 'Typescript', icon: <TypescriptIcon /> },
    { label: 'MySQL', icon: <MysqlIcon /> },
    { label: 'PostgreSQL', icon: <PostgresIcon /> },
    { label: 'Kubernetes', icon: <KubernetesIcon /> },
    { label: 'Rails', icon: <RailsIcon /> },
    { label: 'React', icon: <ReactIcon /> },
  ];

  return (
    <BasicBlock
      title={'About Me'}
      body={
        <DefinitionList>
          <DefinitionItem term={'Author'} description={'えるる(Lru)'} />
          <DefinitionItem term={'Email'} description={EMAIL_ADDRESS} />
          <DefinitionItem
            term={'Twitter'}
            description={
              <ExternalLink url={TWITTER_LINK}>@kilattoeruru</ExternalLink>
            }
          />
          <DefinitionItem
            term={'Github'}
            description={<ExternalLink url={GITHUB_LINK}>KL-Lru</ExternalLink>}
          />
          <DefinitionItem
            term={'Skills'}
            description={
              <FlatList>
                {skills.map(({ label, icon }) => (
                  <FlatListItem key={label}>
                    <Chip
                      avatar={<Avatar>{icon}</Avatar>}
                      label={label}
                      color='primary'
                      size='small'
                      variant='outlined'
                    />
                  </FlatListItem>
                ))}
              </FlatList>
            }
          />
        </DefinitionList>
      }
    />
  );
};
