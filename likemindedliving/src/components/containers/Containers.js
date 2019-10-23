import styled from "styled-components"
import { colors } from "../../global/colors"
import Flex from "./Flex"

//Sections

export const HeadlineSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 350px;
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
  margin-bottom: 0;
  position: relative;
`

export const IdealChoiceSection = styled(MainSectionContainer)`
  flex-direction: column;
  @media (max-width: 1180px) {
    padding: 80px 0 0;
  }
`

export const FullSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`

// Section Wrappers

export const TextCenter = styled(Flex)`
  width: 50%;
  @media (max-width: 1460px) {
    width: 60%;
  }
  @media (max-width: 1180px) {
    width: 65%;
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    width: 78%;
  }
  @media (max-width: 480px) {
    width: 75%;
  }
`

export const SectionWrapper = styled(Flex)`
  width: 950px;
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

export const HeadingContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 1100px;
  padding: 80px 0 100px;
  background-color: ${colors.lightPeach};
`

export const TestimonialContainer = styled(Flex)`
  width: 950px;
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

export const CarouselHeadingWrapper = styled(HeadingWrapper)`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`

// Wrappers

export const SignUpFormWrapper = styled.div`
  width: ${props => props.width || "70%"};
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
