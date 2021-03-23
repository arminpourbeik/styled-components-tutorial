import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
  transition: background-color 0.3s ease;
}

body {
  background: ${(p) => p.theme.bodyBackgroundColor};
		min-height: 100vh;
		margin: 0;
		color: ${(p) => p.theme.bodyFontColor};
		font-family: 'Kaushan Script'
}
`
export default GlobalStyle
