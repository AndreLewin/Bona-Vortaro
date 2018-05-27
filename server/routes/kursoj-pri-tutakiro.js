const express = require('express');
const router = express.Router();

const Vorto = require('../model/Vorto');
const Vortporo = require('../model/Vortporo');
const Vortmalporo = require('../model/Vortmalporo');
const Alternativo = require('../model/Alternativo');
const Alternativporo = require('../model/Alternativporo');
const Alternativmalporo = require('../model/Alternativmalporo');


// Akiri ĉiujn vortojn
router.get('/', async (req, res) => {
  const vortaro = await Vorto.find().lean();

  if (!vortaro) {
    res.status(404).send("Not found: Vortoj netrovitaj");
    return;
  }

  const vortaroKunDatumoj = await Promise.all(vortaro.map(async (vorto) => {
    return await akiriDatumojnPriVorto(vorto);
  }));

  res.status(200).send(vortaroKunDatumoj);
});


// Akiri vorton
router.get('/:teksto', async (req, res) => {
  const teksto = req.params.teksto;
  const vorto = await Vorto.findOne({ teksto: teksto }).lean();

  if (!vorto) {
    res.status(404).send("Not found: Vorto netrovita");
    return;
  }

  const vortoKunDatumoj = await akiriDatumojnPriVorto(vorto);
  res.status(200).send(vortoKunDatumoj);
});


const akiriDatumojnPriVorto = async (vorto) => {
  // Per tiuj promesoj, ĉiuj tri estas akirataj samtempe (Model.count() kaj .find() estas async)
  const pVortporoj = Vortporo.count({ id_de_vorto: vorto._id });
  const pVortmalporoj = Vortmalporo.count({ id_de_vorto: vorto._id });
  const pAlternativoj = Alternativo.find({ id_de_vorto: vorto._id }).lean();
  let alternativaro;
  [vorto.poroj, vorto.malporoj, alternativaro] = await Promise.all([pVortporoj, pVortmalporoj, pAlternativoj]);

  // Akiri pliajn informojn pri alternativoj
  vorto.alternativaro = await Promise.all(alternativaro.map(async (alternativo) => {
    const pAlternativporoj = Alternativporo.count({ id_de_alternativo: alternativo._id });
    const pAlternativmalporoj = Alternativmalporo.count({ id_de_alternativo: alternativo._id });
    [alternativo.poroj, alternativo.malporoj] = await Promise.all([pAlternativporoj, pAlternativmalporoj]);
    return alternativo;
  }));

  return vorto;
}


module.exports = router;
