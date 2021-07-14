import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Index } from 'components/pages/notes/index';
import { Show } from 'components/pages/notes/show';

export const Root: React.VFC = () => {
  const routing = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={routing.path} exact={true}>
          <Index />
        </Route>
        <Route path={`${routing.path}/:postId`} exact={true}>
          <Show />
        </Route>
        <Route path={`${routing.path}/:postId`}>
          <Show />
        </Route>
      </Switch>
    </>
  )
}
