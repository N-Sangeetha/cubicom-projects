import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import SignUp from './pages/user';
import Login from './pages/user/login'
import Forgot from './pages/user/forgot'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgotpassword">
            <Forgot />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
