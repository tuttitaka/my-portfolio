import styled from "styled-components";

export const WrapperCarousel = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  overflow: hidden;
  justify-content: center;
  cursor: grab;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const WrapperItens = styled.div`
  display: flex;
`;

export const Itens = styled.div`
  display: flex;
  min-height: 200px;
  min-width: 400px;
  gap: 3rem;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
    pointer-events: none;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 200px;
    }

    @media (max-width: 480px) {
      height: 150px;
    }
  }

  @media (max-width: 768px) {
    min-width: 300px;
  }

  @media (max-width: 480px) {
    min-width: 200px;
    gap: 1rem;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;

  @media (max-width: 480px) {
    margin: 0 5px;
  }
`;

export const Description = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;