import React from 'react'
import { LandingCenter } from '../containers/Containers'
import { Squiggle } from '../shapes/Squiggle';
import { H1 } from '../text/Text'
import { colors } from '../../global/colors'


const Landing = ({ copy }) => {
  const addLineBreaks = string =>
  string.split('\n').map((text, index) => (
    <React.Fragment key={`${text}-${index}`}>
      {text}
      <br />
    </React.Fragment>
  ))

  return (
    <LandingCenter justifyCenter alignCenter>
    <H1 margin='0.4em' color={copy[1].color}>{addLineBreaks(copy[1].h1)}</H1>
    <Squiggle width={'100%'} color={colors.lilac}/>
    {
      copy[1].landlord && <p className='title-sub-text landlord'>{copy[1].p1}</p>
    }
    {
      copy[1].tenants && <p className='title-sub-text'>{copy[1].p1}</p>
    }
    </LandingCenter>
  )
}
        


export default Landing