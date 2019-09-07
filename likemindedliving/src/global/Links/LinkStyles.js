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
export const LinkWrapperRight = styled.div`
  width: auto;
  text-align: right;
  margin-right: 10vw;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`

export const GatsbyLink = styled(Link)`
  postion: relative;
  :hover {
    animation: ${Bounce} 0.2s ease-out 2;
  }
`
export const HoverWrapper = styled.div`
  position: relative;
  width: auto;
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
  transition: all .3s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(75, 74, 104, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  :hover {
    box-shadow: 0 25px 25px -15px rgba(75, 74, 104, 0.2);
    transform: scale(1.02);
    transform: translate(0, -0.1em);
  }
`


export const PatternWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  position: absolute;
  overflow: visible;
  padding-bottom: 0.5em;
  top: 50%;
  left: ${props => props.margin};
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: 0.4s;
  z-index: -1;
  ${HoverWrapper}:hover & {
      opacity: 1;
  }
`

export const Pattern = styled.svg`
  fill: ${props => props.color};
  width: 2em;
  height: 2em;
`