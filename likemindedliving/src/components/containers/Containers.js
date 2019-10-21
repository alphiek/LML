import styled from 'styled-components'
import { colors } from '../../global/colors'

//Sections 

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0 3rem 0;
  margin-bottom: 2rem;
  background-color: ${props => props.bgColor};
`

export const MainSectionContainer = styled(SectionContainer)`
   padding: 80px 0;
   margin-bottom: 0;
`

export const IdealChoiceSection = styled(MainSectionContainer)`
  flex-direction: column;
  margin-bottom: 0;
  @media (max-width: 1180px) {
    padding: 80px 0 0;
  }
`

export const TestimonialSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// Section Wrappers 

export const SectionWrapper = styled.div`
  width: 950px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  @media (max-width: 1180px) {
      flex-direction: column;
      width: 100%;
      justify-content: center;
  }
`
export const ReverseSectionWrapper = styled(SectionWrapper)`
  flex-direction: row;
  z-index: 2;
  `

// Main Content Wrappers 

export const Wrapper = styled.div`
  width: 85%;
  padding-right: 1rem;
  @media (max-width: 1180px) {
    width: 60%;
    padding-right: 0rem;
  }
  @media (max-width: 768px) {
  width: 80%;
  }
`

export const CenterWrapperProcess = styled(Wrapper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 0 0;
  @media (max-width: 1180px) {
    width: 480px;
    margin: 0;
  }
  @media (max-width: 480px) {
    width: 300px;
    }
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px 0 100px;
  background-color: ${colors.lightPeach};
`

export const TestimonialContainer = styled.div`
   width: 950px;
   display: flex;
   position: relative;
   justify-content: space-between;
   @media (max-width: 1180px) {
     width: 100%;
     justify-content: center;
     align-items: center;
   }
`


export const HeadingWrapper = styled.div`
  width: 950px;
  @media (max-width: 1180px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 80vw;
      justify-content: center;
  }
`

// Wrappers 

export const SignUpFormWrapper = styled.div`
  width: 70%;
  padding-top: 1rem;
  @media (max-width: 1180px) {
     width: auto;
  }
  @media (max-width: 480px) {
      width: auto;
  }
`
export const SubTextWrapper = styled.div`
   width: 45%;
   @media (max-width: 1180px) {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 100%;
   }
`

export const ProcessSubTextWrapper = styled(SubTextWrapper)`
   width: 60%;
`


export const ProcessPaginationContainer = styled.div`
  width: 65%;
  @media (max-width: 480px) {
      width: 100%;
  }
  `