const {Router} = require('express');
const model = require('../models/anuncios');
const {status, message, checkBody, checkId} = require('../services')

const router = Router();

router.get('/', async (req, res) => {
  try {
    const anuncios = await model.getAll();
    res.status(status.OK).json({anuncios})
  } catch (error) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

router.get('/:id', checkId, async (req, res) => {
  try {
    const {id} = req.params;
    const anuncio = await model.getById(id);
    res.status(status.OK).json({anuncio})
  } catch (error) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

router.post('/', checkBody, async (req, res) => {
  try {
    const{marca, modelo, versao, ano, quilometragem, observacao} = req.body;
    const result = await model.add(marca, modelo, versao, ano, quilometragem, observacao);
    res.status(status.CREATED).json({result})
  } catch (error) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

router.put('/:id', checkId, checkBody, async (req, res) => {
  try {
    const {id} = req.params;
    const{marca, modelo, versao, ano, quilometragem, observacao} = req.body;
    const result = await model.update(id, marca, modelo, versao, ano, quilometragem, observacao);
    res.status(status.OK).json({result})
  } catch (error) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

router.delete('/:id', checkId, async (req, res) => {
  try {
    const {id} = req.params;
    await model.exclude(id);
    res.status(status.OK).json(message.success);
  } catch (error) {
    res.status(status.SERVER_ERROR).json(message.serverError);
  }
});

module.exports = {router}