import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const Button = styled.button`
  margin-left: -13.2rem;
  margin-top: 0.8rem;
  background: ${theme.colors.green200};
  height: 3.9rem;
  width: 12.8rem;
  border-radius: 30rem;
  font-weight: ${theme.font.weigths.bold};
  color: ${theme.colors.black};
`

export const GenericInput = styled.input`
  border: none;
  color: ${theme.colors.gray500};
  height: 5rem;
  padding: 0 6rem 0 ${theme.space[5]};
  margin-top: ${theme.space[1]};
  width: 100%;
  border-radius: 30rem;
  background: ${theme.colors.white};
  transition: all ${theme.transitions.slow};
  outline: 0;

  &:focus {
    outline-offset: 0.3rem;
    outline: 0.2rem solid ${theme.colors.green200};
  }

  ::placeholder {
    font-size: 1.2rem;
    color: ${theme.colors.gray200};
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    width: 30rem;
  }

  @media screen and (max-width: ${theme.breakpoints.smallMobile}) {
    width: 25rem;
  }
`
