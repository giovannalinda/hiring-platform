import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: ${theme.colors.purple600};
  color: ${theme.colors.white};
  padding-top: 12rem;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.space[7]};
  }
`

export const Content = styled.div`
  display: flex;
  max-width: ${theme.grid.lg};
  width: 100%;
  margin: 0 auto;
  margin: ${theme.space[7]};

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.space[4]};
  }
`

export const TextGroup = styled.div`
  max-width: 49rem;
  margin-right: 12rem;

  h1 {
    font-size: 6rem;
    font-weight: ${theme.font.weigths.regular};
    max-width: 70rem;
    position: relative;
    font-weight: ${theme.font.weigths.bold};
    padding-bottom: ${theme.space[6]};

    @media screen and (max-width: ${theme.breakpoints.smallMobile}) {
      font-size: ${theme.font.sizes.title};
    }
  }

  p {
    font-size: ${theme.font.sizes.paragraph};
    color: ${theme.colors.purple100};
    line-height: ${theme.font.lineHeights.small};
    padding-bottom: ${theme.space[6]};

    @media screen and (max-width: ${theme.breakpoints.smallMobile}) {
      font-size: ${theme.font.sizes.small};
    }
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    max-width: 100%;
    margin-right: 0;
  }
`

export const Benefits = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: ${theme.space[5]};

  svg {
    margin-right: ${theme.space[1]};
  }

  span {
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weigths.regular};
  }

  span + span {
    padding-left: ${theme.space[6]};
  }
`

export const Highlight = styled.div`
  padding-left: 47rem;
  padding-top: 0.8rem;
  position: absolute;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`

export const ContentImageApresentation = styled.div`
  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`
