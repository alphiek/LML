import { animated as a } from 'react-spring/renderprops'
import styled from 'styled-components'
import { colors } from '../../Utilities/colors'

export const SideDrawerContainer = styled(a.nav)`
  height: 100vh;
  max-height: 100vh;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  background: ${colors.mint};
  top: 0;
  right: 0;
  width: 70%;
  max-width: 400px;
  display: block;
  z-index: 200;
  @media (min-width: 1181px) {
    display: none;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`
export const SideDrawerListWrapper = styled.ul`
  height: 100vh;
  flex-direction: column;
  align-items: flex-end;
  text-align: left;
  margin: 2rem 1rem;
  @media (max-height: 460px) and (orientation: landscape) {
    justify-content: space-evenly;
    height: 100%;
    margin: auto 1rem;
  }
`

export const SideDrawerButton = styled.button`
  display: flex;
  @media (min-width: 1181px) {
    display: none;
  }
`
