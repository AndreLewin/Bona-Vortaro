import React from 'react';
import axios from 'axios';


class Alternativo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poroj: this.props.poroj || 0,
      malporoj: this.props.malporoj || 0,
      poris: false, // vera se la uzanto poris (kaj la poro ankoraŭ validas)
      malporis: false,
    };

    this.traktiPoron = this.traktiPoron.bind(this);
    this.traktiMalporon = this.traktiMalporon.bind(this);

  }


  componentDidMount() {
    axios.get('/api/alternativoj/' + this.props.id_de_alternativo + '/porstato')
      .then((response) => {
        this.setState({
          poris: response.data.poris,
          malporis: response.data.malporis
        });
      })
      .catch((error) => (console.error(error)));
  }

  traktiPoron() {
    axios.post('/api/alternativoj/' + this.props.id_de_alternativo + '/poroj')
      .then((response) => { this.setState({poroj: response.data.nbPoroj, poris: response.data.ĵusPoris}) })
      .catch((error) => (console.error(error)));
  }

  traktiMalporon() {
    axios.post('/api/alternativoj/' + this.props.id_de_alternativo + '/malporoj')
      .then((response) => { this.setState({malporoj: response.data.nbMalporoj, malporis: response.data.ĵusMalporis}) })
      .catch((error) => (console.error(error)));
  }


  render() {
    return (
      <tr>
        <td><b>{this.props.teksto}</b></td>
        <td className={this.state.poris ? "is-success" : ""}
            onClick={this.traktiPoron} style={{cursor:'pointer'}}>
            {this.state.poroj}
        </td>
        <td className={this.state.malporis ? "is-danger" : ""}
            onClick={this.traktiMalporon} style={{cursor:'pointer'}}>
            {this.state.malporoj}
        </td>
      </tr>
    );
  }
}

export default Alternativo;