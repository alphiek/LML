import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import elevation from '../Utilities/elevation'

const ModalOpen = ({ link, click }) => {
  return (
    <ButtonWrapper
      onClick={e => {
        e.preventDefault()
        click()
      }}
      bgColor={link.bgColor}
      color={link.color}
      colorHover={link.colorHover}
    >
      {link.name}
      <Bubble bgColorHover={link.bgColorHover} />
      <Bubble bgColorHover={link.bgColorHover} />
      <Bubble bgColorHover={link.bgColorHover} />
      <Bubble bgColorHover={link.bgColorHover} />
    </ButtonWrapper>
  )
}

export default ModalOpen

ModalOpen.propTypes = {
  click: PropTypes.func.isRequired,
  link: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    bgColorHover: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    colorHover: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
}

const Bubble = styled.span`
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
  z-index: -1;
  &:nth-child(1) {
    --n: 1;
  }
  &:nth-child(2) {
    --n: 2;
  }
  &:nth-child(3) {
    --n: 3;
  }
  &:nth-child(4) {
    --n: 4;
  }
`

const ButtonWrapper = styled.button`
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  ${elevation[2]};
  border-radius: 4px;
  padding: 1.5rem;
  width: 100%;
  transition: 0.8s;
  :hover {
    color: ${props => props.colorHover};
    background-color: ${props => props.bgColor};
    ${elevation[3]};
    ${Bubble} {
      transform: translateY(0) scale(2);
    }
  }
  @media (max-width: 1180px) {
    padding: 1.5rem;
  }
`
