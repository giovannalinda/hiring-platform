import Image from 'next/image'
import { BsCheckLg } from 'react-icons/bs'
import { motion } from 'framer-motion'

import { Assets } from '~/assets'
import { Input } from '../Input'

import * as S from './Apresentation.styled'

const TITLE = 'Next generation hiring solution.'
const PARAGRAPH =
  'Powerful, agile, all-in-one hiring tool for your recruiting needs, built with productivity at heart and loaded with features to help you hire more effectively.'

const letterVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export function Apresentation() {
  return (
    <S.Container id='home'>
      <S.Content>
        <S.TextGroup>
          <S.Highlight>
            <Image src={Assets.Highlight} width={18} height={22} />
          </S.Highlight>

          <h1>
            {TITLE.split('').map((char, index) => (
              <motion.span
                className='purple'
                key={`${char}-${index}`}
                variants={letterVariant}
                transition={{
                  delay: index / TITLE.length,
                  duration: 0.4,
                }}
                initial='hidden'
                animate='visible'
              >
                {char}
              </motion.span>
            ))}
            <br />
          </h1>

          <p>
            {PARAGRAPH.split('').map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={letterVariant}
                transition={{
                  delay: index / PARAGRAPH.length,
                  duration: 0.4,
                }}
                initial='hidden'
                animate='visible'
              >
                {char}
              </motion.span>
            ))}
          </p>

          <Input placeholder='Your email address...' />

          <S.Benefits>
            <span>
              <BsCheckLg size={12} />
              30 days free trial
            </span>
            <span>
              <BsCheckLg size={12} />
              No credit card required
            </span>
          </S.Benefits>
        </S.TextGroup>

        <S.ContentImageApresentation>
          <Image src={Assets.Apresentation} width={530} height={517} />
        </S.ContentImageApresentation>
      </S.Content>
    </S.Container>
  )
}
