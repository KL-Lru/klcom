import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignIn } from 'components/pages/signIn';
import { Top } from 'components/pages/top';
import { Work } from 'components/pages/work';
import { Root as NoteRoot } from 'components/routes/notes/root';
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
        <Route path={"/notes"} >
          <NoteRoot />
        </Route>
        <Route path= {"/works"} exact = {true}>
          <Work />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
