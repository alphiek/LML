import styled from "styled-components"
import { colors } from "../Utilities/colors"
import { fullabs } from '../Utilities/position'
import Flex from "./Flex"

//Sections

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 30px 0 0;
  background-color: ${props => props.bgColor};
`

export const MainSectionContainer = styled(SectionContainer)`
  padding: 80px 0;
  margin-bottom: 0;
  position: relative;
`

export const FullSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`

// Section Wrappers

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

export const Wrapper = styled(Flex)`
  align-items: center;
  justify-content: ${props => props.justify};
  width: 50%;
  @media (max-width: 1180px) {
    justify-content: center;
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`

export const CenterWrapperProcess = styled(Wrapper)`
  display: flex;
  position: relative;
  right: -100px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0;
  @media (max-width: 1180px) {
    right: 0;
    width: 480px;
    margin: 0;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`

export const HeadingContainer = styled(Flex)`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 1100px;
  padding: 80px 0 100px;
  border-radius: 8px;
  background-color: ${colors.lightPeach};
  @media (max-width: 1180px) {
    width: 85vw;
    padding: 80px 30px 100px 30px;
  }
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
  z-index: 2;
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
  @media (max-width: 680px) {
    margin-top: 0px;
  }
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
  width: 70%;
  margin-top: -60px;
  @media (max-width: 1180px) {
    margin-top: 20px;
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`

export const ProcessPaginationContainer = styled.div`
  width: 65%;
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const Spacer = styled.div`
  @media (max-width: 1180px) {
    height: 16px;
  }
`


export const Loader = styled(Flex)`
  ${fullabs({})};
`
