import React from 'react'
import { animated as a } from 'react-spring'


export const H1 = ({ children, color, margin }) => {
  return (
    <a.h1 style={{ color: `${color}`, marginBottom: `${margin}`}}>{children}</a.h1>
  )
}

export const H2 = ({ children, color }) => {
    return (
      <h2 style={{ color: `${color}`}}>{children}</h2>
    )
  }

  export const Body = ({ children, color }) => (
    <p style={{ marginBottom: '1em', color: `${color}`}}>{children}</p>
  )