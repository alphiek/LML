import React from 'react'
import { LandingCenter } from '../containers/Containers'
import { Squiggle } from '../shapes/Squiggle';
import { colors } from '../../global/colors'


const Landing = ({ copy }) => {
  return (
    <LandingCenter justifyCenter alignCenter>
    <h1 style={{marginBottom: '0.4em'}}>{copy[1].h1}</h1>
    <Squiggle width={'100%'} color={colors.lilac}/>
    <p style={{marginTop: '0.8em'}} className='title-sub-text'>{copy[1].p1}</p>
    </LandingCenter>
  )
}
        


export default Landing