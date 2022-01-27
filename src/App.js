import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Products/ProductPage'

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Sports House
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/cart/:id?" element={<CartPage />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route path="/" exact element={<HomePage />}></Route>
            <Route>404 Not Found</Route>
          </Routes>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </Router>
  )
}

export default App
