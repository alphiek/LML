import React from 'react'
import { Body } from '../text/Text'
import { ShortSquiggle } from '../shapes/Squiggle'
import { colors } from '../../global/colors'


const Card = ({ data }) => {
    return (
        <div>
            <div>{data.img}</div>
            <div>
                <h3>{data.name}</h3>
                <ShortSquiggle color={colors.mint} width='2em' />
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
            </div>
        </div>
    )
}

export default Card