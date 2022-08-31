import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10rem;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    display: flex;
    flex-direction: column;
    padding: ${theme.space[1]} ${theme.space[1]};
  }

  h2 {
    padding-bottom: ${theme.space[2]};
    font-size: ${theme.font.sizes.subtitle};
  }

  span {
    padding-bottom: ${theme.space[1]};
    color: ${theme.colors.gray200};
    font-size: ${theme.font.sizes.paragraph};
    transition: ${theme.transitions.slow};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.green200};
    }
  }
`
