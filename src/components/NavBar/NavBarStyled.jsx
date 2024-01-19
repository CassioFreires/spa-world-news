import styled from 'styled-components';


export const ImageLogo = styled.img`
    width: 8rem;
    height: 3.5rem;
    cursor: pointer;
`

export const Header = styled.header `
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Nav = styled.nav `
    min-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    position: fixed;
    top: 0;
    background-color: #fff;
    z-index: 1;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    padding-inline: 1rem;
`
export const HeaderInput = styled.div `
    width: 300px;
    position: relative;
    display: flex;

    i {
        position: absolute;
        top: 1px;
        left: 250px;
        z-index: 10;
        border: none;
        color: #757575;
        background-color: #f5f5f5;
        border-radius: 0.3rem;
        padding: 0.6rem;
        cursor: pointer;
    } 

    input {
        width: 100%;
        border: none;
        outline: none;
        font-size: 1rem;
        padding: 0.6rem;
        background-color: #f5f5f5;
        border-radius: 0.3rem;

        &:focus {
            border: 1px solid #23d3fe;
        }
    }
`

export const ErrorSpan = styled.span`
  background-color: #ffcdcd;
  color: #9e0000;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  border-radius: 7px;
  margin-top: 6rem;
`;