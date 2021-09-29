import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  height: calc(100vh - 60px);
`

export const Form = styled.form`
  margin-top: 60px;
  margin-bottom: 0in;

  input {
    width: 220px;
    height: 40px;
    border-radius: 8px;
    border: transparent 0.2;

    font-size: 18px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    padding-left: 5px;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
  }
`
export const SearchPoke = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 200px;
    height: 200px;
    -webkit-filter: drop-shadow(5px 5px 8px #222);
    filter: drop-shadow(5px 5px 8px #222);
  }

  div {
    font-size: 24px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    color: ${props => props.theme.colors.text};

    & section {
      margin-top: 20px;

    }
  }
`

export const PokeName = styled.h2`
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  color: ${props => props.theme.colors.text};
`
