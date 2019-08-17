import React from 'react'

import { Section,TextBlockCenter } from '../containers/Containers'
import Squiggle from './Squiggle';


const Landing = ({ copy }) => (
    <Section>
        <TextBlockCenter justifyCenter alignCenter>
          <h1 style={{marginBottom: '0.4em'}}>{copy.h1}</h1>
          <Squiggle width={'100%'}/>
          <p style={{marginTop: '0.8em'}} className='title-sub-text'>{copy.p1}</p>
        </TextBlockCenter>
    </Section>
)

export default Landing