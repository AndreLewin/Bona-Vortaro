import React from 'react';

import Serĉi from './Serĉi.jsx';

class Paĝokapo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="navbar is-black" id="header">
        <div className="navbar-brand">
          <div className="navbar-item" onClick={() => {window.location.replace(location.origin)}} style={{cursor:'pointer'}}>
            <b>🐮 Bona Vortaro</b>
          </div>
          <div className="navbar-item push-right">
            <Serĉi/>
          </div>
        </div>
      </header>
    );
  }
}


export default Paĝokapo;