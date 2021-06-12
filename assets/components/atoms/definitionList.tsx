import React from 'react';

import {Table} from 'components/atoms/table';
import {TableBody} from 'components/atoms/tablebody';

type Props = {
  children: React.ReactNode;
}

export const DefinitionList: React.VFC<Props> = ({children}) => {
  return (
    <Table>
      <TableBody>{children}</TableBody>
    </Table>
  );
}
