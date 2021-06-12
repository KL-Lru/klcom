import React from 'react';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';
import { Accordion } from 'components/atoms/accordion';
import { AccordionDetails } from 'components/atoms/accordionDetails';
import { AccordionSummary } from 'components/atoms/accordionSummary';
import { DefinitionItem } from 'components/atoms/definitionItem';
import { DefinitionList } from 'components/atoms/definitionList';
import { ExpandMore } from 'components/atoms/icon';
import { ChangeLog } from 'types/changeLog';

const useStyles = makeStyles(() => ({
  date: {
    verticalAlign: 'top',
  },
}));

type Props = {
  logs: ChangeLog[];
};

export const ChangeLogPresenter: React.VFC<Props> = ({ logs }) => {
  const classes = useStyles();
  return (
    <>
      {logs.length == 0 ? (
        <div> 更新履歴はありません. </div>
      ) : (
        logs.map(log => (
          <DefinitionList key = {log.id}>
            <DefinitionItem
              term={
                <span className={classes.date}>
                  {moment(log.changed_at).format('YYYY-MM-DD')}
                </span>
              }
              description={
                <Accordion elevation={0}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    {log.title}
                  </AccordionSummary>
                  <AccordionDetails>{log.description}</AccordionDetails>
                </Accordion>
              }
            />
          </DefinitionList>
        ))
      )}
    </>
  );
};
