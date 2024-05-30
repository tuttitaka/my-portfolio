import styled from "styled-components";

export const  StyledHeader = styled.header`

    max-width: auto;
    background-color: #222222;
`;
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 70px;
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 1px;
`;


export const HeaderTitle = styled.h1`
    margin: -50px;
    font-size: 60px;
    color: white;
    display: flex;
`;
export const InfoWrapper = styled.div`
    display: flex;
    gap: 10rem;
`;

export const InfoHeader = styled.ul`
    color: white;
    font-size: 20px;
`