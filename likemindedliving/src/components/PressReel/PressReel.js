import React from 'react'
import styled from 'styled-components'
import Flex from '../containers/Flex'

const HorizontalScroll = styled.ul`
  -webkit-overflow-scrolling: touch;
  display: grid;
  grid-gap: 0.2em;
  grid-template-columns: repeat(7, 7em);
  grid-template-rows: minmax(5em, 1fr);
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  padding-bottom: 0.5em;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`


const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  overflow-y: scroll;
  width: 80%;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const GridItem = styled.li`
    scroll-snap-align: center;
    padding: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    font-size: 0.5em;
`



const PressReel = ({ copy }) => {
    let data = copy[1].articles
    let items = Object.entries(data)

    let content = items.map(item => <GridItem><article>{item[1].name}</article></GridItem>)

    return (
        <Flex justifyCenter alignCenter>
            <ContainerGrid>
                <HorizontalScroll>
                    {content}
                </HorizontalScroll>
            </ContainerGrid >
        </Flex >
    )
}



export default PressReel