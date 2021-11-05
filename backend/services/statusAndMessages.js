exports.status = {
  OK: 200,
  CREATED: 201,
  BADREQUEST:400,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
}

exports.message = {
  success: {message: 'Operação realizada com sucesso.'},
  serverError: { message: 'Sistema indisponível.' },
  fieldsInvalid: {message: 'Campos inválidos.'},
  idNotFound: {message: 'ID não localizado.'},
}