import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid ${theme.colors.purple50};
  padding: ${theme.space[7]};

  h1 {
    padding-bottom: 8rem;
    text-align: center;
  }
`

export const Content = styled.div`
  max-width: ${theme.grid.lg};
  margin: 0 auto;

  p {
    text-align: center;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray500};
    padding-bottom: ${theme.space[3]};
  }
`

export const ContainerImage = styled.div`
  margin-top: -23rem;
  position: absolute;
  z-index: -1;
`

export const CompaniesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: ${theme.space[7]};
  width: 100%;
  padding-bottom: 8rem;
`
