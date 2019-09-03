import React from 'react'
import { LandingCenter } from '../containers/Containers'
import { Squiggle } from '../shapes/Squiggle';
import { H1 } from '../text/Text'
import SplitText from 'react-pose-text'
import { FadeIn } from '../animations/FadeIn'

const Landing = ({ copy }) => {
  let txt = copy[1]

  const charPoses = {
    exit: { opacity: 0, y: -60 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 20
    }
  };

  return (
    <LandingCenter justifyCenter alignCenter>
    {
      txt.landlord && 
      <>
       <H1 margin='0.4em' color={txt.color}>
       <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>{txt.h1.firstLine}</SplitText>
       </H1>
       <Squiggle width={'100%'} color={txt.squiggle}/>
       <FadeIn delay={800} >
         <p className='title-sub-text landlord'>{txt.p1}</p>
       </FadeIn>
       </>
    }
    {
      txt.tenants && 
      <>
       <H1 margin='0.4em' color={txt.color}>
       <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>{txt.h1.firstLine}</SplitText>
       </H1>
       <Squiggle width={'100%'} color={txt.squiggle}/>
       <FadeIn delay={800}>
       <p className='title-sub-text'>{txt.p1}</p>
       </FadeIn >
       </>
       }
    </LandingCenter>
  )
}
        


export default Landing