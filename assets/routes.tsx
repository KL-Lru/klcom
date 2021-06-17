import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Meta } from 'components/atoms';
import { SignIn } from 'components/pages/signIn';
import { Top } from 'components/pages/top';
import { routings } from 'constants/routings';
import { RouteKey } from 'types/routes';
import { strictEntries } from 'utils/object';

type RouteComponentMap = Record<RouteKey, React.ReactNode>
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
          const { path, label, exact} = routings[routeKey];
          return (
            <Route 
              path = {path}
              exact = {exact}
              key = {routeIdx}
            >
              <Meta variant={'title'} value={label}/>
              {component}
            </Route>
          )
        })}
      </Switch>
    </BrowserRouter>
  );
};
