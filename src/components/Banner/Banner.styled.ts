import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(#7644fb, #6d38fc);
  height: 23rem;
  border-radius: 3rem;
  margin-bottom: 12rem;
  text-align: center;

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    padding-bottom: ${theme.space[6]};
  }

  input {
    width: 40rem;
  }
`
