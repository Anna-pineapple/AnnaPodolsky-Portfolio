import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;
    /* --gray-1: #BCB4B4; */
    --oxford-blue: #343F56;
    --deep-dark: F5E6CA;
    /* --deep-dark: #1E1E1E; */
    --hex: #F5E6CA;
    --gray-2: #363636;
    --white: white;
    --black: black;
    --salmon-pearl: #f53448;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-2);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      z-index: 101;
      background: var(--dark-bg);
      .scrollbar-thumb-y {
      background: var(--gray-2);
      }
    }
  }
`;
export default GlobalStyles;
