const {conn} = require('./connection');

const getAll = async() => {
  const [rows] = await conn.execute(
    'SELECT * FROM tb_AnuncioWebmotors');
  return rows;
}

const getById = async(id) => {
  const [row] = await conn.execute(
    'SELECT * FROM tb_AnuncioWebmotors WHERE ID = ?', [id]);
  return row;
}

const add = async(marca, modelo, versao, ano, quilometragem, observacao) => {
  const [row] = await conn.execute(
    'INSERT INTO tb_AnuncioWebmotors (marca, modelo, versao, ano, quilometragem, observacao) VALUES (?,?,?,?,?,?)',
    [marca, modelo, versao, ano, quilometragem, observacao]);
    return {id: row.insertId};
}

const update = async(id, marca, modelo, versao, ano, quilometragem, observacao) => {
  await conn.execute(
    'UPDATE tb_AnuncioWebmotors SET marca = ?, modelo = ?, versao = ?, ano = ?, quilometragem = ?, observacao = ? WHERE id = ?', 
  [marca, modelo, versao, ano, quilometragem, observacao, id]);
  return {id, marca, modelo, versao, ano, quilometragem, observacao};
}

const exclude = async(id) => {
  await conn.execute(
    'DELETE FROM tb_AnuncioWebmotors WHERE id = ?', [id]);
}

module.exports = {
  getAll, 
  getById,
  add,
  update,
  exclude,
}