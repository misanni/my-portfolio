import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Header from './Components/Header';
function App() {
  return (
    <container>
      <Router>
        <Header/>
        <Projects/>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Services' element={<Services/>} />
        </Routes>
      </Router>
    </container>
  );
}

export default App;
