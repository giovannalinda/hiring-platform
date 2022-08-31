import { Input } from '../Input'

import * as S from './Banner.styled'

export function Banner() {
  return (
    <S.Container>
      <h1>Register and get 30 days free trial 🤩</h1>
      <Input placeholder='Your email address...' />
    </S.Container>
  )
}
