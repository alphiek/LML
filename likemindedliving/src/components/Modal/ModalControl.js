import React from "react"
import PropTypes from "prop-types"
import { Transition } from "react-spring/renderprops"

import { useToggle } from "../../hooks/useToggle"
import { FadeIn } from "../Animations/FadeIn"
import { SignUpFormWrapper } from "../Containers/Containers"
import Portal from "../Containers/Portal"
import Modal from "./Modal"
import ModalOpen from "./ModalOpen"

const ModalControl = ({ link, width }) => {
  const { isShowing, toggle } = useToggle(false)
  return (
    <>
      <FadeIn>
        <SignUpFormWrapper width={width}>
          <ModalOpen click={toggle} link={link} />
        </SignUpFormWrapper>
      </FadeIn>
      <Portal>
        <Transition
          items={isShowing}
          unique={true}
          from={{ opacity: 0, backdrop: 0 }}
          enter={{ opacity: 1, backdrop: 0.3 }}
          leave={{ opacity: 0, backdrop: 0}}
        >
          {isShowing =>
            isShowing &&
            (styles => (
              <Modal
                styles={{ ...styles }}
                url={link.url}
                title={link.name}
                click={toggle}
              />
            ))
          }
        </Transition>
      </Portal>
    </>
  )
}

export default ModalControl

ModalControl.propTypes = {
  link: PropTypes.shape({
    bgColor: PropTypes.string,
    bgColorHover: PropTypes.string,
    color: PropTypes.string,
    colorHover: PropTypes.string,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  width: PropTypes.string,
}
