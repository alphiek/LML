import React from "react"
import PropTypes from "prop-types"

const Shapes = ({ name, fill }) => {
  switch (name) {
    case "blobTwo":
      return (
        <svg fill={fill} width="100%" viewBox="0 0 484.7 470.6">
          <path
            d="M9.1,226.2C-7.6,168.4-1.4,106.8,28.3,64.7S111.1,0.1,163.5,0s104.3,22.3,160.8,44.1
                c56.6,21.6,117.8,42.6,143.9,81.7c26,39.1,16.9,96.4,2.7,145.8c-14.2,49.5-33.7,91-66.6,128.9c-32.8,37.9-79.1,72-131.2,70
                c-52.2-2.1-110.1-40.4-159-86.4C65.3,337.9,25.8,284,9.1,226.2z"
          />
        </svg>
      )
    case "blobThree":
      return (
        <svg width="100%" viewBox="0 0 657.885 508.213">
          <defs>
            <linearGradient
              id="linear-gradient"
              gradientTransform="rotate(90)"
            >
      <stop offset="0" stopColor="#c9d2f5"/>
      <stop offset="0.502" stopColor="#bee1ec"/>
      <stop offset="1" stopColor="#b4ece4"/>
            </linearGradient>
          </defs>
          <g transform="matrix(0.993, 0.122, -0.122, 0.993, 234.09, 274.843)">
            <path
              fill="url(#linear-gradient)"                            
              transform="translate(0)"
              d="M281.9-203.019c61.558,32.153,105.786,82.73,113.158,134.481S372.948,36.139,326,71.724,214.527,125.552,146.374,147.5C78.221,169.537,6.447,195.277-48.516,183.536-103.348,171.7-141.5,122.482-168.527,75.7c-27.158-46.874-43.194-91.31-44.358-142.068-1.164-50.668,12.8-107.748,61.17-141.526,48.5-33.778,131.263-44.255,212.219-42.72C141.46-248.99,220.347-235.171,281.9-203.019Z"
            />
          </g>
        </svg>
      )
    case "blobFour":
      return (
        <svg width="100%" viewBox="0 0 628 421.6" fill={fill}>
          <path
            d="M505.1,46.9c63.3,29.1,109.2,75.8,117.5,124.3c8.4,48.5-20.8,98.7-68.1,133
	       s-112.7,52.6-181.8,74.4c-69.1,21.9-141.8,47.4-198,37.3c-56.1-10.1-95.8-55.7-124.1-99.2c-28.4-43.6-45.5-85-47.5-132.7
	       c-2-47.6,11.3-101.5,60-134.1C112,17.4,196.2,6.1,278.7,6.1C361.3,6.2,441.9,17.8,505.1,46.9z"
          />
        </svg>
      )
    default:
  }
}

export default Shapes

Shapes.propTypes = {
  fill: PropTypes.string,
  name: PropTypes.string.isRequired,
}
