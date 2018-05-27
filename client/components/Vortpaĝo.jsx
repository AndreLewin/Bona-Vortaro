import React from 'react';
import axios from 'axios';

import Paĝokapo from './Paĝokapo.jsx';
import Paĝopiedo from './Paĝopiedo.jsx';
import Vorto from './Vorto.jsx';


class Vortpaĝo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vorto: {},
      ŝargado: true,
    }
  }

  async componentDidMount() {
    const teksto = this.props.match.params.teksto;
    await axios.get('/api/tutakiro/' + teksto)
      .then((response) => {
        if (response.data) {
          const vortoKunDatoEnFormato = JSON.parse(JSON.stringify(response.data))
          vortoKunDatoEnFormato.dato = new Date(vortoKunDatoEnFormato.dato);
          this.setState({
            vorto: vortoKunDatoEnFormato,
            ŝargado: false
          });
        }
      })
      .catch((error) => {
        console.error(error)
      });
  }

  render() {
    const vorto = this.state.vorto;

    return (
      <div className="retejo">{/* klaso "retejo" uzata por glui paĝopiedon */}
        <Paĝokapo/>
        <div className="reteja-enhavo">
          { !this.state.ŝargado &&
            <section className="hero is-small">
              <div className="hero-body">
                <div className="container">
                  <Vorto
                    id_de_vorto={vorto._id}
                    teksto={vorto.teksto}
                    dato={vorto.dato}
                    poroj={vorto.poroj}
                    malporoj={vorto.malporoj}
                    alternativaro={vorto.alternativaro}
                  />
                </div>
              </div>
            </section>
          }
        </div>
        <Paĝopiedo />
      </div>
    );
  }
}

export default Vortpaĝo;
