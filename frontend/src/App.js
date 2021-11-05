import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/Itenslist';
import GetApi from './services/GetApi';
import Form from './components/Form';
import './App.css';

function App() {
  const [item, setItem] = useState({
    marca: '',
    modelo: '',
    versao: '',
    ano: 2021,
    quilometragem: 0,
    observacao: '',
  })
  const [itens, setItens] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  async function getResultApi() {
    const resultApi = await GetApi();
    setItens(resultApi);
  }

  useEffect(() => {
    getResultApi()
    setListUpdated(false)
  }, [listUpdated])

  return (
    <main>
      <Navbar title='Consulta API - Webmotors' />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Lista de Anúncios</h2>
            <ItemList item={item} list={itens} setListUpdated={setListUpdated} />
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Formulário</h2>
            <Form item={item} setItem={setItem} setListUpdated={setListUpdated} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
