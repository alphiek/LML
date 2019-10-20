import React from 'react'
import PropTypes from 'prop-types'
import { ShortDivider } from '../Dividers/Dividers'
import styled from 'styled-components'
import { H2 } from '../text/Text'

const PressSection = styled.section`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: ${props => props.bgColor};
`

const ContentWrapper = styled.div`
  width: 950px;
  display: flex;
  padding: 60px 0;
  flex-direction: column;
  @media (max-width: 1180px) {
    width: 80vw;
    justify-content: center;
    align-items: center;
  }
`

const ScrollContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
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
  margin: 0 40px 0 0;
  color: white;
  width: auto;
  height: 60px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`

const PressReel = ({ copy }) => {
  const articles = copy.articles.map((article, index) => <ArticleWrapper key={index}><a style={{ color: '#fff' }} href={article.url}>{article.name}</a></ArticleWrapper>)

  return (
    <PressSection bgColor={copy.bgColor}>
      <ContentWrapper>
        <H2 color={copy.color}>{copy.h2}</H2>
        <ShortDivider bottom='0.8em' top='0.5em' color={copy.divider} width='3.5em' />
        <ScrollContainer>{articles}</ScrollContainer>
      </ContentWrapper>
    </PressSection>
  )
}

export default PressReel

PressReel.propTypes = {
  copy: PropTypes.shape({
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    bgColor: PropTypes.string.isRequired,
  }).isRequired
}
