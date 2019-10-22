import React from "react"
import { useToggle } from "../../../hooks/useToggle"
import Modal from "./Modal"
import ModalToggle from "./ModalToggle"

const ModalControl = () => {
  const { isShowing, toggle } = useToggle()

  return (
    <>
      <ModalToggle click={toggle} />
      {isShowing && <Modal click={toggle} />}
    </>
  )
}

export default ModalControl
