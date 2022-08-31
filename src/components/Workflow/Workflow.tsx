import Image from 'next/image'
import { Assets } from '~/assets'

import * as S from './Workflow.styled'

export function Workflow() {
  return (
    <S.Container>
      <S.Content>
        <S.TextGroup>
          <h1>Interactive human resources workflow</h1>
          <p>
            Redefining job application process and let you meet the best
            candidates in the shortest time
          </p>

          <Image src={Assets.Workflow1} width={529} height={291} />
        </S.TextGroup>

        <S.TextGroup>
          <Image src={Assets.Workflow2} width={529} height={291} />
          <h1 style={{ paddingTop: '15rem' }}>
            Innovatively built for recruiters and applicants
          </h1>
          <p>
            We create engaging experience with our dedicated tool, post an
            application and let your candidates self-checkout their way towards
            and interview
          </p>
        </S.TextGroup>
      </S.Content>
    </S.Container>
  )
}
