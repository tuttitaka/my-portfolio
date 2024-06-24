import styled from "styled-components";

export const StyledArticle = styled.div`
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  @media (max-width: 768px) {
    margin: 20px;
  }

  @media (max-width: 480px) {
    margin: 10px;
  }
`;

export const AvatarImg = styled.div`
  img {
    width: 250px;
    height: 254px;
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 200px;
      height: 204px;
    }

    @media (max-width: 480px) {
      width: 150px;
      height: 154px;
    }
  }
`;

export const InfoWrapper = styled.div`
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

export const TitleArticle = styled.h1`
  text-align: center;
  color: white;
  font-size: 40px;
  font-weight: lighter;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const TextArticle = styled.p`
  width: 700px;
  margin-top: 30px;
  text-align: center;
  color: #c5c5c5;
  font-size: 18px;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const IconArticle = styled.p`
  font-size: 50px;
  color: white;
  letter-spacing: 16px;
  text-align: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    font-size: 40px;
    letter-spacing: 12px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    letter-spacing: 8px;
    margin-top: 30px;
  }
`;
