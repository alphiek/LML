import React from 'react'
import styled from 'styled-components'

import { tenants } from '../../copy/tenants'
import Flex from '../containers/Flex'
import { colors } from '../../global/colors'

const QuizParent = styled.div`
  width:25%;
  padding: 5%;
  background-color: ${colors.dustyBlue};
`
const QuizRight = styled(QuizParent)`
  background-color: ${colors.mint};
`

const QuizLinks = () => {
    const { algorithm, landlord } = tenants
    return (
     <Flex noWrap style={{width: '100%', position: 'relative', top: '-8em'}}>
         <QuizParent>
             <h3>{algorithm.title}</h3>
              <p>{algorithm.text}</p>
              <a>{algorithm.cta}</a>
         </QuizParent>
         <QuizRight style={{position: 'relative'}}>
              <h3>{landlord.title}</h3>
              <p>{landlord.text}</p>
              <a>{landlord.cta}</a>
         </QuizRight>
     </Flex>
    )
}

export default QuizLinks