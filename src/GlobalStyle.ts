import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   :root {
       --white-color: #ffffff;
       --text-color: #000000; 
       --bg-color: #f8f9fd;
       --pri-color: #2F80ED;
       --pri-color-light: #DAE4FD;
       --dark-color: #333333;
       --sec-color:#bdbdbd;
       --sec-color-light: #828282;
       --light-color: #f2f2f2;
   }

   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Poppins', sans-serif;
     /* font-size: 16px; */
     line-height: 22px;
     /* color: var(--text-color); */
     font-weight: normal;
   }

   body{
    background-color: var(--bg-color);
    position: relative;
   }

   li {
     list-style: none;
   }

   a {
    text-decoration: none;
   }

   button {
     cursor: pointer;
     outline: none;
     border: none;
   }

   input {
     outline: none;
     border: none;
   }
   ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: #bfc4ce;
  }

  ::-webkit-scrollbar-track {
    background-color: #dadbe2;
    border-radius: 50px;
  }
`;

export default GlobalStyle;
