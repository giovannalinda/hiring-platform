import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: ${theme.font.sizes.title};
    padding-top: 16rem;
    padding-bottom: ${theme.space[7]};
    text-align: center;
  }

  p {
    text-align: center;
    font-size: ${theme.font.sizes.paragraph};
    color: ${theme.colors.gray500};
    padding-bottom: ${theme.space[7]};
    max-width: 46rem;
  }
`

export const ServicesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${theme.space[4]};
  width: 100%;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

export const ServicesItem = styled.li`
  padding: ${theme.space[7]};
  border-radius: ${theme.borderRadius.lg};
  width: 36.7rem;
  height: 34.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  svg {
    color: ${theme.colors.white};
  }

  h2 {
    font-size: ${theme.font.sizes.subtitle};
    padding-bottom: ${theme.space[4]};
  }

  span {
    font-size: ${theme.font.sizes.paragraph};
    color: ${theme.colors.gray500};
    line-height: ${theme.font.lineHeights.small};
  }
`

export const ContainerIcon = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.lg};
  margin-top: -4rem;
  margin-bottom: 3rem;
`
