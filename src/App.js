import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Home from './components/Home'
import Product from './components/Product'
import ProductList from './components/ProductList'
import { useEffect } from 'react';

const linkStyle={
  margin: "10px",
  textDecoration: "none",
  color: "white",
  padding: "5px"
};



function App() {
  return (
    <div className="App">
      <div className="navigation">
        <nav>
          <Link to = "/" style={linkStyle}>Home</Link>
          <Link to = "/productlist" style={linkStyle}>Product List</Link>
          <Link to ="/product/" style={linkStyle}>Specific Product</Link>
          <Link to ="/cart" style={linkStyle}> View Cart</Link>
          <Link to ="/checkout" style={linkStyle}>Checkout</Link>
        </nav>
      </div>

      <div className="contents">
        <Route exact path = "/" component = {Home}/>
        <Route path ="/productList" render = {(products)=>( <ProductList products={["Bulbasaur", "Charmander", "Squirtle"]}/>)}/>
        <Route path ="/product" component = {Product}/>
        <Route path ="/cart" component = {Cart}/> 
        <Route path ="/checkout" component = {Checkout}/> 
      </div>
   
    </div>
  );
}

export default App;
