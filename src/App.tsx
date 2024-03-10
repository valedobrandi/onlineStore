import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras';
import DetalheProdutos from './pages/DetalheProdutos';
import CheckOut from './pages/CheckOut';
import NavBar from './components/Navbar/NavBar';
import { CartProductListType } from './types/types';

function App() {
  const stored = localStorage.getItem('CartList');
  const [productList, setProductList] = useState<CartProductListType[]>([]);
  const [addProduct, setAddProduct] = useState<CartProductListType[]>(
    stored ? JSON.parse(stored) : [],
  );

  const addProductCarrinho = (item: CartProductListType) => {
    const find = addProduct.find((data) => data.id === item.id);
    if (find) return addQuantity(item);
    const product = [...addProduct, { ...item, quantity: item.quantity + 1 }];
    setAddProduct(product);
    localStorage.setItem('CartList', JSON.stringify(product));
  };

  const addQuantity = (item: CartProductListType) => {
    const updatedCart = addProduct.map((product) => (
      item.id === product.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    ));
    setAddProduct(updatedCart);
    localStorage.setItem('CartList', JSON.stringify(updatedCart));
  };

  return (
    <div className="App">
      <Routes>
        <Route element={ <NavBar addProduct={ addProduct } /> }>
          <Route
            path="/"
            element={
              <Home
                addProduct={ addProduct }
                productList={ productList }
                setProductList={ setProductList }
                addProductCarrinho={ addProductCarrinho }
              />
            }
          />
          <Route
            path="/carrinho"
            element={
              <CarrinhoDeCompras
                addQuantity={ addQuantity }
                addProduct={ addProduct }
                setAddProduct={ setAddProduct }
              />
            }
          />
          <Route
            path="/detalhes/:id"
            element={
              <DetalheProdutos
                addProductCarrinho={ addProductCarrinho }
                productList={ productList }
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <CheckOut
                setAddProduct={ setAddProduct }
                setProductList={ setProductList }
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
