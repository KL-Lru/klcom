import React from 'react';
import moment from 'moment';
import { useQuery } from 'react-query';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  DefinitionItem,
  DefinitionList,
  Typography,
} from 'components/atoms';
import { ExpandMore } from 'components/atoms/icons';
import { getChangeLogs } from 'requests/internal/change_logs';


export const ChangeLog: React.VFC = () => {
  const { data: logs = [] } = useQuery(['changeLog'], () => getChangeLogs());

  if(logs.length == 0) return(<div> 更新履歴はありません. </div>);
  return (
    <>
      {logs.map(log => (
        <DefinitionList key={log.id}>
          <DefinitionItem
            term={
              <Typography variant={'body2'}>
                {moment(log.changed_at).format('YYYY-MM-DD')}
              </Typography>
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
