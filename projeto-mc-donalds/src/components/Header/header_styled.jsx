import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
         margin:0;
         padding:0;
         box-sizing:border-box;
         font-family: sans-serif;
    }                        
`;

export const Header = styled.header`
  display: flex;
  padding: 1em 2em;
  justify-content: space-between;
  section {
    width: 380px;
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const ContainerPedido = styled.p`
   display:flex;
   align-items:center;
   border-radius: 8px;
   background-color: rgba(255, 199, 44, 1);
   padding: .4em .8em;
`;
