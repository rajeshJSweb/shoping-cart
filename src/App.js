import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import Setting from './Components/Shared/Navbar/Setting';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/product' element={<Home/>}></Route>
        <Route path='/setting' element={<Setting/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
