import React from 'react';

import Paĝokapo from './Paĝokapo.jsx';
import Paĝopiedo from './Paĝopiedo.jsx';

import Prezento from './Prezento.jsx';
import Vortoj from './Vortoj.jsx';
// import Baskuligilo from './Baskuligilo.jsx';


class Ĉefpaĝo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      novaAŭBona: true,
    };

    this.handleBaskuligiloClick = this.handleBaskuligiloClick.bind(this);
  }

  handleBaskuligiloClick() {
    this.setState((prevState) => ({
      novaAŭBona: !prevState.novaAŭBona,
    }));
  }

  render() {
    return (
      <div className="retejo">{/* klaso "retejo" uzata por glui paĝopiedon */}
        <Paĝokapo/>
        <div className="reteja-enhavo">
          <Prezento/>
          {/* <Baskuligilo novaAŭBona={this.state.novaAŭBona} handleBaskuligiloClick={this.handleBaskuligiloClick} /> */}
          <Vortoj novaAŭBona={this.state.novaAŭBona} />
        </div>
        <Paĝopiedo />
      </div>
    );
  }
}

export default Ĉefpaĝo;
