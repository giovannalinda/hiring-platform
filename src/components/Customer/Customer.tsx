import Image from 'next/image'
import { Assets } from '~/assets'
import * as S from './Customer.styled'

export function Customer() {
  return (
    <S.Container>
      <S.TextGroup>
        <h1>What our beloved customers says</h1>
        <p>
          We have over 10.000 companies that use our tools and services, hear
          their story
        </p>
      </S.TextGroup>

      <S.Content>
        <Image src={Assets.BusinessWoman} width={393} height={387} />
        <S.ContentText>
          <h2>
            “Since using Recruiter, our workflow has improved dramatifally, the
            tool makes HR very agile and lightweight”
          </h2>
          <h3>Anna Smith</h3>
          <p>Head of Human Resources Department</p>
        </S.ContentText>
      </S.Content>
    </S.Container>
  )
}
