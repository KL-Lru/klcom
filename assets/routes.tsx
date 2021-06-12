import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignIn } from 'components/pages/signIn';
import { Top } from 'components/pages/top';
import { routings } from 'constants/routings';
import { MetaContainer } from 'containers/atoms/meta';
import { RouteComponentMap } from 'types/routes';
import { strictEntries } from 'utils/object';

export const routeMap: RouteComponentMap = {
  top: <Top />,
  sign_in: <SignIn />,
  note: <> note </>,
  works: <> works </>,
} as const;


export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {strictEntries(routeMap).map(([routeKey, component], routeIdx) => {
          const { path, exact, metas} = routings[routeKey];
          return (
            <Route 
              path = {path}
              exact = {exact}
              key = {routeIdx}
            >
              {metas != null && metas.map((meta, metaIdx) => {
                return <MetaContainer { ...(meta) } key = { metaIdx }/>
              })}
              {component}
            </Route>
          )
        })}
      </Switch>
    </BrowserRouter>
  );
};
