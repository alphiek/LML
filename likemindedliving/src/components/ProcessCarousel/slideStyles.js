import styled from 'styled-components'
import Flex from '../containers/Flex'
import { Bounce } from '../animations/keyframes'

export const NumberCell = styled(Flex)`
padding: 1em;
font-size: 0.5em;
grid-area: number;
@media (max-width: 1024px) {
  justify-content: flex-start;
}
`
export const Number = styled.p`
 font-size: 4em;
 font-weight: 700;
 animation: ${Bounce} 0.5s ease-out 3;
` 

