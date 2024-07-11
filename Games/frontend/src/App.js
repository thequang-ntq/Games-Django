// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import DotConnect from './components/dot_connect';
import EggCatcher from './components/egg_catcher';
import RockPaperScissor from './components/rock_paper_scissor';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={<Home></Home>}></Route>
          <Route exact path="/dot_connect" element={<DotConnect></DotConnect>}></Route>
          <Route exact path="/egg_catcher" element={<EggCatcher></EggCatcher>}></Route>
          <Route exact path="/rock_paper_scissor" element={<RockPaperScissor></RockPaperScissor>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
