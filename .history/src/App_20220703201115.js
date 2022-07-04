import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/projects" element={ <Projects /> }></Route>
          <Route path="/" element={ <Experience /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
