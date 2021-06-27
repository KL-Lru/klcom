import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Note } from 'components/pages/note';
import { SignIn } from 'components/pages/signIn';
import { Top } from 'components/pages/top';
import { Work } from 'components/pages/work';
import { Header } from 'components/templates';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path = {"/"} exact = {true} > 
          <Top />
        </Route>
        <Route path = {"/signin"} exact = {true}>
          <SignIn />
        </Route>
        <Route path={"/notes"} exact = {true}>
          <Note />
        </Route>
        <Route path= {"/works"} exact = {true}>
          <Work />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
