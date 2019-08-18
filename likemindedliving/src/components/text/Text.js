import React from 'react'

export const H2 = ({ children, color }) => {
    return (
      <h2 style={{ color: `${color}`}}>{children}</h2>
    )
  }

  export const Body = ({ children, color }) => (
    <p style={{ color: `${color}`}}>{children}</p>
  )