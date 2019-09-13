import styled from 'styled-components'

export const ImageWrapper = styled.img`
   position: absolute;
   width: 16em;
   max-width: 200%;
   z-index: 10;
   @media (max-width: 768px) {
     width: 45vw;
   }
   @media (max-width: 480px) {
     width: 65vw;
   }
`