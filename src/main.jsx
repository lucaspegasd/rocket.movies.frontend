import React from 'react'
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import { Routes } from './router'

import Theme from './styles/theme'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
