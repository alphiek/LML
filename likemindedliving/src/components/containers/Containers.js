import styled from 'styled-components'
import Flex from './Flex'
import { colors } from '../../global/colors'

// 1. Nav Containers
// 2. Section Containers


// 1. Nav Containers

export const DesktopMenuContainer = styled.ul`
  display: flex;
  width: 35em;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`

export const TabletMenuContainer = styled(DesktopMenuContainer)`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5em;
    padding-right: 1vw;
    padding-left: 1em;
    position: fixed;
    top: 0;
    z-index: 600;
    `

export const FixedWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  padding: 1em;
  background-color: ${colors.mint};
`

// 2. Section Containers

export const Section = styled.section`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const TextBlockCenter = styled(Flex)`
   width: 50%;
   margin-top: 5em;
   margin-bottom: 5em;
`