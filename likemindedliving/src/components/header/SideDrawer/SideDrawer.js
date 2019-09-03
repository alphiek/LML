import React from 'react'
import LinkList from '../../../global/Links/LinkList'
import { Spring, animated as a } from 'react-spring/renderprops'
import styled from 'styled-components'
import { colors } from '../../../global/colors'

const SideDrawerContainer = styled(a.nav)`
  height: 100%;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  background: ${colors.mint};
  top: 0;
  right: 0;
  width: 70%;
  max-width: 400px;
  display: block;
  padding: 0;
  z-index: 200;
  @media(min-width: 1023px) {
     display: none;
  }
`

const SideDrawerListWrapper = styled.ul`
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  text-align: left;
  margin: 2em 1em;
  @media (max-width: 768px) {
      margin: 0 1em;
      justify-content: center;
  }
  @media (max-width: 480px) {
    margin: 3em 1em;
    justify-content: flex-start;
  }
`

const sideDrawer = ({ show, items }) => {
    console.log(show)

    let data = items.map(e =>
        <LinkList key={e.name} link={e} />
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