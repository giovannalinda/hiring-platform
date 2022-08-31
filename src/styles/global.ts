import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #__next {
    min-height: 100vh;
  }

  body {
    background: ${theme.colors.white};
    font-family: ${theme.font.family};
    overflow-x: hidden;
    color: ${theme.colors.black};
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  &::selection {
    color: ${theme.colors.purple600};
    background:  ${theme.colors.green200};
  }
`
