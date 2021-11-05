const {status, message} = require('./statusAndMessages')
const model = require('../models/anuncios');

const checkBody = (req, res, next) => {
  const {marca, modelo, versao, ano, quilometragem, observacao} =req.body;
  if ( marca === "" || modelo === "" || versao === "" || 
    ano === "" || quilometragem === "" || observacao === "") {
    return res.status(status.BADREQUEST).json(message.fieldsInvalid);
  }
  if ( !Number.isInteger(ano) || !Number.isInteger(quilometragem)) {
    return res.status(status.BADREQUEST).json(message.fieldsInvalid);
  }
  return next();
}

const checkId = async(req, res, next) => {
  const {id} = req.params;
  const serachId = await model.getById(id);
  if(serachId.length === 0) {
    return res.status(status.NOT_FOUND).json(message.idNotFound);
  }
  return next();
}

module.exports = {checkBody, checkId}