import styled from "styled-components";
 
export const WrapperCarousel = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 200%;
  max-width: 1000px;
  overflow: hidden;
  justify-content: center;
  cursor: grab;
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
    height: 90%;
    border-radius: 10px;
    pointer-events: none;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

export const Description = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: white;
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;