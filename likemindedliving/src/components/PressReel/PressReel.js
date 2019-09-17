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
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`


const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: center;
  overflow-y: scroll;
  width: 75%;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`

export const GridItem = styled.li`
    scroll-snap-align: center;
    padding: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.5em;
    will-change: scroll-position;
`



const PressReel = ({ copy }) => {
    let data = copy[1].articles
    let items = Object.entries(data)

    let content = items.map((item, index) => <GridItem key={index}><article>{item[1].name}</article></GridItem>)

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