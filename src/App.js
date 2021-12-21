import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from "./Homepage";
import Search from "./Search";
import Game from "./Game";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/game' element={<Game/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
