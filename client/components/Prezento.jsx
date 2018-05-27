import React from 'react';

import AldoniVorton from './AldoniVorton.jsx';


class Prezento extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="hero is-small is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Bona Vortaro, la vortaro farata de ĉiuj Esperantistoj.
            </h1>
            <h2 className="subtitle">
              Atentu: Per aldono de informo, vi konsentas kun la <a href="/priv"><i>privateca politiko</i></a>.
            </h2>
            <AldoniVorton />
          </div>
        </div>
      </section>
    );
  }
}

export default Prezento;