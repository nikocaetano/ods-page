import React from "react";
import OdsOne from "../images/desafio1.png"
import OdsTwo from "../images/desafio2.png"
import OdsThree from "../images/desafio3.png"
import OdsFour from "../images/desafio4.jpg"
import OdsFive from "../images/desafio5.png"
import OdsSix from "../images/desafio6.png"
import OdsSeven from "../images/desafio7.png"
import OdsEight from "../images/desafio8.png"
import OdsNine from "../images/desafio9.png"
import OdsTen from "../images/desafio10.png"
import OdsEleven from "../images/desafio11.jpg"
import OdsTwelve from "../images/desafio12.png"
import OdsThirteen from "../images/desafio13.png"
import OdsFourteen from "../images/desafio14.jpg"
import OdsFifteen from "../images/desafio15.png"
import OdsSixteen from "../images/desafio16.png"
import OdsSeventeen from "../images/desafio17.png"
import * as S from "../styles/objetivos-styles"

export default function Objetivos() {
    return (
        <S.Section>
            <div>
                <S.H1>Conheça os 17 objetivos da Agenda 2030</S.H1>
            </div>
            <S.Cards>
                <a href="https://brasil.un.org/pt-br/sdgs/1" target="_blank">
                <S.Photo src={OdsOne} />
                </a>
                <a href="https://www.mogidascruzes.sp.gov.br/noticia/bom-prato-de-jundiapeba-entra-em-funcionamento" target="_blank">
                <S.Photo src={OdsTwo} />
                </a>
                <a href="https://www.mogidascruzes.sp.gov.br/noticia/em-dois-meses-programa-de-indicadores-de-saude-na-escola-pise-atendeu-seis-mil-alunos" target="_blank">
                    <S.Photo src={OdsThree} />
                </a>
                <a href="https://www.mogidascruzes.sp.gov.br/noticia/parque-municipal-recebera-visitas-de-escolas-com-foco-na-educacao-ambiental" target="_blank">
                <S.Photo src={OdsFour} />
                </a>
                <a href="https://brasil.un.org/pt-br/sdgs/5" target="_blank">
                <S.Photo src={OdsFive} />
                </a>
                <a href="https://www.mogidascruzes.sp.gov.br/noticia/obra-de-esgotamento-sanitario-sera-retomada-em-jundiapeba-e-abre-vagas-para-mao-de-obra-local" target="_blank">
                    <S.Photo src={OdsSix} />
                </a>
                <a href="https://brasil.un.org/pt-br/sdgs/7" target="_blank">
                <S.Photo src={OdsSeven} />
                </a>
                <a href="https://brasil.un.org/pt-br/sdgs/8" target="_blank">
                <S.Photo src={OdsEight} />
                </a>
                <a href="https://brasil.un.org/pt-br/sdgs/9" target="_blank">
                <S.Photo src={OdsNine} />
                </a>
                <a href="https://www.mogidascruzes.sp.gov.br/noticia/copede-e-sesc-promovem-curso-sobre-acessibilidade-e-direitos-da-pessoa-com-deficiencia" target="_blank">
                    <S.Photo src={OdsTen} />
                </a>
                <a href="https://www.mogidascruzes.sp.gov.br/noticia/mogi-das-cruzes-e-destaque-em-evento-sobre-inovacao-na-gestao-publica" target="_blank">
                    <S.Photo src={OdsEleven} />
                </a>
                <a href="https://www.mogidascruzes.sp.gov.br/noticia/campanha-em-parceria-com-o-fundo-social-arrecada-embalagens-longa-vida-e-vai-sortear-um-iphone-13" target="_blank">
                <S.Photo src={OdsTwelve} />
                </a>
                <a href="https://brasil.un.org/pt-br/sdgs/13" target="_blank">
                <S.Photo src={OdsThirteen} />
                </a>
                <a href="https://brasil.un.org/pt-br/sdgs/14" target="_blank">
                <S.Photo src={OdsFourteen} />
                </a>
                <a href="https://brasil.un.org/pt-br/sdgs/15" target="_blank">
                <S.Photo src={OdsFifteen} />
                </a>
                <a href="https://brasil.un.org/pt-br/sdgs/16" target="_blank">
                <S.Photo src={OdsSixteen} />
                </a>
                <a href="https://brasil.un.org/pt-br/sdgs/17" target="_blank">
                <S.Photo src={OdsSeventeen} />
                </a>
            </S.Cards>
        </S.Section>
    )
}