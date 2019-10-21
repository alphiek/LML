import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ShortDivider } from '../Dividers/Dividers'
import { H2, Body } from '../text/Text'
import { HeadingWrapper } from '../containers/Containers'
import articleIcon from '../../images/articleIcon.svg'

const PressSection = styled.section`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: ${props => props.bgColor};
 padding: 60px 0;
`

const ScrollContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  width: 80px;
  height: 60px;
  flex: 0 0 auto;
  display: flex;
`

const ArticleIcon = styled.img`
  width: 4rem;
  opacity: 0.9;
  padding: 1rem 0;
`

const ArticleLink = styled.a`
  text-align: left;
  line-height: 135%;
`

const PressReel = ({ copy }) => {
  const articles = copy.articles.map((article, index) => {
    return (
      <div key={index}>
        <ArticleIcon src={articleIcon} />
        <ArticleWrapper>
          <ArticleLink style={{ color: '#fff' }} href={article.url}>{article.name}</ArticleLink>
        </ArticleWrapper>
      </div>
    )
  })

  return (
    <PressSection bgColor={copy.bgColor}>
      <HeadingWrapper>
        <H2 color={copy.color}>{copy.h2}</H2>
        <ShortDivider bottom='0.8em' top='0.5em' color={copy.divider} width='3.5em' />
        <Body color={copy.color}>{copy.p1}</Body>
        <ScrollContainer>{articles}</ScrollContainer>
      </HeadingWrapper>
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
