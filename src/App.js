import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from "./Homepage";
import Search from "./Search";
import Game from "./Game";
import Header from "./Header";
import Aboutus from './Aboutus';
import Under10 from './Under10';
import TopGames from './TopGames';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/topgames' element={<TopGames/>} />
          <Route path='/under10' element={<Under10/>} />
          <Route path='/game' element={<Game/>} />
          <Route path='/aboutus' element={<Aboutus/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
