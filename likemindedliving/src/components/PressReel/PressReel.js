import React from "react"
import styled from "styled-components"
import Icons from "../Icons/Icons"
import { H2, Body } from "../Text/Text"
import { HeadingWrapper } from "../Containers/Containers"
import { pressReelCopy } from './pressReelCopy'


const PressReel = () => {
  const copy = pressReelCopy
  const articles = copy.articles.map((article, index) => {
    return (
      <div key={index}>
        <Icons name="article" />
        <ArticleWrapper>
          <ArticleLink style={{ color: "#fff" }} href={article.url}>
            {article.name}
          </ArticleLink>
        </ArticleWrapper>
      </div>
    )
  })

  return (
    <PressSection bgColor={copy.bgColor}>
      <HeadingWrapper>
        <H2 color={copy.color}>{copy.h2}</H2>
        <Icons name="dividerShort" fill={copy.divider} />
        <Body color={copy.color}>{copy.p1}</Body>
        <ScrollContainer>{articles}</ScrollContainer>
      </HeadingWrapper>
    </PressSection>
  )
}

export default PressReel


const PressSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 60px 0;
  margin: 60px 0;
`

const ScrollContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0 0 0;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    -webkit-appearance: none;
  }
  scrollbar-width: none;
`
const ArticleWrapper = styled.div`
  text-align: center;
  margin: 0px 40px 0 0;
  color: white;
  width: 80px;
  height: 60px;
  flex: 0 0 auto;
  display: flex;
`

const ArticleLink = styled.a`
  text-align: left;
  line-height: 135%;
`