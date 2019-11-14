import React from 'react'
import NavLinks from '../Links/NavLinks'

const GetLinks = ({ items }) => {
  const url = typeof window !== 'undefined' && window.location.href
  let data

  if (typeof url !== 'undefined') {
    data = items.filter(item => {
      return item.url !== url
    })
  } else {
    data = items
  }

  let links = data.map((item, index) => (
    <li key={index}>
      <NavLinks link={item} />
    </li>
  ))

  return <>{links}</>
}

export default GetLinks
