import React, { useState, useEffect } from "react"
import Spinner from "react-spinkit"
import { Loader } from "../Containers/Containers"
import { LazyLoadComponent } from "react-lazy-load-image-component"

import BlogContent from "./Blogs/BlogContent"
import PropertyContent from "./Property/PropertyContent"

const DisplayContent = ({ page }) => {
  const [loading, isLoaded] = useState(true)
  let content

  useEffect(() => {
    isLoaded(false)
  }, [])

  if (loading) {
    content = (
      <Loader justifyCenter alignCenter>
        <Spinner name="ball-clip-rotate-multiple" color='#4B4A68' fadeIn="none" />
      </Loader>
    )
  } else {
    if (page.properties) {
      content = (
        <LazyLoadComponent>
          <PropertyContent />
        </LazyLoadComponent>
      )
    } else if (page.blogs) {
      content = (
        <LazyLoadComponent>
          <BlogContent page={page.page} />
        </LazyLoadComponent>
      )
    }
  }

  return <>{content}</>
}

export default DisplayContent
