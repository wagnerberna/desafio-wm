import React from "react";

const ItemList = ({item, list, setListUpdated}) => {

  const handleDelete = (id) => {
    const requestOptions = {
      method: 'DELETE'
    }

    const endpoint = `http://localhost:3000/anuncios/${id}`
    fetch(endpoint, requestOptions)

    setListUpdated(true)
  }

  const handleUpdate = (id) => {
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item)
    }

    const endpoint = `http://localhost:3000/anuncios/${id}`
    fetch(endpoint, requestOptions)

    setListUpdated(true)
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Versão</th>
          <th>Ano</th>
          <th>Quilometragem</th>
          <th>Observação</th>
        </tr>
      </thead>
      <tbody>
        {list.map( el => (
        <tr key={el.ID}>
          <td>{el.ID}</td>
          <td>{el.marca}</td>
          <td>{el.modelo}</td>
          <td>{el.versao}</td>
          <td>{el.ano}</td>
          <td>{el.quilometragem}</td>
          <td>{el.observacao}</td>
          <td>
            <div className="mb-3">
              <button onClick={() => handleDelete(el.ID)} className="btn btn-danger">Deletar</button>
            </div>
            <td>
            <div className="mb-3">
              <button onClick={() => handleUpdate(el.ID)} className="btn btn-dark">Atualizar</button>
            </div>
          </td>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;