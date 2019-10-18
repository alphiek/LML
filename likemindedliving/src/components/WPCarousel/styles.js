import styled from 'styled-components'

export const CardImageWrapper = styled.div`
   height: 100px;
   width: 100%;
   overflow: hidden;
   background: #4B4A68;
   border-radius: 16px 16px 0 0;
`

export const Image = styled.img`
   width: 100%;
   opacity: 0.8;
`

export const CardTextContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding: 1rem;
   width: 100%;
`

export const CardLink = styled.a`
  font-size: 0.75rem;
  text-transform: uppercase;
  opacity: 0.6;
  font-weight: 700;
  @media (max-width: 1180px) {
    text-align: left;
  }
`

export const CardBody = styled.p`
   width: 100%;
   flex: 1 0 auto;
   font-size: 0.8rem;
   line-height: 145%;
   font-family: Montserrat, Arial, Helvetica, sans-serif;
   text-align: left;
   letter-spacing: 0.2px;
`