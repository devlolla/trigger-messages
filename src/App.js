import './App.css';
import api from './services/api';

function App() {

  const handleSend = async () => {
    await api.post('send')
  }

  return (
    <div className="App">
      <button onClick={handleSend}>
        Envie aqui sua Mensagem
      </button>
    </div>
  );
}

export default App;
