import '../styles/App.css';
import Pokeball from './pokeball';
import Buscador from './buscador'
import Card from './Card';

function App() {
  
  const generarCartas = () => {
    let i = 1;
    let cards=[];
    while (i<=204) {
      cards = [...cards, <Card pokemon={i+""} key={i}/>];
      i++
    }
    return cards;
  }

  return (
    <div className="container">
      <header className="header">
        <div className="center">
          <div className="Logo">
            <Pokeball />
            <div>POKÉDEX</div>
          </div>
          <div className="powered">
            <div>Powered by</div>
            <a href="https://pokeapi.co/" target="blank">
              <img src='/pokeapi_256.png' alt="pokeapi logo" width='104' height='42' />
            </a>
          </div>
        </div>
      </header>
      <main className="main">
        <Buscador />
        <p>Designed by Cristian Medina</p>
        <hr className="linea " width="100%" />
        <div className="lista-de-cartas">
          {generarCartas()}
        </div>
      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
