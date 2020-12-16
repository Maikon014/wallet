import styled from 'styled-components';


export const Container = styled.div`
  height: 100%;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.primary};
`;


export const Logo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 30px;

  >h2 {
  color: ${props => props.theme.colors.white};
  margin-left: 7px;
  }

  >img {
    width: 35px;
    height: 35px;
  }
`; 


export const Form = styled.form`
  width: 400px;
  height: 400px;

  padding: 50px;

  border-radius: 20px;

  background-color: ${props => props.theme.colors.tertiary};
`;


export const FormTitle = styled.h1`
  margin-bottom: 50px;
  color: ${props => props.theme.colors.white};

  &:after {
    content: '';
    display: block;
    width: 55px;
    border-bottom: 10px solid ${props => props.theme.colors.warning};
  }
`;