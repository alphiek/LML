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
      width: 65%;
      margin-top: 1em;
    }
    @media (max-width: 768px) {
      margin-top: 1.5em;
      width: 78%;
    }
    @media (max-width: 480px) {
      width: 75%;
    }
`


const Headline = ({ copy }) => {

  
const realNumberArray = [4, 5.6, -9.8, 7.14, 42, 6, 8.34, -2];

const squareList = (arr => {
    const squaredIntegers = arr.filter(item => Number.isInteger(item) && item >= 0).map(item => item * item)
    return squaredIntegers
  }
)

const squaredIntegers = squareList(realNumberArray)
console.log(squaredIntegers)



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