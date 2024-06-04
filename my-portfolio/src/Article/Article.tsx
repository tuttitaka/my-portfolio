import React from "react";
import * as S from "./styles"
import imagAvatar from "../Assets/img/Avatar.jpeg"
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";


export const Article:  React.FC = () => {
    return (
        <S.StyledArticle>
            <S.AvatarImg>
                <img src= {imagAvatar} alt="" />
            </S.AvatarImg>

            <S.InfoWrapper>
                <S.TitleArticle>
                    Transformando Experiências
                    <p>Criações Inovadoras para Usuários</p> 
                </S.TitleArticle>
                <S.TextArticle>
                            Sou Desenvolvedor Júnior, Iniciando Minha Jornada na Carreira de Front-End <br /><br />
                            Durante minha jornada como desenvolvedor júnior, tenho buscado absorver conhecimentos em HTML, CSS e JavaScript, Typescript e React  os pilares fundamentais da construção de interfaces web interativas e responsivas. Além disso, estou explorando frameworks modernos como React.js, buscando aprofundar meu conhecimento e expandir minha habilidade de criar experiências digitais inovadoras.
                    </S.TextArticle>

                    <S.IconArticle>
                        <FaHtml5 /> <IoLogoCss3 /> <BiLogoTypescript />
                        <FaReact /> <FaSass />
                        <SiStyledcomponents />
                    </S.IconArticle>
            </S.InfoWrapper>
        </S.StyledArticle>
        
    )
}