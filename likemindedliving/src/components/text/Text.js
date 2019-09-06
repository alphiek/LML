import React from 'react'
import { FadeIn } from '../animations/FadeIn'


export const H2 = ({ children, color }) => {
  return (
    <h2 style={{ color: `${color}` }}>{children}</h2>
  )
}

export const Body = ({ children, color, weight }) => (
  <FadeIn>
    <p style={{ marginBottom: '1em', color: `${color}`, fontWeight: `${weight}`}}>{children}</p>
  </FadeIn>
)

