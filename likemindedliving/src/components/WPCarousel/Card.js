import React from 'react'
import { Body } from '../text/Text'
import { ShortDivider } from '../Dividers/Dividers'
import { colors } from '../../global/colors'
import styled from 'styled-components'

const CardContainer = styled.div`
   border-radius: 0.5em;
   overflow: hidden;
   width: 100%;
   height: 100%;
`
const CardImageWrapper = styled.div`
   height: 4em;
   background: grey;
`

const CardTextContainer = styled.div`
   padding: 0.75em 0 1em 0.5em;
`

const Card = ({ data }) => {
    let copy = data[1]

    return (
        <CardContainer>
            <CardImageWrapper>{copy.img}</CardImageWrapper>
            <CardTextContainer>
                <h3>{copy.name}</h3>
                <ShortDivider color={colors.mint} width='2em' />
                {
                    copy.place && <Body>{copy.place}</Body>
                }
                {
                    copy.price && <Body>{copy.price}</Body>
                }
                {
                    copy.blurb && <Body>{copy.blurb.substring(0, 90)}</Body>
                }
                <a href='https://www.rkkcreative.xyz'
                    target='_blank' rel='noopener noreferrer'>{copy.link}</a>
            </CardTextContainer>
        </CardContainer>
    )
}

export default Card