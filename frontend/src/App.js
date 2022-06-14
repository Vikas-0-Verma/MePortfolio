import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import Navbar from './Component/Home/Navbar/navbar';
import Footer from './Component/Home/Navbar/footer';
import Myproject from './Component/MyProject/Myproject';
import Project from './Component/MyProject/Project';
import Resume from './Component/resume/Resume';


function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/MY_PROJECT' element={<Myproject/>}/>
      <Route path="/MY_PROJECT/:id" element={< Project/>}/>
      <Route path="/resume" element={< Resume/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
