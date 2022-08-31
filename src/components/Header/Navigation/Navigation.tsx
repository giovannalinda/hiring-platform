import Link from 'next/link'
import * as S from './Navigation.styled'

export function Navigation() {
  return (
    <S.Navigation>
      <ul>
        <li>
          <Link href='#home'>Home</Link>
        </li>
        <li>
          <Link href='#about'>About</Link>
        </li>
        <li>
          <Link href='#pricing'>Pricing</Link>
        </li>
        <li>
          <Link href='#blog'>Blog</Link>
        </li>
      </ul>
    </S.Navigation>
  )
}
