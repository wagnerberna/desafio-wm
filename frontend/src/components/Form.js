import React from "react";

const Form = ({item, setItem, setListUpdated}) => {

  const handleChange = ({target}) => (
    setItem({
      ...item,
      [target.name]: target.value
    })
  )

  const handleSubmit = async(e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item)
    }

    if ( item.marca === "" || item.modelo === "" || item.versao === "" || 
    item.ano === "" || item.quilometragem === "" || item.observacao === "") {
      alert("Todos campos são obrigatórios");
    }

    const endpoint = 'http://localhost:3000/anuncios';
    fetch(endpoint, requestOptions)
    .then(res => res.json())
    .then(res => console.log(res))

    setListUpdated(true)

    setItem({
    marca: '',
    modelo: '',
    versao: '',
    ano: 2021,
    quilometragem: 0,
    observacao: '',
    })
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="marca" className="form-label">Marca</label>
        <input name="marca" value={item.marca} onChange={handleChange} type="text" id="marca" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="modelo" className="form-label">Modelo</label>
        <input name="modelo" value={item.modelo} onChange={handleChange} type="text" id="modelo" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="versao" className="form-label">Versão</label>
        <input name="versao" value={item.versao} onChange={handleChange} type="text" id="versao" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="ano" className="form-label">Ano</label>
        <input name="ano"  value={item.ano} onChange={handleChange} type="number" id="ano" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="quilometragem" className="form-label">Quilometragem</label>
        <input name="quilometragem"  value={item.quilometragem} onChange={handleChange} type="number" id="quilometragem" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="observacao" className="form-label">Observações</label>
        <input name="observacao"  value={item.observacao} onChange={handleChange} type="text" id="observacoes" className="form-control"/>
      </div>
      <button type="submit" className="btn btn-primary">Adicionar</button>
    </form>
  );
}

export default Form;