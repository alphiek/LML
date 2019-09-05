import React from 'react'
import { ShortDivider } from '../Dividers/Dividers'
import { colors } from '../../global/colors'
import styled from 'styled-components'
import { CardContainer } from './WPCarousel'
import Hover from '../../global/Links/Hover'

const CardLink = styled.a`
  padding-top: 3em;
  font-size: 0.45em;
  width: auto;
   
`

const CardBody = styled.p`
   margin-top: 0;
   width: 80%;
   margin-bottom: 0.3em;
   font-size: 0.48em;
   font-family: Montserrat, Arial, Helvetica, sans-serif;
   letter-spacing: 0.2px;
`
const CardImageWrapper = styled.div`
   height: 5em;
   background: grey;
   border-radius: 0.5em 0.5em 0 0;
`

const CardTextContainer = styled.div`
   padding: 0.75em 0 0.5em 0.75em;
   margin-bottom: 3em
   width: 80%;
   word-wrap: break-word;
   white-space: normal;
   & ${CardBody}: last-child {
       margin-bottom: 1em;
   }
`

const Card = ({ data }) => {
    let copy = data[1]

    let content;
    let divider;

    if ( copy.place && copy.price ) {
        content = <><CardBody>{copy.place}</CardBody>
                  <CardBody>{copy.price}</CardBody></>
        divider = <ShortDivider color={colors.mint} width='2em' />
    } else if ( copy.blurb ) {
        content = <CardBody>{copy.blurb.substring(0, 90)}...</CardBody>
        divider = <ShortDivider color={colors.lilac} width='2em' />
    }

    return (
        <CardContainer>
            <CardImageWrapper>{copy.img}</CardImageWrapper>
            <CardTextContainer>
                <h4>{copy.name}</h4>
                {divider}
                {content}
                <Hover color={colors.lightPeach}>
                <CardLink href='https://www.rkkcreative.xyz'
                    target='_blank' rel='noopener noreferrer'>{copy.link}</CardLink>
                </Hover>
                
            </CardTextContainer>
        </CardContainer>
    )
}

export default Card