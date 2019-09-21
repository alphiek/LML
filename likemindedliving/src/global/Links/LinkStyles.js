import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  text-align: center;
  background: ${props => props.bgColor};
  width: 100%;
  line-height: 130%;
  padding: 0.5em 0.5em 0.8em;
  font-size: 0.9em;
  font-weight: 700;
  border-radius: 0.35em;
  transition: all .3s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(75, 74, 104, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  :hover {
    box-shadow: 0 25px 25px -15px rgba(75, 74, 104, 0.2);
    transform: scale(1.02);
    transform: translate(0, -0.1em);
  }
  @media (max-width: 1024px) {
    padding: 0.75em;
  }
  @media (max-width: 768px) {
    padding: 1em;
    font-size: 1em;
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
  @media (max-width: 1024px) {
    margin-right: 0;
    text-align: center;
    margin-bottom: 1em;
  }
`


export const LinkStyle = styled.a`
  color: ${props => props.color};
`


