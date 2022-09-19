import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import Setting from './Components/Shared/Navbar/Setting';
import { CartState } from '../src/Components/Context/Context';
import { useState } from 'react';
import ViewCart from './Components/Shared/Navbar/ViewCart';

function App() {
  const [cart, setCart]=useState([])
      const {
        state:{products},
    } =CartState();

    const handleClicked =(products)=>{
      console.log(products);
      const newCart = [...cart, products]
      setCart(newCart)
    }
  return (
    <div className="">
      <Navbar cart={cart}></Navbar>
      <Routes>
        <Route path='/' element= {<Home handleClicked={handleClicked} products={products}/>}></Route>
        <Route path='/home' element= {<Home handleClicked={handleClicked} products={products}/>}></Route>
        <Route path='/product' element={<Home/>}></Route>
        <Route path='/setting' element={<Setting/>}></Route>
        <Route path='/viewcart' element={<ViewCart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
