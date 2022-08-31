import Image from 'next/image'
import { Assets } from '~/assets'

import * as S from './HiringProcess.styled'

export function HiringProcess() {
  return (
    <S.Container>
      <S.TextGroup>
        <h1>End-to-end hiring process</h1>
        <p>
          Redefining job application process and let you meet the best
          candidates in the shortest time
        </p>
      </S.TextGroup>

      <S.GridImage>
        <Image src={Assets.WomanWithHeadset} width={690} height={449} />

        <div>
          <Image src={Assets.ManWithHeadset} width={240} height={217} />
          <Image src={Assets.Woman} width={240} height={217} />
        </div>
      </S.GridImage>
    </S.Container>
  )
}
