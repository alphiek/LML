import React from 'react'
import styled from 'styled-components'

export const Bubble = styled.span`
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: ${props => props.bgColorHover};
  z-index: -1;
  transform: translateY(100%);
  transform-origin: bottom;
  border-radius: 50%;
  left: calc((var(--n) - 1) * 25%);
  transition: 0.8s;
  transition-timing-function: ease-out;
  transition-delay: calc((var(--n) - 1) * 0.1s);
  &:nth-child(2) {
    --n: 1;
  }
  &:nth-child(3) {
    --n: 2;
  }
  &:nth-child(4) {
    --n: 3;
  }
  &:nth-child(5) {
    --n: 4;
  }
`

export const ButtonWrapper = styled.div`
  cursor: pointer;
  background: ${props => props.bgColor};
  color: ${props => props.color};
  box-shadow: -5px -3px 108px -26px rgba(11,59,61,0.2);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: px;
  border-radius: 4px;
  padding: 1.5rem;
  text-align: center;
  width: 100%;
  line-height: 130%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.8s;
  :hover {
    color: ${props => props.colorHover};
    ${Bubble}{
      transform: translateY(0) scale(2);
    }    
  }
  @media (max-width: 1180px) {
    padding: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const PageLink = ({ link }) => {
    return (
        <ButtonWrapper
            bgColor={link.bgColor}
            color={link.color}
            colorHover={link.colorHover}>
            <a
                href={link.url}
                aria-label={`Link to ${link.name}`}
                rel='noopener noreferrer'
                target='_blank'
            >
                {link.name}
            </a>
            <Bubble bgColorHover={link.bgColorHover}/>
            <Bubble bgColorHover={link.bgColorHover}/>
            <Bubble bgColorHover={link.bgColorHover}/>
            <Bubble bgColorHover={link.bgColorHover}/>
        </ButtonWrapper>
    )
}

export default PageLink