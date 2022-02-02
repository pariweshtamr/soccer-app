import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import CartPage from './pages/Cart/CartPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Products/ProductPage'
import SigninPage from './pages/SigninPage'
import RegisterPage from './pages/RegisterPage'
import EmailVerification from './pages/EmailVerification/EmailVerification'
import ShippingAddressPage from './pages/ShippingAddress/ShippingAddressPage'
import PaymentMethodPage from './pages/Payment/PaymentMethodPage'

function App() {
  return (
    <Router>
      <div className="grid-container">
        <NavBar />
        <main>
          <Routes>
            <Route path="/cart/:id" element={<CartPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route path="/signin" element={<SigninPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route
              path="/email-verification"
              element={<EmailVerification />}
            ></Route>
            <Route path="/shipping" element={<ShippingAddressPage />}></Route>
            <Route path="/payment" element={<PaymentMethodPage />}></Route>
            <Route path="/" exact element={<HomePage />}></Route>
            <Route path="/not-found" element={<NotFound />}></Route>
          </Routes>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </Router>
  )
}

export default App
