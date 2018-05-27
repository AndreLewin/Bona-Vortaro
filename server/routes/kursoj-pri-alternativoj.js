const express = require('express');
const router = express.Router();

const Vorto = require('../model/Vorto');
const Alternativo = require('../model/Alternativo');
const Alternativporo = require('../model/Alternativporo');
const Alternativmalporo = require('../model/Alternativmalporo');


// Aldoni alternativon
router.post('/', async (req, res) => {

  const teksto = req.body.teksto;
  const vortoLigita = req.body.vortoLigita;
  // laŭ supozo de vortoj estas unikaj:
  const vorto = await Vorto.findOne({ teksto: vortoLigita });

  if (!vorto) {
    res.status(400).send("Bad request: Nova alternativo devas esti ligita al vorto");
    return;
  }

  const alternativo = new Alternativo({
    id_de_vorto: vorto._id,
    teksto: teksto
  });

  alternativo.save();

  res.status(201).send("Alternativo sukcese kreita");
});


// Aldoni/Forigi poron
router.post('/:id/poroj', async (req, res) => {
  const id_de_alternativo = req.params.id;
  const ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0] : "localhost";

  const poro = await Alternativporo.findOne({ id_de_alternativo: id_de_alternativo, id_de_uzanto: ip });

  if (poro) {
    await poro.remove();
  } else {
    const novaPoro = new Alternativporo({ id_de_alternativo: id_de_alternativo, id_de_uzanto: ip });
    await novaPoro.save();
  }

  const nbPoroj = await Alternativporo.count({ id_de_alternativo: id_de_alternativo });

  res.status(200).send({nbPoroj: nbPoroj, ĵusPoris: !poro});
});


// Aldoni/Forigi malporon
router.post('/:id/malporoj', async (req, res) => {
  const id_de_alternativo = req.params.id;
  const ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0] : "localhost";

  const malporo = await Alternativmalporo.findOne({ id_de_alternativo: id_de_alternativo, id_de_uzanto: ip });

  if (malporo) {
    await malporo.remove();
  } else {
    const novaMalporo = new Alternativmalporo({ id_de_alternativo: id_de_alternativo, id_de_uzanto: ip });
    await novaMalporo.save();
  }

  const nbMalporoj = await Alternativmalporo.count({ id_de_alternativo: id_de_alternativo });

  res.status(200).send({nbMalporoj: nbMalporoj, ĵusMalporis: !malporo});
});


// Kontroli ĉu uzanto poris/malporis por alternativo
router.get('/:id/porstato', async (req, res) => {
  const id_de_alternativo = req.params.id;
  const ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0] : "localhost";

  const poro = await Alternativporo.findOne({ id_de_alternativo: id_de_alternativo, id_de_uzanto: ip });
  const malporo = await Alternativmalporo.findOne({ id_de_alternativo: id_de_alternativo, id_de_uzanto: ip });

  res.status(200).send({poris: (!!poro), malporis: (!!malporo)});
});


module.exports = router;
