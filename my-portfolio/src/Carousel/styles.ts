import styled from "styled-components";



export const WrapperCarousel = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 200%;
    max-width: 1000px;
    cursor: grab;
    overflow: hidden;
    justify-content: center;
    
`
export const WrapperItens = styled.div`



`
export const Itens = styled.div`
    
    display: flex;
    min-height: 200px;
    min-width: 400px;
    gap: 3rem;

    img{
        width: 100%;
        height: 90%;
        border-radius: 10px;
        pointer-events: none;
    }

`