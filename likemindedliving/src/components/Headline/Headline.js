import React from 'react'
import styled from 'styled-components'

import H1SplitText from '../animations/H1SplitText'
import Flex from '../containers/Flex'
import { FadeIn } from '../animations/FadeIn'
import { LandingDivider } from '../Dividers/Dividers'


const TextCenter = styled(Flex)`
  width: 50%;
    @media (max-width: 1460px) {
        width: 60%;
    }
    @media (max-width: 1024px) {
      width: 70%;
    }
    @media (max-width: 480px) {
        width: 78%;
    }
`


const Headline = ({ copy }) => {
  return (
    <Flex justifyCenter alignCenter>
       <TextCenter justifyCenter alignCenter>
        <H1SplitText h1={copy.h1} color={copy.color} />
        <LandingDivider color={copy.divider} />
        <FadeIn delay={300} >
          <p className={copy.class}>{copy.p1}</p>
        </FadeIn>
      </TextCenter>
    </Flex>     
  )
}



export default Headline