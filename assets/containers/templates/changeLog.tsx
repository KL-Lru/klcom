import React from 'react';
import { useQuery } from 'react-query';
import { ChangeLogPresenter } from 'components/templates/changeLog';
import { getChangeLogs } from 'requests/internal/change_logs';


export const ChangeLogContainer: React.VFC = () => {
  const {data: logs = []} = useQuery(
    ['changeLog'],
    () => getChangeLogs(),
  )

  return (
    <ChangeLogPresenter logs={logs}/>
  )
}
