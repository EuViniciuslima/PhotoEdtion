import "./App.css";
import Logo from "./components/logo";
import perfil from "./image/perfil.svg";
import sacola from "./image/sacola.svg";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MELHORES ALBUNS"];
const icons = [perfil, sacola];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <ul className='opcoes'>
          {textoOpcoes.map((texto) => (
            <li className="opcao">
              <p className='textLink'>{texto}</p>
            </li>
          ))}
        </ul>
        <ul className="icons">
          {icons.map((icone) => (
            <li className='icones'>
              <img src={icone} alt="svg's"></img>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
