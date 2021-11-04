import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/Itenslist';
import GetApi from './services/GetApi';
import './App.css';

function App() {
  const [itens, setItens] = useState([])

  async function getResultApi() {
    const resultApi = await GetApi();
    setItens(resultApi);
    console.log(itens);
  }

  useEffect(() => {
    getResultApi()
  }, [])

  return (
    <main>
      <Navbar title='Consulta API - WebMotors' />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Lista de Anúncios</h2>
            <ItemList list={itens} />
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Formulário</h2>

          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
