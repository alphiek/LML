import styled from 'styled-components'

export const CardImageWrapper = styled.div`
   height: 150px;
   width: 100%;
   overflow: hidden;
   background: #4B4A68;
   border-radius: 8px 8px 0 0;
   border: 10px solid white;
`

export const Image = styled.img`
   width: 100%;
   opacity: 0.8;
`

export const CardTextContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 0.3rem 1rem 1rem 1rem;
   width: 100%;
   height: 220px;
   text-align: left;
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
   font-size: 0.8rem;
   line-height: 145%;
   font-family: Montserrat, Arial, Helvetica, sans-serif;
   text-align: left;
   letter-spacing: 0.2px;
   text-transform: uppercase;
   margin-bottom: 0.3rem;
`

export const CardPrice = styled(CardBody)`
   text-transform: lowercase;
   color: #4B4A68;
   font-weight: 900;
`

export const HR = styled.hr`
   margin: 0.3rem 0;
   width: 100%;
   opacity: 0.2;
`

export const Description = styled.p`
   font-size: 0.85rem;
   text-align: left;
`