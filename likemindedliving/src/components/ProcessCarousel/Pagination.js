import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'

const PaginationWrapper = styled(Flex)`
   width: 100%;
   height: 2em;  
   position: relative;
`

const Pagination = ({ pagination, updateSlideHandler, updateStyle, currentSlide }) => {

    let numbers = pagination.map(key => 
        <button style={updateStyle(key, currentSlide)} onClick={() => updateSlideHandler(key)}>
        {key}
        </button>)

    return (
      <PaginationWrapper alignStart justifyAround noWrap>
      {numbers}
      </PaginationWrapper>
    )
}

export default Pagination


