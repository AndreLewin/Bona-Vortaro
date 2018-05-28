import React from 'react';

import Serĉi from './Serĉi.jsx';

class Paĝokapo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="navbar is-black" id="header">
        <div className="kolumnoj" style={{"margin": "0 0 0 0"}}>
          <div className="kolumno">
            <a className="" href="/" style={{ "color": "white"}}><b>🐮 Bona Vortaro</b></a>
          </div>
          <div className="kolumno" style={{"justify-content": "flex-end"}}>
            <Serĉi/>
          </div>
        </div>
      </header>
    );
  }
}

export default Paĝokapo;