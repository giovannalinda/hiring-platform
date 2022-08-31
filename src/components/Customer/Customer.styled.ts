import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  background: ${theme.colors.green200};
  border-radius: ${theme.borderRadius.lg};
  text-align: center;
  padding: ${theme.space[7]};
  margin-bottom: 12rem;
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
    color: ${theme.colors.black};
    padding-bottom: ${theme.space[7]};
  }

  p {
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.paragraph};
    max-width: 46.4rem;
  }
`

export const Content = styled.div`
  display: flex;
  background: ${theme.colors.black};
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.space[7]};

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: ${theme.colors.white};
  max-width: 70rem;
  padding: ${theme.space[7]};

  h2 {
    font-size: 3rem;
    padding-bottom: ${theme.space[7]};
  }

  h3 {
    font-size: ${theme.font.sizes.paragraph};
    padding-bottom: ${theme.space[1]};
  }

  p {
    font-size: ${theme.font.sizes.paragraph};
    color: ${theme.colors.gray500};
  }
`
