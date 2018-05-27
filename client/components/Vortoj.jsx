import React from 'react';
import axios from 'axios';

import Vorto from './Vorto.jsx';

class Vortoj extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vortaro: []
    }
  }

  async componentDidMount() {
    await axios.get('/api/tutakiro/')
      .then((response) => {
        if (response.data) {
          const vortaroKunDatoEnFormato = response.data.map((vorto) => {
            const vortoKunDatoEnFormato = JSON.parse(JSON.stringify(vorto));
            vortoKunDatoEnFormato.dato = new Date(vorto.dato);
            return vortoKunDatoEnFormato
          })
          this.setState({
            vortaro: vortaroKunDatoEnFormato
          });
        }
      })
      .catch((error) => {
        console.error(error)
      });
  }


  render() {
    const vortaro = this.state.vortaro;

    // Ordigi la afiŝadon laŭ la nuna reĝimo (laŭ noveco aŭ boneco)
    const novaAŭBona = this.props.novaAŭBona;
    let vortojOrdigitaj;

    if (novaAŭBona) {
      vortojOrdigitaj = vortaro.sort(( vortoA, vortoB ) => {
        return vortoB.dato - vortoA.dato;
      });
    } else {
      vortojOrdigitaj = vortaro.sort(( vortoA, vortoB ) => {
        return (vortoB.poroj - vortoB.malporoj) - (vortoA.poroj - vortoA.malporoj);
      });
    }


    const vortojEnListo = vortojOrdigitaj.map((vorto) => {
      return (
        <React.Fragment key={vorto._id}>
          <Vorto
            id_de_vorto={vorto._id}
            teksto={vorto.teksto}
            dato={vorto.dato}
            poroj={vorto.poroj}
            malporoj={vorto.malporoj}
            alternativaro={vorto.alternativaro}
          />
          <hr />
        </React.Fragment>
      );
    }); 

    return (
      <section className="hero is-small">
        <div className="hero-body">
          <div className="container">
            {vortojEnListo}
          </div>
        </div>
      </section>
    );
  }
}

export default Vortoj;