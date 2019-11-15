import React from 'react'
import { Slide, SlideWrapper } from './slideshowStyles'

export const GetSlides = data => {
  const largeImages = data.filter(e => !e.node.name.includes('Small'))
  const smallImages = data.filter(e => e.node.name.includes('Small'))

  let finalArray = []

  largeImages.forEach(li => {
    smallImages.forEach(si => {
      if (si.node.name.includes(li.node.name)) {
        finalArray.push([li, si])
      }
    })
  })

  let slides = finalArray.map((item, index) => {
    const large = item[0].node.childImageSharp.fluid
    const small = item[1].node.childImageSharp.fluid
    const sources = [
      small,
      {
        ...large,
        media: `(min-width: 660px)`,
      },
    ]
    return (
      <SlideWrapper key={index}>
        <Slide fluid={sources} alt="Images of properties" />
      </SlideWrapper>
    )
  })
  return slides
}
