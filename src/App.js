import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import theme from './style/theme/theme'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useSetRecoilState } from 'recoil'
import { userAtom } from './atoms/atoms'

import Layout from './containers/Layout'
import Home from './containers/Home'

function App() {
  const appliedTheme = createTheme(theme)

  const setUser = useSetRecoilState(userAtom)

  React.useEffect(() => {
    // auto-login
    handleCheckLogin()
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

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route index path='/' element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
