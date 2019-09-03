import React from 'react'
import { Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'
import { colors } from '../../global/colors'
import styled from 'styled-components'

const CardContainer = styled.div`
   border-radius: 0.5em;
   overflow: hidden;
`
const CardImageWrapper = styled.div`
   height: 4em;
   background: grey;
`

const CardTextContainer = styled.div`
   padding: 0.75em 0 1em 0.5em;
`

const Card = ({ data }) => {
    return (
        <CardContainer>
            <CardImageWrapper>{data.img}</CardImageWrapper>
            <CardTextContainer>
                <h3>{data.name}</h3>
                <ShortDivider color={colors.mint} width='2em' />
                {
                    data.place && <Body>{data.place}</Body>
                }
                {
                    data.price && <Body>{data.price}</Body>
                }
                {
                    data.blurb && <Body>{data.blurb.substring(0, 90)}</Body>
                }
                <a href='https://www.rkkcreative.xyz'
                    target='_blank' rel='noopener noreferrer'>{data.link}</a>
            </CardTextContainer>
        </CardContainer>
    )
}

export default Card