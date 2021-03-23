import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Pages
import Home from 'components/pages/Home'
import Login from 'components/pages/Login'
// Themes
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'themes/global'
import LightTheme from 'themes/light'
import DarkTheme from 'themes/dark'

export default function App() {
  const [theme, setTheme] = useState(LightTheme)

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === 'light' ? DarkTheme : LightTheme))
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}
