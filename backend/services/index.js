const {status, message} = require('./statusAndMessages')
const{checkBody, checkId} = require('./middlewares')

module.exports = {
  status,
  message,
  checkBody,
  checkId,
}