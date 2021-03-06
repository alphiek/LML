import styled from "styled-components"

const Flex = styled.div`
  display: flex;
  flex-wrap: ${props => {
    if (props.wrapReverse) return "wrap-reverse"
    else if (props.noWrap) return "nowrap"
    return "wrap"
  }};
  justify-content: ${props => {
    if (props.justifyContent) return props.justifyContent
    if (props.justifyCenter) return "center"
    else if (props.justifyAround) return "space-around"
    else if (props.justifyBetween) return "space-between"
    else if (props.justifyEnd) return "flex-end"
    return "flex-start"
  }};
  align-items: ${props => {
    if (props.alignItems) return props.alignItems
    else if (props.flexStart) return "flex-start"
    else if (props.alignEnd) return "flex-end"
    if (props.alignCenter) return "center"
    else if (props.alignBaseline) return "baseline"
    return "stretch"
  }};
  align-content: ${props => {
    if (props.alignContent) return props.content
    else if (props.contentStart) return "flex-start"
    else if (props.contentEnd) return "flex-end"
    else if (props.contentCenter) return "center"
    else if (props.contentBetween) return "space-between"
    else if (props.contentAround) return "contentAround"
    return "stretch"
  }};
  flex-direction: ${props => {
    if (props.rowReverse) return "row-reverse"
    if (props.columnReverse) return "column-reverse"
    else if (props.column) return "column"
    return "row"
  }};
`

export default Flex
