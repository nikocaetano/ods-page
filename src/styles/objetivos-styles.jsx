import styled from "styled-components"

export const Photo = styled.img`
width:17vw;
height:17vw;
&:hover{
    transform: scale(110%);
    
}
`

export const Section = styled.section`
display:flex;
width:100%;
flex-direction:column;
`

export const Cards = styled.section`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
height: 80vw;
`

export const H1 = styled.h1`
display:flex;
justify-content:center;
padding: 3vw 0 3vw 0;
font-size: 2em;
`
