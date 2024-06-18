import React from 'react'
import * as S from './styles'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";


export const Footer: React.FC = () => {
    return (
        <S.FooterContainer>
            <S.FooterText>
                © 2024 Meu Site. Todos os direitos reservados. <br />
                <a href="https://wa.me/+5511942723807?text=teste" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                    <S.ContactText>
                        Entre em contato
                    </S.ContactText>
                </a>

            </S.FooterText>

            <S.SocialIcons>
                <a href="https://www.linkedin.com/in/luis-eduardo-furtado-de-almeida-11235a298/" target="_blank" rel="noopener noreferrer"><CiLinkedin /></a>
                <a href="https://www.instagram.com/tuttiluis/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </S.SocialIcons>
        </S.FooterContainer>
    )

}