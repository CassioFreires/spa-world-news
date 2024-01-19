import styled from 'styled-components';

export const CardContainer = styled.section`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 0.5rem;
    background-color: #fff;
    height: ${({search}) => search? "15rem" : ""};
`

export const CardBody = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    width: 100%;

    div{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        width: 100%;
    }

    img{
        width: 30%;
        border-radius: 0 .3rem .3rem 0;
        cursor: pointer;
        object-fit: cover;
        object-position: center;
        height: 100%;
    }
    div h2 {
        margin-bottom: 1rem;
        width: 70%;
    }
`


export const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;

    div{
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }
    section {
        width: ${({top}) => top? "5%" : "10%"};
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
    
`

export const CardHeader = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: ${({top}) => top? "1.2rem" : "1rem"};

    h2 {
        font-size: ${({top}) => top? "3rem":"1rem"};
    }
`