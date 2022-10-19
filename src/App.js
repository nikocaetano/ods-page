import React from "react";
import Home from "./componentes/home";
import Objetivos from "./componentes/objetivos";
import { GlobalStyle } from "./styles/styles";

export default function App(){
  return(
    <section>
      <GlobalStyle />
      <Home/>
      <Objetivos/>
    </section>
  )
}