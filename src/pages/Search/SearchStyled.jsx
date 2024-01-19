import styled from 'styled-components';

export const ContainerResults = styled.section`
    margin-top: 6rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 50%;

    }
`

export const SearchNews = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin: 1rem auto;
    width: 90%;
    border-radius: 0.3rem;

`

export const TextResults = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;
    font-size: 1rem;
    width: 90%;
    height: 8rem;
    background-color: #fff;
    border-radius: 0.3rem;
    margin-top: 1rem;

    span{
        color: #23D3FE;
        font-size: 1rem;
    }
`