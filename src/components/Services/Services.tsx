import {
  BsBriefcaseFill,
  BsFillPeopleFill,
  BsFillDiagram3Fill,
} from 'react-icons/bs'

import { motion } from 'framer-motion'

import * as S from './Services.styled'

const TITLE = 'Everything you need to grow your team'
const PARAGRAPH =
  'Redefining job application process and let you meet the best candidates in the shortest time'

const letterVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export function Services() {
  return (
    <S.Container>
      <h1>
        {TITLE.split('').map((char, index) => (
          <motion.span
            className='purple'
            key={`${char}-${index}`}
            variants={letterVariant}
            transition={{
              delay: index / TITLE.length,
              duration: 0.9,
            }}
            initial='hidden'
            animate='visible'
          >
            {char}
          </motion.span>
        ))}
      </h1>

      <p>
        {PARAGRAPH.split('').map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letterVariant}
            transition={{
              delay: index / PARAGRAPH.length,
              duration: 0.9,
            }}
            initial='hidden'
            animate='visible'
          >
            {char}
          </motion.span>
        ))}
      </p>

      <S.ServicesList>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <S.ServicesItem style={{ background: '#FBF5FE' }}>
            <S.ContainerIcon style={{ background: '#6D39FA' }}>
              <BsBriefcaseFill size={24} />
            </S.ContainerIcon>

            <h2>Entrerprise Job Board</h2>
            <span>
              You have a branded job board as a centralized place to display all
              the open positions at your organization
            </span>
          </S.ServicesItem>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <S.ServicesItem style={{ background: '#FFFAF5' }}>
            <S.ContainerIcon style={{ background: '#FF9635' }}>
              <BsFillPeopleFill size={24} />
            </S.ContainerIcon>
            <h2>Candidate Management</h2>
            <span>
              As they apply new candidates automatically show up in the hiring
              dashboard for efficient review and management
            </span>
          </S.ServicesItem>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <S.ServicesItem style={{ background: '#F5FFF7' }}>
            <S.ContainerIcon style={{ background: '#27D14D' }}>
              <BsFillDiagram3Fill size={24} />
            </S.ContainerIcon>
            <h2>Team Collaboration</h2>
            <span>
              Hiring is a team sport and Recruiter is set up to support it. With
              no limit on your user-count, you can invite all the help you need
            </span>
          </S.ServicesItem>
        </motion.div>
      </S.ServicesList>
    </S.Container>
  )
}
