import styled from 'styled-components'
import Flex from './Flex'

export const FullWidthContainer = styled(Flex)`
  position: relative;
  padding-top: 4em;
  padding-bottom: 4em;
  width: 60%;
  @media (max-width: 991px) {
    width: 65%;
  }
  @media (max-width: 767px) {
    width: 70%;
  }
  @media (max-width: 479px) {
    width: 80%;
  }
`

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
`

export const IdealChoiceSection = styled(MainSectionContainer)`
  flex-direction: column;
  margin-bottom: 0;
  @media (max-width: 1180px) {
    padding: 80px 0 0;
  }
`

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
  `


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