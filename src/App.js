import { GlobalStyle } from './global.styles'
import Home from './components/routes/home/home.component'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/routes/navigation/naviagation.component'
import Authentication from './components/routes/authentication/authentication'
import Shop from './components/routes/shop/shop.component'
import Checkout from './components/routes/checkout/checkout.component'
import { checkUserSession } from './store/user/user.action'
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
  })
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />;
          <Route path="shop/*" element={<Shop />} />;
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
