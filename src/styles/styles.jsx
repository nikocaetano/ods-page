import styled, {createGlobalStyle} from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Secular One';
}
`

export const Image = styled.img`
width: 100%;
`

export const Section = styled.section`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`

export const Btn = styled.button`
width: 22vw;
height:5vw;
background-color: #00aeef;
border: none;
text-transform: uppercase;
`

export const Li = styled(Link)`
color: white;
text-decoration: none;
`

export const Box = styled.div` 
display:flex;
justify-content: space-evenly;
width: 100%;
`