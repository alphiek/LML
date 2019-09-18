import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'

const PaginationWrapper = styled(Flex)`
   height: 2em;  
   position: relative;
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

