import React from 'react'
import PropTypes from 'prop-types'
import { FadeIn } from '../animations/FadeIn'
import { ButtonWrapper, Bubble } from '../../global/Links/LinkStyles'


const Link = ({ link }) => {
    return (
        <FadeIn>
                <ButtonWrapper
                  bgColor={link.bgColor}
                  color={link.color}>
                    <a
                        color={link.color}
                        href={link.url}
                        aria-label={`Link to ${link.name}`}
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        {link.name}
                    </a>
                    <Bubble />
                    <Bubble />
                    <Bubble />
                    <Bubble />
                </ButtonWrapper>
        </FadeIn>
    )
}


export default Link

Link.propTypes = {
  link: PropTypes.objectOf(PropTypes.string).isRequired
}