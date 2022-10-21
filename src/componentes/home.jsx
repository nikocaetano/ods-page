import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "../images/logo.png"
import * as S from "../styles/styles"
import About from "./about";
import Objetivos from "./objetivos";

export default function Home() {
    return (
        <S.Section>
            <figure>
                <S.Image src={Logo} />                
            </figure>
            <BrowserRouter>
                <S.Box>
                    <S.Btn>
                        <S.Li to="/About">Clique aqui para conhecer a Agenda 2030</S.Li>
                    </S.Btn>
                    <S.Btn>
                        <S.Li to="/Objetivos">Clique aqui para conhecer os objetivos</S.Li>
                    </S.Btn>
                </S.Box>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/objetivos" element={<Objetivos />} />
                </Routes>
            </BrowserRouter>
        </S.Section>
    )
}