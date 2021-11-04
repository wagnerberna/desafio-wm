import React from "react";

const ItemList = ({list}) => {
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
          <th>{el.ID}</th>
          <th>{el.marca}</th>
          <th>{el.modelo}</th>
          <th>{el.versao}</th>
          <th>{el.ano}</th>
          <th>{el.quilometragem}</th>
          <th>{el.observacao}</th>
        </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;