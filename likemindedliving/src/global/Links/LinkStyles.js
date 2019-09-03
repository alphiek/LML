import styled from 'styled-components'
import { Bounce } from '../../components/animations/keyframes'
import { Link } from 'gatsby'

export const NavLinkStyle = styled.li`
  position: relative;
  :hover {
    animation: ${Bounce} 0.2s ease-out 2;
  }
  @media (max-width: 480px) {
    text-align: right;
  }
`

export const GatsbyLink = styled(Link)`
  postion: relative;
  :hover {
    animation: ${Bounce} 0.2s ease-out 2;
  }
`
export const HoverWrapper = styled.div`
  position: relative;
  @media (max-width: 1023px){
    padding: 0.5em 0;
    }
  @media(max-width: 480px) {
    padding: 0.75em 0;
  }
`

export const LinkStyle = styled.a`
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  width: auto;
  padding: 1.5em;
  border-radius: 0.35em;
`


export const PatternWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  position: absolute;
  overflow: visible;
  padding-bottom: 0.5em;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: 0.4s;
  z-index: -1;

  ${HoverWrapper}:hover & {
      opacity: 1;
  }
`

export const Pattern = styled.svg`
  fill: #f9f5f5;
  width: 2em;
  height: 2em;
`