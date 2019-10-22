import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

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

const ButtonWrapper = styled.button`
  cursor: pointer;
  background: ${props => props.bgColor};
  color: ${props => props.color};
  box-shadow: -5px -3px 108px -26px rgba(11, 59, 61, 0.2);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
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
    ${Bubble} {
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
