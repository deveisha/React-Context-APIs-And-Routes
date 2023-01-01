import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contextt from './components/Contextt';
 function App() {
  return (
    <div className="App">
 <Contextt>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Header/>}>
     <Route path='/about' element={<About/>}/>
     <Route path='/home' element={<Home/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
      </Contextt>
      <Footer/>
     
    </div>
  );
  }

export default App;
