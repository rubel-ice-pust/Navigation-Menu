import Navbar from './Components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Services from './pages/Services';
import Locations from './pages/Locations';
import { About } from './pages/About';
 
 const App = () => {
   return (
    <div className="App bg-blue-300 w-full h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
   )
 }
 
 export default App



