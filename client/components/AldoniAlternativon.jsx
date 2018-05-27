import React from 'react';
import axios from 'axios';

const MAKSIMUMA_LONGECO = 50;


class AldoniAlternativon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teksto: "",
      eraro: true,
      ŝargado: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    const teksto = document.getElementById("teksto"+this.props.vortoLigita).value;

    this.setState({
      teksto: teksto,
      eraro: ĉuTekstoEstasErara(teksto)
    });
  }

  handleSubmit() {
    const body = {
      teksto: this.state.teksto,
      vortoLigita: this.props.vortoLigita
    };

    this.setState({
      ŝargado: true,
    });

    axios.post('/api/alternativoj/', body)
      .then(() => {
        // TODO: Iri al la paĝo de tiu vorto
        window.location.replace(location.origin);
      })
      .catch(() => {
        window.location.replace(location.origin);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="field has-addons">
          <div className="control">
            <input className="input" id={'teksto'+this.props.vortoLigita} type="text" placeholder="Nova alternativo" onChange={this.handleChange}/>
          </div>
          <div className="control">
            <a className="button is-success" onClick={this.handleSubmit} disabled={this.state.eraro || this.state.ŝargado}>
              {this.state.ŝargado ? "Bonvolu atendi…" : "Aldoni"}
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const ĉuTekstoEstasErara = (teksto) => {
  return( teksto.length > MAKSIMUMA_LONGECO || teksto.length < 1 );
}

export default AldoniAlternativon;
