import React from 'react';
import axios from 'axios';

// const MAKSIMUMA_LONGECO = 20;


class Serĉi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teksto: "",
      eraro: false,
      ŝargado: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    const teksto = document.getElementById("teksto_de_serĉilo").value;

    this.setState({
      teksto: teksto,
      eraro: false
    });
  }

  handleSubmit() {
    window.location.replace(location.origin + "/" + this.state.teksto);
  }

  render() {
    return (
      <React.Fragment>
        <div className="field has-addons">
          <div className="control">
            <input className="input" id='teksto_de_serĉilo' type="text" placeholder="Vorto" onChange={this.handleChange}/>
          </div>
          <div className="control">
            <a className="button is-info" onClick={this.handleSubmit} disabled={this.state.eraro || this.state.ŝargado}>
              {this.state.ŝargado ? "Bonvolu atendi…" : "Serĉi"}
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default Serĉi;
