import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  margin-top: 23rem;
  margin-bottom: 26rem;
  text-align: left;

  h1 {
    font-size: ${theme.font.sizes.title};
    padding-bottom: ${theme.space[7]};
  }

  p {
    max-width: 40rem;
    font-size: ${theme.font.sizes.paragraph};
    color: ${theme.colors.gray500};
    padding-bottom: 15rem;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 20rem;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const TextGroup = styled.div``
