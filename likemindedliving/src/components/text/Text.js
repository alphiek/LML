import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FadeIn } from '../Animations/FadeIn'

const FactP = styled.p`
  margin-top: 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  width: 65%;
  line-height: 130%;
  letter-spacing: 0.05px;
  @media (max-width: 1180px) {
    margin: 16px auto 25px;
  }
  @media (max-width: 768px) {
    line-height: 150%;
    width: 80%;
  }
`

export const H2 = ({ children, color }) => {
  return (
    <FadeIn delay={0}>
      <h2 style={{ color: `${color}` }}>{children}</h2>
    </FadeIn>
  )
}

H2.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired
}

export const H3 = ({ children, color }) => {
  return (
    <FadeIn delay={0}>
      <h3 style={{ color: `${color}` }}>{children}</h3>
    </FadeIn>
  )
}

H3.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired
}

export const H4 = ({ children, color }) => {
  return (
    <FadeIn delay={0}>
      <h4 style={{ color: `${color}` }}>{children}</h4>
    </FadeIn>
  )
}

H4.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired
}

export const Body = ({ children, color }) => (
  <FadeIn>
    <p style={{ color: `${color}` }}>{children}</p>
  </FadeIn>
)

Body.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
}


export const FactBody = ({ children, color }) => (
  <FactP style={{ color: `${color}` }}>{children}</FactP>
)


FactBody.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired
}


