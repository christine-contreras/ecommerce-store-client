import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import theme from './style/theme/theme'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useSetRecoilState } from 'recoil'
import { userAtom, cartAtom } from './atoms/atoms'

import Layout from './containers/Layout'
import Home from './containers/Home'
import SignUpLogin from './containers/SignUpLogin'
import Dashboard from './containers/profile/Dashboard'
import Main from './containers/profile/Main'

function App() {
  const appliedTheme = createTheme(theme)
  const setUser = useSetRecoilState(userAtom)
  const setCart = useSetRecoilState(cartAtom)

  React.useEffect(() => {
    // auto-login
    handleCheckLogin()

    // check or create cart
    handleCheckCart()
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

            <Route path='/admin-dashboard' element={<Dashboard />}></Route>
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
