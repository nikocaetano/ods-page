import React from "react";
import Home from "./componentes/home";
import Objetivos from "./componentes/objetivos";
import { GlobalStyle } from "./styles/styles";
import {Helmet} from "react-helmet"

export default function App(){
  return(
    <section>
      <Helmet>
          <meta charSet="UTF-8"/>
          <title>ODS | Mogi das Cruzes</title>
      </Helmet>
      <GlobalStyle />
      <Home/>
    </section>
  )
}