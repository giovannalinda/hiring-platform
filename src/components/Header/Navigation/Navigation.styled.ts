import styled from 'styled-components'
import { theme } from '~/styles'

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ul {
    display: flex;
  }

  li {
    font-size: ${theme.font.sizes.small};
    z-index: 1;
    font-weight: ${theme.font.weigths.bold};
    position: relative;

    a {
      color: ${theme.colors.white};
    }

    &::after {
      content: '';
      position: absolute;
      background: ${theme.colors.white};
      width: 0;
      height: 0.2rem;
      bottom: -${theme.space[0]};
      left: 0;
      transition: all ${theme.transitions.fast};
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }

    & + li {
      margin-left: ${theme.space[6]};
    }
  }
`
