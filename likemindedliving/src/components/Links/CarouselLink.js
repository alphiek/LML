import React from "react"
import styled from "styled-components"

const LinkStyle = styled.a`
  color: ${props => props.color};
`

export const CarouselLink = ({ link }) => {
  return (
    <LinkStyle
      color={link.color}
      bgColor={link.bgColor}
      href={link.url}
      aria-label={`Link to ${link.name}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      {link.name}
    </LinkStyle>
  )
}
