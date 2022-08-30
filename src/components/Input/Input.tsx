import * as S from './Input.styled'

export function Input({ ...rest }) {
  return (
    <S.Container>
      <S.GenericInput {...rest} />
      <S.Button>Start Free Trial</S.Button>
    </S.Container>
  )
}
