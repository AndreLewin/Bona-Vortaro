import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Ĉefpaĝo from './Ĉefpaĝo.jsx';
import Privatecpaĝo from './Privatecpaĝo.jsx';
import Vortpaĝo from './Vortpaĝo.jsx';


class Apo extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/priv" render={ () => <Privatecpaĝo/>} />
          <Route exact path="/" render={ () => <Ĉefpaĝo/>} />
          <Route path="/:teksto"
              render={ (props) => <Vortpaĝo {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Apo;
