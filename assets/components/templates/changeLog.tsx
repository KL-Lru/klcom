import React from 'react';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';
import { useQuery } from 'react-query';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  DefinitionItem,
  DefinitionList,
} from 'components/atoms';
import { ExpandMore } from 'components/atoms/icons';
import { getChangeLogs } from 'requests/internal/change_logs';

const useStyles = makeStyles(() => ({
  date: {
    verticalAlign: 'top',
  },
}));

export const ChangeLog: React.VFC = () => {
  const classes = useStyles();
  const { data: logs = [] } = useQuery(['changeLog'], () => getChangeLogs());

  if(logs.length == 0) return(<div> 更新履歴はありません. </div>);
  return (
    <>
      {logs.map(log => (
        <DefinitionList key={log.id}>
          <DefinitionItem
            term={
              <span className={classes.date}>
                {"hoge"  || moment(log.changed_at).format('YYYY-MM-DD')}
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
      }
    </>
  );
};
