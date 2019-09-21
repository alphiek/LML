import React from 'react'
import { Spring, animated as a } from 'react-spring/renderprops'
import styled from 'styled-components'

import { colors } from '../../../global/colors'
import NavLinks from '../Links/NavLinks/NavLinks'

const SideDrawerContainer = styled(a.nav)`
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
  @media(min-width: 1025px) {
     display: none;
  }
  @media(max-width: 480px) {
      width: 80%;
  }
`

const SideDrawerListWrapper = styled.ul`
  height: 100vh;
  flex-direction: column;
  align-items: flex-end;
  text-align: left;
  margin: 2rem 1rem;
`

const sideDrawer = ({ show, items }) => {

    let data = items.map(e =>
        <NavLinks key={e.name} link={e} />
    )

    return (
        <Spring
            from={{ right: -1000 }}
            to={{ right: show ? 0 : -1000 }}>
            {props => (
                    <SideDrawerContainer style={props}>
                        <SideDrawerListWrapper>
                            {data}
                        </SideDrawerListWrapper>
                    </SideDrawerContainer>
                )}
        </Spring>
    )
}

export default sideDrawer