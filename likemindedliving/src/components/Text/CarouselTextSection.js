import React from "react"
import styled from "styled-components"
import { H2, Body } from "./Text"
import { CarouselHeadingWrapper } from "../Containers/Containers"
import { FadeIn } from "../Animations/FadeIn"


const LinkStyle = styled.a`
  color: ${props => props.color};
  @media(max-width: 1180px) {
    margin: 30px 0 10px;
  }
  @media(max-width: 680px) {
    margin: 30px 0 20px;
  }
`
export const CarouselTextSection = ({ h2, p2, color, link, children }) => {
  return (
    <FadeIn delay={150}>
      <CarouselHeadingWrapper>
        <div>
          <H2 color={color}>{h2}</H2>
          {children}
          {p2 && <Body color={color}>{p2}</Body>}
        </div>
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
      </CarouselHeadingWrapper>
    </FadeIn>
  )
}
