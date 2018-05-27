const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');

const Vorto = require('../model/Vorto');
const Vortporo = require('../model/Vortporo');
const Vortmalporo = require('../model/Vortmalporo');

// TODO: Replace :id with :vorto ?

// Ekhavi vortojn router.get('/')
// Ekhavi vorton router.get(':id')
// Forigi vorton router.delete(':id')


// Aldoni vorton
router.post('/', async (req, res) => {
  const teksto = req.body.teksto;

  // TODO: Check length
  // TODO: Rigardi ĉu la vorto jam estis kreita
  // TODO: 'Location' header with link to /customers/{id} containing new ID.

  const vorto = new Vorto({
    teksto: teksto
  });

  vorto.save();

  res.status(201).send("Vorto sukcese kreita");
});

/*
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  bcrypt.hash(ip, parseInt(process.env.SALT_ROUNDS), (err, hash) => {
    const user = new User({ username: req.body.username, password: hash });
    user.save();
    res.status(201).send("Created: A new user with this username has been created");
  });

*/

// Aldoni/Forigi poron
router.post('/:id/poroj', async (req, res) => {
  const id_de_vorto = req.params.id;
  const ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0] : "localhost";

  const poro = await Vortporo.findOne({ id_de_vorto: id_de_vorto, id_de_uzanto: ip });

  if (poro) {
    await poro.remove();
  } else {
    const novaPoro = new Vortporo({ id_de_vorto: id_de_vorto, id_de_uzanto: ip });
    await novaPoro.save();
  }

  const nbPoroj = await Vortporo.count({ id_de_vorto: id_de_vorto });

  res.status(200).send({nbPoroj: nbPoroj, ĵusPoris: !poro});
});


// Aldoni/Forigi malporon
router.post('/:id/malporoj', async (req, res) => {
  const id_de_vorto = req.params.id;
  const ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0] : "localhost";

  const malporo = await Vortmalporo.findOne({ id_de_vorto: id_de_vorto, id_de_uzanto: ip });

  if (malporo) {
    await malporo.remove();
  } else {
    const novaMalporo = new Vortmalporo({ id_de_vorto: id_de_vorto, id_de_uzanto: ip });
    await novaMalporo.save();
  }

  const nbMalporoj = await Vortmalporo.count({ id_de_vorto: id_de_vorto });

  res.status(200).send({nbMalporoj: nbMalporoj, ĵusMalporis: !malporo});
});


// Kontroli ĉu uzanto poris/malporis por vorto
router.get('/:id/porstato', async (req, res) => {
  const id_de_vorto = req.params.id;
  const ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0] : "localhost";

  const poro = await Vortporo.findOne({ id_de_vorto: id_de_vorto, id_de_uzanto: ip });
  const malporo = await Vortmalporo.findOne({ id_de_vorto: id_de_vorto, id_de_uzanto: ip });

  res.status(200).send({poris: (!!poro), malporis: (!!malporo)});
});

module.exports = router;
