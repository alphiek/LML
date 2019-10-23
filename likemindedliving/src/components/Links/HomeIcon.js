import React from "react"
import { Link } from "gatsby"
import Flex from "../Containers/Flex"
import Icons from "../Icons/Icons"

const HomeIcon = () => {
  return (
    <Flex alignCenter>
      <Link
        style={{ display: "flex", paddingBottom: "0.5rem" }}
        to="/"
        aria-label={`Link to home page`}
      >
        <Icons name="logo" />
      </Link>
      <p className="name">Like-Minded Living</p>
    </Flex>
  )
}

export default HomeIcon
