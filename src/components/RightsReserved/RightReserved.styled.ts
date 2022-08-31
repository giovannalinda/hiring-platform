import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.div`
  border-top: 1px solid ${theme.colors.purple50};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid ${theme.colors.purple50};
  color: ${theme.colors.gray500};
  padding: ${theme.space[6]};
`
