import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Landingpage from './components/Landingpage';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import About from './components/About';

function App() {

  const [cartQuant, setCartQuant] = useState(0);
  const [products, setProducts] = useState([]);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    calcTotal();
    // eslint-disable-next-line
  }, [products]);

  const addToCart = (id, title, image, price, quantity) => {
    const existingProduct = products.find((product) => product.id === id);

    if (existingProduct) {
      const updatedProducts = products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + quantity };
        }
        return product;
      });
      setProducts(updatedProducts);
    } else {
      const newProduct = {
        id: id,
        title: title,
        image: image,
        price: price,
        quantity: quantity,
      };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
    setCartQuant((prevCartQuant) => prevCartQuant + quantity);
  };

  const decreaseQuantity = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        const newQuantity = product.quantity - 1;
        if (newQuantity === 0) {
          setCartQuant((prevCartQuant) => prevCartQuant - 1);
          return null;
        }
        setCartQuant((prevCartQuant) => prevCartQuant - 1);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    const filteredProducts = updatedProducts.filter(Boolean);
    setProducts(filteredProducts);
  };

  const removeProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    let count = 0;
    for (let i = 0; i < updatedProducts.length; i++) {
      count += updatedProducts[i].quantity;
    }
    setCartQuant(count);
  }

  const calcTotal = () => {
    let total = 0;
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        total += product.price * product.quantity;
    }
    setCost(total)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cartQuant={cartQuant} />
        <Routes>
          <Route element={<Landingpage addToCart={addToCart} />} path="/" />
          <Route element={<Cart products={products} decreaseQuantity={decreaseQuantity} removeProduct={removeProduct} addToCart={addToCart} cost={cost} />} path="/cart" />
          <Route element={<About/>} path='/about'/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
