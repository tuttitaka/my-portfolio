import React from "react";
import * as S from "./styles"
import { PiDevToLogo } from "react-icons/pi";

export const Header: React.FC = () => {
    return(
        <S.StyledHeader>

            <S.Wrapper>
                <S.HeaderTitle>Luis Eduardo <PiDevToLogo />
                </S.HeaderTitle>
                
                <S.InfoWrapper>
                    <S.InfoHeader>Home</S.InfoHeader>
                    <S.InfoHeader>Projects</S.InfoHeader>
                    <S.InfoHeader>Contact</S.InfoHeader>
                </S.InfoWrapper>
            </S.Wrapper>
            
        </S.StyledHeader>
    )
}