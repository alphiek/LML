import React from "react"
import NavLinks from "../Links/NavLinks"

const GetLinks = ({ items }) => {
  const url = typeof window !== "undefined" && window.location.href
  let data

  if (typeof url !== "undefined") {
    data = items.filter(item => item.url !== url)
  } else {
    data = items
  }

  let links = data.map((item, index) => <NavLinks key={index} link={item} />)

  return <>{links}</>
}

export default GetLinks
