import React from 'react'
import styled from 'styled-components'
import { FadeIn } from '../animations/FadeIn'

const FactP = styled.p`
  margin-top: 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  width: 65%;
  line-height: 130%;
  letter-spacing: 0.05px;
  @media (max-width: 1180px) {
    margin: 1em auto 0;
  }
  @media (max-width: 768px) {
    line-height: 150%;
  }
`


export const H2 = ({ children, color }) => {
  return (
    <FadeIn delay={0}>
      <h2 style={{ color: `${color}` }}>{children}</h2>
    </FadeIn>
  )
}

export const H3 = ({ children, color }) => {
  return (
    <FadeIn delay={0}>
      <h3 style={{ color: `${color}` }}>{children}</h3>
    </FadeIn>
  )
}


export const Body = ({ children, color }) => (
  <FadeIn>
    <p style={{ color: `${color}`}}>{children}</p>
  </FadeIn>
)

export const FactBody = ({ children, color }) => (
    <FactP style={{ color: `${color}`}}>{children}</FactP>
)


