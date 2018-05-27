import React from 'react';
import axios from 'axios';

import Alternativoj from './Alternativoj.jsx';
import AldoniAlternativon from './AldoniAlternativon.jsx';


class Vorto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dato: this.props.dato || Date(),
      teksto: this.props.teksto || "Nedefinita",
      poroj: this.props.poroj || 0,
      malporoj: this.props.malporoj || 0,
      alternativaro: this.props.alternativaro || [],
      poris: false, // vera se la uzanto poris (kaj la poro ankoraŭ validas)
      malporis: false,
    };

    this.traktiPoron = this.traktiPoron.bind(this);
    this.traktiMalporon = this.traktiMalporon.bind(this);
  }

  componentDidMount() {
    axios.get('/api/vortoj/' + this.props.id_de_vorto + '/porstato')
      .then((response) => {
        this.setState({
          poris: response.data.poris,
          malporis: response.data.malporis
        });
      })
      .catch((error) => (console.error(error)));
  }

  traktiPoron() {
    axios.post('/api/vortoj/' + this.props.id_de_vorto + '/poroj')
      .then((response) => { this.setState({poroj: response.data.nbPoroj, poris: response.data.ĵusPoris}) })
      .catch((error) => (console.error(error)));
  }

  traktiMalporon() {
    axios.post('/api/vortoj/' + this.props.id_de_vorto + '/malporoj')
      .then((response) => { this.setState({malporoj: response.data.nbMalporoj, malporis: response.data.ĵusMalporis}) })
      .catch((error) => (console.error(error)));
  }

  render() {
    const dato = this.state.dato;

    return (
      <div>
        <div className="word-row">
          <span className="word-text">{this.state.teksto}&nbsp;&nbsp;</span>
          <div className="buttons">
            <a disabled className="button is-inverted">
              <span className="icon is-small">
                <i className="far fa-clock" />
              </span>
              &nbsp;&nbsp;{dato.getFullYear() + "-" + dato.getMonth() + "-" + dato.getDate()}
            </a>
            <div className="field is-grouped">
              <a className={"button is-success" + (this.state.poris ? "" : " is-inverted")} onClick={this.traktiPoron}>
                <span className="icon is-small">
                  <i className="far fa-thumbs-up" />
                </span>
                &nbsp;&nbsp;{this.state.poroj}
              </a>
              <a className={"button is-danger" + (this.state.malporis ? "" : " is-inverted")} onClick={this.traktiMalporon}>
                <span className="icon is-small">
                  <i className="far fa-thumbs-down" />
                </span>
                &nbsp;&nbsp;{this.state.malporoj}
              </a>
            </div>
          </div>
        </div>
        <Alternativoj alternativaro={this.state.alternativaro} />
        <AldoniAlternativon vortoLigita={this.state.teksto} />
      </div>
    );
  }
}

export default Vorto;