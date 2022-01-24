import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

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
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route exact path="/" element={<HomePage />}></Route>
          </Routes>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </Router>
  )
}

export default App
