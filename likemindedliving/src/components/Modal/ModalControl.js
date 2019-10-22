import React from "react"
import PropTypes from "prop-types"
import { useToggle } from "../../hooks/useToggle"
import { FadeIn } from "../animations/FadeIn"
import { SignUpFormWrapper } from "../containers/Containers"
import Modal from "./Modal"
import ModalOpen from "./ModalOpen"

const ModalControl = ({ link, width }) => {
  const { isShowing, toggle } = useToggle()
  return (
    <>
      <FadeIn>
        <SignUpFormWrapper width={width}>
          <ModalOpen click={toggle} link={link} />
        </SignUpFormWrapper>
      </FadeIn>
      {isShowing && <Modal url={link.url} title={link.name} click={toggle} />}
    </>
  )
}

export default ModalControl

ModalControl.propTypes = {
  link: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    bgColorHover: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    colorHover: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  width: PropTypes.string,
}
