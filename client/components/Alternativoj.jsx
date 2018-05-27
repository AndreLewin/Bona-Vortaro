import React from 'react';

import Alternativo from './Alternativo.jsx';


class Alternativoj extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const alternativaro = this.props.alternativaro;

    // Ordigi la alternativojn laŭ boneco
    const alternativojOrdigitaj = alternativaro.sort(( alternativoA, alternativoB ) => {
      return (alternativoB.poroj - alternativoB.malporoj) - (alternativoA.poroj - alternativoA.malporoj);
    });

    const alternativojEnListo = alternativojOrdigitaj.map((alternativo) => {
      return (
        <Alternativo key={alternativo._id}
          id_de_alternativo={alternativo._id}
          teksto={alternativo.teksto}
          poroj={alternativo.poroj}
          malporoj={alternativo.malporoj}
        />
      );
    }); 
  

    return (
      <React.Fragment>
        { alternativaro.length > 0 ? (
          <table className="table is-bordered">
            <thead>
              <tr>
                <th>Alternativoj</th>
                <th><i className="far fa-thumbs-up" /></th>
                <th><i className="far fa-thumbs-down" /></th>
              </tr>
            </thead>
            <tbody>
              {alternativojEnListo}
            </tbody>
          </table>
        ) : (
          <React.Fragment/ >
        )}
      </React.Fragment>
    );
  }
}

export default Alternativoj;
