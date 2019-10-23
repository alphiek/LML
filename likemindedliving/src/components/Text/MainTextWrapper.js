import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ModalControl from "../Modal/ModalControl"
import { H2, H3, Body, FactBody } from "../Text/Text"
import Icons from "../Icons/Icons"
import { Wrapper } from "../Containers/Containers"
import Flex from "../Containers/Flex"

const TextContainer = styled(Flex)`
  height: 100%;
  @media (max-width: 1180px) {
    width: 100%;
    align-items: center;
    margin: 1rem 0;
    padding: 0;
  }
`

export const MainTextWrapper = ({ copy }) => {

  let h2
  let h3

  if (copy.h2) {
    h2 = <H2 color={copy.color}>{copy.h2}</H2>
  } else if (copy.h3) {
    h3 = <H3>{copy.h3}</H3>
  } 


  return (
    <Wrapper>
      <TextContainer column justifyCenter contentCenter>
        {h2}
        {h3}
        {copy.divider && <Icons name="dividerShort" fill={copy.divider} />}
        <Body color={copy.color}>{copy.p1}</Body>
        {copy.p2 && <Body color={copy.color}>{copy.p2}</Body>}
        {copy.fact && <FactBody color={copy.factColor}>{copy.fact}</FactBody>}
        {copy.fact1 && <FactBody color={copy.factColor}>{copy.fact1}</FactBody>}
        {copy.link && <ModalControl link={copy.link} />}
      </TextContainer>
    </Wrapper>
  )
}

MainTextWrapper.propTypes = {
  copy: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    blob: PropTypes.string,
    color: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    h2: PropTypes.string.isRequired,
    link: PropTypes.objectOf(PropTypes.string),
    p1: PropTypes.string.isRequired,
  }).isRequired,
}

export default MainTextWrapper
