import React from "react"
import styled from "styled-components"
import hoverPattern from "../../images/hover.png"

export const HoverWrapper = styled.div`
  position: relative;
  width: auto;
  @media (max-width: 1180px) {
    margin: 1.5rem 0;
  }
  @media (max-width: 820px) {
    margin: 4.5vh 0;
  }
`

const PatternWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  position: absolute;
  overflow: visible;
  padding-bottom: 0.5rem;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: 0.4s;
  z-index: -1;
  ${HoverWrapper}:hover & {
    opacity: 1;
  }
`

const Pattern = styled.img`
  width: 3.5rem;
  height: 2rem;
`

export const HoverPattern = () => (
  <PatternWrapper>
    <Pattern src={hoverPattern} alt="Pattern that shows under link on hover" />
  </PatternWrapper>
)
