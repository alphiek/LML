import React from 'react'
import { LandingCenter } from '../containers/Containers'
import { Squiggle } from '../shapes/Squiggle';
import { H1 } from '../text/Text'
import { colors } from '../../global/colors'
import SplitText from 'react-pose-text'

const Landing = ({ copy }) => {
  let txt = copy[1]

  const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 30
    }
  };

  return (
    <LandingCenter justifyCenter alignCenter>
      <h1 margin='0.4em' color={txt.color}>
       <SplitText initialPose="exit" pose="enter">{txt.h1.firstLine}</SplitText>
       <br/>
       {
         txt.h1.secondLine !== null ? <SplitText initialPose="exit" pose="enter">{txt.h1.secondLine}</SplitText> : null
       }
      </h1>
    <Squiggle width={'100%'} color={colors.lilac}/>
    {
      txt.landlord && <p className='title-sub-text landlord'>{txt.p1}</p>
    }
    {
      txt.tenants && <p className='title-sub-text'>{txt.p1}</p>
    }
    </LandingCenter>
  )
}
        


export default Landing