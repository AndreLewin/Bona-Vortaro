import React from 'react';

import Paĝokapo from './Paĝokapo.jsx';
import Paĝopiedo from './Paĝopiedo.jsx';


class Privatecpaĝo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="retejo">
        <Paĝokapo/>
        <div className="reteja-enhavo">
          <section className="hero is-tiny is-light">
            <div className="hero-body">
              <div className="container">

                <h2 className="subtitle">Kion la retejo konservas</h2>
                <p>La IP-adreson de homoj, kiuj porvoĉdonis (poras), kaj kiuj kontraŭvoĉdonis (malporas).</p>
                <hr/>
                <h2 className="subtitle">Kiam la retejo konservas</h2>
                <p>Kiam vi donas poron aŭ malporon, la datumbazo de la retejo memoras tion per konservado de via IP-adreso. La poro aŭ malporo (do via IP-adreso) estas private konservita dum jaro ekde la voĉdono. Vi povas mem forigi vian IP-adreson de la datumbazo nuligante la porojn kaj malporojn, kiujn vi faris.</p>
                <hr/>
                <h2 className="subtitle">Kial la retejo konservas</h2>
                <p>Por funkcii, la retejo bezonas manieron por identigi uzantojn. Tio nepras por ke voĉdonoj demokratie reprezentu la opiniojn de malsamaj homoj. Tio ekzemple permesas al uzantoj facile memori ĉu ili jam voĉdonis, kaj ili povas ŝanĝi siajn voĉdonojn pli poste. IP-adreso estas la plej simpla metodo por atingi tion, ĉar tio ne postulas krei konton, kio estus malpli oportuna por uzantoj, kaj kio postulus aliajn personajn datumojn.</p>

              </div>
            </div>
          </section>
        </div>
        <Paĝopiedo />
      </div>
    );
  }
}

export default Privatecpaĝo;
