import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 100%;
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

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 0 1rem;
  }
`;

export const HeaderTitle = styled.h1`

  margin: -50px;
  font-size: 60px;
  color: white;
  display: flex;

  @media (max-width: 768px) {
    margin: 0;
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 10rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const InfoHeader = styled.ul`
  color: white;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
