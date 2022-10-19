import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`

export const Image = styled.img`
width: 100%;
`

export const Section = styled.section`
display:flex;
justify-content:center;
align-items:center;
`

export const Photo = styled.img`
width:15vw;
height:15vw;
`