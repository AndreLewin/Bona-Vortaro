import React from 'react';


class Paĝopiedo extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <footer className="navbar is-black">
        <div className="columns" style={{"margin": "0 0 0 0"}}>
          <div className="column" style={{"textAlign": "center"}}>
            <a href="/priv" style={{ "color": "lightgrey"}}>Privateca politiko</a>
          </div>
          <div className="column" style={{"textAlign": "center", "color": "grey"}}>
            <a href="" style={{ "color": "lightgrey"}}>Pri la retejo (farota)</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Paĝopiedo;
