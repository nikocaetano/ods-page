import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "../images/logo.png"
import * as S from "../styles/styles"

export default function Home() {
    return (
        <S.Section>
            <figure>
                <S.Image src={Logo} />
                <p>Conheça os 17 objetivos da Agenda 2030</p>
            </figure>            
        </S.Section>
    )
}