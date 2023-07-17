
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar1 from './Components/Header';
import About from './Pages/About';



function App() {
  return (
   <div>
   <Navbar1/>


  <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<About/>}/>
   
     

    </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;
