import { useState } from 'react';
import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'
import { Home } from './components/Home';


import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyled from './styles/global'

const App = () => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>

      <Header toggleTheme={toggleTheme} />
      <Home />
      <GlobalStyled />
    </ThemeProvider>
  );
}

export default App;
