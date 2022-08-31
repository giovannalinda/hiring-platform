import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  background: ${theme.colors.blue400};
  margin-top: 22.6rem;
  border-radius: ${theme.borderRadius.lg};
  text-align: center;
  padding: ${theme.space[7]};
`

export const TextGroup = styled.div`
  padding-top: 6.2rem;
  padding-bottom: 6.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: ${theme.font.sizes.title};
    color: ${theme.colors.white};
    padding-bottom: ${theme.space[7]};
  }

  p {
    color: ${theme.colors.blue100};
    font-size: ${theme.font.sizes.paragraph};
    max-width: 46.4rem;
  }
`

export const GridImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 240px;
  grid-gap: ${theme.space[3]};
  width: 100%;
  padding: 0 6.2rem 6.2rem 6.2rem;

  div {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: ${theme.space[3]};
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
