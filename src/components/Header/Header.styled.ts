import styled from 'styled-components'
import { theme } from '~/styles'

export const Header = styled.header`
  width: 100%;
  padding: ${theme.space[5]} 0;
  position: fixed;
  background: ${theme.colors.purple600};
  color: ${theme.colors.white};
  z-index: 2;
`
