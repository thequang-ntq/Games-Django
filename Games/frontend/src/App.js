// import logo from './logo.svg';
import './App.css';
import DotConnect from './buttons/dot_connect';
import EggCatcher from './buttons/egg_catcher';
import RockPaperScissor from './buttons/rock_paper_scissor';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DotConnect></DotConnect>
        <EggCatcher></EggCatcher>
        <RockPaperScissor></RockPaperScissor>
      </header>
    </div>
  );
}

export default App;
