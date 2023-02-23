import Game from "./components/Game";
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css'

function App() {
  const game = new Game();
  return (
    <div className="App">
      <Header />
      <Main game={ game }/>
    </div>
  )
}

export default App
