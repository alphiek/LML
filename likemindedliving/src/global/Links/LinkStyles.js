import styled from 'styled-components'

export const Bubble = styled.span`
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: #000;
  transform: translateY(100%);
  transform-origin: bottom;
  border-radius: 50%;
  left: calc((var(--n) - 1) * 25%);
  transition: 0.8s;
  transition-timing-function: ease-out;
  transition-delay: calc((var(--n) - 1) * 0.1s);
  &:nth-child(1) {
    --n: 1;
  }
  &:nth-child(2) {
    --n: 2;
  }
  &:nth-child(3) {
    --n: 3;
  }
  &:nth-child(4) {
    --n: 4;
  }
`

export const ButtonWrapper = styled.button`
  cursor: pointer;
  background: ${props => props.bgColor};
  color: ${props => props.color};
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 4px;
  padding: 1rem;
  text-align: center;
  width: 100%;
  line-height: 130%;
  border: 2px solid ${props => props.bgColor};
  position: relative;
  overflow: visable;
  z-index: 1;
  transition: 0.8s;
  ${Bubble}:hover & {
    transform: translateY(0) scale(2);
  }
  :hover {
    color: ${props => props.bgColor};
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



