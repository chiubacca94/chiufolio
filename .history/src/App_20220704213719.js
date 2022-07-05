import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences/Experiences';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/projects" element={ <Projects /> }></Route>
          <Route path="/experiences" element={ <Experiences /> }></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
