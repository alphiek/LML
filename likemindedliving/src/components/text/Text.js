import React from 'react'
import styled from 'styled-components'
import { FadeIn } from '../animations/FadeIn'

const FactP = styled.p`
  margin-top: 1em;
  font-weight: 600;
  font-size: 0.5em;
  width: 65%;
  line-height: 130%;
  letter-spacing: 0.05px;
  @media (max-width: 1024px) {
    font-size: 0.58em;
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 0.62em;
    line-height: 150%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`
export const H2 = ({ children, color }) => {
  return (
    <FadeIn>
      <h2 style={{ color: `${color}` }}>{children}</h2>
    </FadeIn>
  )
}

export const H3 = ({ children, color }) => {
  return (
    <FadeIn>
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


