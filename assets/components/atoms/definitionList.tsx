import React from 'react';

import { Table, TableBody } from 'components/atoms';

type Props = {
  children: React.ReactNode;
};

export const DefinitionList: React.VFC<Props> = ({ children }) => {
  return (
    <Table>
      <TableBody>{children}</TableBody>
    </Table>
  );
};
