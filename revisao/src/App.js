import ProfileImage from './components/Profileimage'
import Imagem from './img/canetaazul.png'
import './App.css';
function App() {
  return (
    <div className="App">
      <h1> teste </h1>
      <ProfileImage titulo="imagem teste ilustrativa" imagem={Imagem} alt="teste"/>
    </div>
  );
}
export default App;