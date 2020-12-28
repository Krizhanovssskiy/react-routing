import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from '../../auth/login'
import Main from '../main'
import PrivateRoute from '../../auth/private-route';

import 'antd/dist/antd.css';

const App = () => {
  return (
      <Switch>
          <Route path={'/login'} component={Login} />
          <PrivateRoute component={Main}/>
      </Switch>
  );
};

export default App;
