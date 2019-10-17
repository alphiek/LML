import styled from 'styled-components'

export const Bubble = styled.span`
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: #FFF;
  z-index: -1;
  transform: translateY(100%);
  transform-origin: bottom;
  border-radius: 50%;
  left: calc((var(--n) - 1) * 25%);
  transition: 0.8s;
  transition-timing-function: ease-out;
  transition-delay: calc((var(--n) - 1) * 0.1s);
  &:nth-child(2) {
    --n: 1;
  }
  &:nth-child(3) {
    --n: 2;
  }
  &:nth-child(4) {
    --n: 3;
  }
  &:nth-child(5) {
    --n: 4;
  }
`

export const ButtonWrapper = styled.div`
  cursor: pointer;
  background: ${props => props.bgColor};
  color: ${props => props.color};
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: px;
  border-radius: 4px;
  padding: 1.5rem;
  text-align: center;
  width: 100%;
  line-height: 130%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.8s;
  :hover {
    color: ${props => props.bgColor};
    text-align: left;
    padding-left: 0;
    ${Bubble}{
      transform: translateY(0) scale(2);
    }    
  }
  @media (max-width: 1180px) {
    padding: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
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
  @media (max-width: 1180px) {
    margin-right: 0;
    text-align: center;
    margin-bottom: 1em;
  }
`


export const LinkStyle = styled.a`
  color: ${props => props.color};
`



