import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PressSection = styled.section`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 1.5rem 0;
 background-color: ${props => props.bgColor};
`

const ScrollContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 950px;
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
  margin: 1rem 1.5rem;
  color: white;
  width: auto;
  height: 100px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PressReel = ({ copy }) => {
  const articles = copy.articles.map((article, index) => <ArticleWrapper key={index}><a style={{ color: '#fff' }} href={article.url}>{article.name}</a></ArticleWrapper>)

  return (
    <PressSection bgColor={copy.bgColor}>
      <ScrollContainer>{articles}</ScrollContainer>
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
