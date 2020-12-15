
import React from 'react'
import { GlobalStyles } from 'twin.macro'
import "../styles/Font.css"


const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App