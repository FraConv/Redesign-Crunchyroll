import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/components/Home';
import Cerca from './assets/components/Cerca';
import Scroll_Top from './assets/components/Scroll_Top';


function App() {

  return (
    <>

      <Router>
        <Scroll_Top/>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Cerca/>}/>

        </Routes>
      </Router>
   
    </>
  )
}

export default App
