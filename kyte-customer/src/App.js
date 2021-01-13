import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './routes/routes';
import './App.module.scss';

function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route component={Routes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
