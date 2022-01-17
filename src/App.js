import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import theme from './style/theme/theme'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useSetRecoilState } from 'recoil'
import { userAtom, cartAtom, categoriesAtom } from './atoms/atoms'

import Layout from './containers/Layout'
import Home from './containers/Home'
import SignUpLogin from './containers/SignUpLogin'
import Dashboard from './containers/profile/Dashboard'
import Main from './containers/profile/Main'
import PLP from './containers/PLP'
import Container from './containers/Container'
import PDP from './containers/PDP'
import Cart from './containers/Cart'
import Checkout from './containers/Checkout'
function App() {
  const appliedTheme = createTheme(theme)
  const setUser = useSetRecoilState(userAtom)
  const setCart = useSetRecoilState(cartAtom)
  const setCategories = useSetRecoilState(categoriesAtom)

  React.useEffect(() => {
    // auto-login
    handleCheckLogin()

    // check or create cart
    handleCheckCart()

    // fetch categories
    handleFetchCategories()
  })

  const handleCheckLogin = () => {
    fetch('/api/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
        })
      } else {
        response.json().then((err) => console.log(err))
      }
    })
  }

  const handleCheckCart = () => {
    fetch('/api/user-cart').then((response) => {
      if (response.ok) {
        response.json().then((cart) => {
          setCart(cart)
          console.log(cart)
        })
      } else {
        response.json().then((err) => console.log(err))
      }
    })
  }

  const handleFetchCategories = () => {
    fetch('/api/categories').then((response) => {
      if (response.ok) {
        response.json().then((categories) => {
          setCategories(categories)
          console.log(categories)
        })
      } else {
        response.json().then((err) => console.log(err))
      }
    })
  }

  //change to  useResetRecoilState(state)
  const handleLogout = () => {
    fetch('/api/logout', {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) setUser(null)
    })
  }

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Router>
        <Layout onLogout={handleLogout}>
          <Routes>
            <Route index path='/' element={<Home />} />

            <Route
              path='/create-account'
              element={
                <SignUpLogin
                  onLogout={handleLogout}
                  title='Create An Account'
                />
              }
            />

            <Route
              path='/login'
              element={<SignUpLogin onLogout={handleLogout} title='Login' />}
            />

            <Route path='/profile' element={<Dashboard />}>
              <Route path='my-info' element={<Main title='Profile Info' />} />
              <Route
                path='my-shipping'
                element={<Main title='Shipping Info' />}
              />
              <Route
                path='my-orders'
                element={<Main title='Order History' />}
              />
            </Route>

            <Route path='/admin-dashboard' element={<Dashboard />}>
              <Route
                path='categories'
                element={<Main title='Category Taxonomy' />}
              />

              <Route
                path='products'
                element={<Main title='Product Catalog' />}
              />

              <Route path='orders' element={<Main title='Order History' />} />
            </Route>

            <Route path='/category' element={<Container />}>
              <Route path=':id' element={<PLP />} />
            </Route>

            <Route path='/product' element={<Container />}>
              <Route path=':id' element={<PDP />} />
            </Route>

            <Route path='/checkout' element={<Checkout />} />
          </Routes>

          <Cart />
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
