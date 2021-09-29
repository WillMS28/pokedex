import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  font-size: 28px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`
