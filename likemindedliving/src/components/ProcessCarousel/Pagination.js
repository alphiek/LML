import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from '../Containers/Flex'

const PaginationWrapper = styled(Flex)`
   height: auto;  
   margin: 0 0 2rem;
   position: relative;
   @media (max-width: 1180px) {
     margin: 0 0 30px;
   }
`

const Pagination = ({ pagination, updateSlideHandler, updateStyle, currentSlide }) => {

  let numbers = pagination.map((number, index) =>
    <button key={index} style={updateStyle(Number(number), currentSlide)} onClick={() => updateSlideHandler(Number(number))}>
      {number}
    </button>)

  return (
    <PaginationWrapper alignStart justifyAround noWrap>
      {numbers}
    </PaginationWrapper>
  )
}

export default Pagination

Pagination.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  pagination: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateSlideHandler: PropTypes.func.isRequired,
  updateStyle: PropTypes.func.isRequired
}
