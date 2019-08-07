import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'

import { useSiteMetaData } from '../../hooks/useSiteMetaData'
import { Grey } from '../shapes/Shapes'
import { tenants } from '../../copy/tenants'
import illustrationOne from '../../images/Artboard 4.svg'

const FlexRight = styled.div`
   width: 60%;
   position: relative;
`
const Illustration = styled.img`
  position: relative;
  top: 2em;
  left: 20%;
  z-index: 2;
  height: 80%;
`
const FlexLeft = styled(Flex)`
  width: 40%;
`

const Landing = () => {
    const { title } = useSiteMetaData()

    return (
        <Flex rowReverse noWrap style={{width: '100%'}}>
            <FlexRight>                
                <Illustration src={illustrationOne} />
                <Grey />
            </FlexRight>
            <FlexLeft column justifyCenter alignCenter>
                <div style={{width: '60%', marginLeft: '2em'}}>
                    <p className='lml'>{title}</p>
                    <h1>{tenants.h1}</h1>
                </div>
            </FlexLeft>
        </Flex>
    )

}

export default Landing