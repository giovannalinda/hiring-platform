import Image from 'next/image'
import { Assets } from '~/assets'

import * as S from './Companies.styled'

const companies = [
  {
    name: 'Google',
    logo: Assets.LogoGoogle,
  },
  {
    name: 'Uber',
    logo: Assets.LogoUber,
  },
  {
    name: 'Amazon',
    logo: Assets.LogoAmazon,
  },
  {
    name: 'Facebook',
    logo: Assets.LogoFacebook,
  },
  {
    name: 'Ifood',
    logo: Assets.LogoIfood,
  },
]

export function Companies() {
  return (
    <S.Container>
      <S.ContainerImage>
        <Image src={Assets.Shape} width={114} height={37} />
      </S.ContainerImage>
      <S.Content>
        <h1>Used by 10.000+ companies around the world</h1>
        <S.CompaniesList>
          {companies.map((company) => (
            <li key={company.name}>
              <Image src={company.logo} width={150} height={40} />
            </li>
          ))}
        </S.CompaniesList>
        <p>...and many more</p>
      </S.Content>
    </S.Container>
  )
}
