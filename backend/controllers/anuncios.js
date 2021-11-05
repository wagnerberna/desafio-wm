const {Router} = require('express');
const model = require('../models/anuncios');
const {status, message} = require('../services')

const router = Router();

router.get('/', async (req, res) => {
  try {
    const anuncios = await model.getAll();
    res.status(status.OK).json({anuncios})
  } catch (error) {
    res.status(status.SERVER_ERROR).send(message.serverError);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const anuncio = await model.getById(id);
    res.status(status.OK).json({anuncio})
  } catch (error) {
    res.status(status.SERVER_ERROR).send(message.serverError);
  }
});

router.post('/', async (req, res) => {
  try {
    const{marca, modelo, versao, ano, quilometragem, observacao} = req.body;
    const result = await model.add(marca, modelo, versao, ano, quilometragem, observacao);
    res.status(status.CREATED).json({result})
  } catch (error) {
    res.status(status.SERVER_ERROR).send(message.serverError);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const{marca, modelo, versao, ano, quilometragem, observacao} = req.body;
    const result = await model.update(id, marca, modelo, versao, ano, quilometragem, observacao);
    res.status(status.OK).json({result})
  } catch (error) {
    res.status(status.SERVER_ERROR).send(message.serverError);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    await model.exclude(id);
    res.status(status.NO_CONTENT).end();
  } catch (error) {
    res.status(status.SERVER_ERROR).send(message.serverError);
  }
});

module.exports = {router}