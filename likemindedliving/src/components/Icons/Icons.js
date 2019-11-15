import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import contract1 from '../../images/contract1.svg'
import contract2 from '../../images/contract2.svg'
import contract3 from '../../images/contract3.svg'
import payment1 from '../../images/payment1.svg'
import payment2 from '../../images/payment2.svg'
import payment3 from '../../images/payment3.svg'


const Icons = ({ name, fill }) => {
  switch (name) {
    case "logo":
      return (
        <svg fill={fill} width="3.5rem" viewBox="0 0 400 224">
          <g>
            <path
              d="M399.8,97.2c-0.7,1.5-7.8,16.9-7.8,16.9c-0.4,1.1-1.7,1.7-2.8,1.3h-0.1l-58.9-28.8v98.6c0,0-0.2,10.2,0.8,12.8
                c1.2,3.2,4.2,5.4,7.6,5.5c2.8,0,5.4-1.2,7.2-3.2c1.1,4,0.1,27-21.5,23.4S303,198.6,303,198.6V73.3L204,25L85.7,72.5v6v0.4v106.3
                c0,0-0.2,10.2,0.8,12.8c1.2,3.2,4.2,5.4,7.6,5.5c2.8,0,5.4-1.2,7.2-3.2c1.1,4,0.1,27-21.5,23.4s-21.3-25.1-21.3-25.1V83.3
                l-47.7,19.2c0,0-3.4,2-4.5-1.2L0,83.4c0,0-0.4-1.8,1-2.4L201.2,0.4c1.5-0.6,3.2-0.6,4.8,0c2.4,1,192.9,94.6,192.9,94.6
                S400.5,95.7,399.8,97.2z"
            />
            <path
              d="M283.2,223.3c0,0-1.2-7.6-1.2-9.7v-56.4c0,0,0.5-21.6-15.4-34.6s-52.5-12.1-66.6,2c-9-7-20.1-11-31.5-11.2
                c-18.5,0-30.4,4.5-37.3,10.9c-8.7,8.7-13.6,20.6-13.6,32.9c-0.2,14.9,0,45,0,45s-0.5,14.7,12.4,18.7c12.8,4,15.5,2.4,15.5,2.4
                s-0.9-8.8-0.9-14.5s0.2-47.6,0.2-47.6s-0.3-20.1,11-25.6s20.9,0,23.8,3.5c2.8,3.5,6.8,8.8,7,21.7c0.1,12.8-0.1,39-0.1,39
                s-0.3,17.1,12,20.9c12.3,3.8,16.3,3,16.3,3c-0.7-6-1.1-12.1-1.1-18.2c0.2-7.1-0.2-44.1-0.2-44.1s0-22.8,13.6-26.9
                s22.8,3.2,25.2,10.4s3,9.3,3.2,21.5c0.1,12.2-0.1,29.4-0.1,29.4s-0.6,15.2,6.2,20.7c6.8,5.5,10.1,5.7,11.6,6
                C276.3,223.2,279.7,223.5,283.2,223.3z"
            />
          </g>
        </svg>
      )
    case "burger":
      return (
        <svg fill={fill} viewBox="0 0 20.2 19.7" width="1.5rem">
          <path
            d="M18.8,0c0.6,0,1,0.4,1,1l0,0.8c0,0.6-0.4,1-1,1L1.6,3.1c-0.6,0-1-0.4-1-1l0-0.8c0-0.6,0.4-1,1-1
              L18.8,0z M18.7,8.3c0.6,0,1,0.4,1,1l0,0.8c0,0.6-0.4,1-1,1L8.7,11.3c-0.6,0-1-0.4-1-1l0-0.8c0-0.6,0.4-1,1-1L18.7,8.3z M18.6,16.6
              c0.6,0,1,0.4,1,1l0,0.8c0,0.6-0.4,1-1,1L1.3,19.7c-0.6,0-1-0.4-1-1l0-0.8c0-0.6,0.4-1,1-1L18.6,16.6z"
          />
        </svg>
      )
    case "fb":
      return (
        <svg fill={fill} height="1.5rem" viewBox="0 0 13.9 30">
          <path
            d="M13.4,15H9.2v15H2.9V15H0V9.7h2.9V6.3c0-0.9,0.2-1.8,0.5-2.7c0.4-1,1-1.9,1.9-2.5
          C6.5,0.3,7.8-0.1,9.2,0l4.6,0v5.1h-3.4c-0.3,0-0.6,0.1-0.9,0.3C9.3,5.8,9.2,6.2,9.2,6.6v3.1h4.7L13.4,15z"
          />
        </svg>
      )
    case "insta":
      return (
        <svg fill={fill} height="1.5rem" viewBox="0 0 29.9 30">
          <path
            d="M3.7,7.4V0.9c0-0.2,0-0.3,0.1-0.5c0.1-0.1,0.3-0.2,0.5-0.2l0.3-0.1v7.2h1.2V0h0.8v7.4h1.2V0H24
            c1,0,2,0.3,2.9,0.8C27.8,1.3,28.5,2,29,2.8c0.5,0.8,0.8,1.8,0.8,2.8c0,0.6,0,1.3,0,2.1c0,1.7,0,2.4,0,2.1h-9.2
            c-0.2,0-0.4-0.1-0.5-0.2c-1-0.9-2.1-1.5-3.4-1.9c-1.2-0.3-2.5-0.3-3.8,0c-1.3,0.3-2.4,1-3.4,1.9C9.5,9.7,9.4,9.8,9.3,9.8H0.2L0,9.8
            V8.5c0,0.3,0-0.3,0-1.6c0-0.5,0-1.1,0.1-1.6c0.1-1.7,1-3.2,2.3-4.1l0.1,0v6.3L3.7,7.4L3.7,7.4z M21.2,10.7h8.7v13.5
            c0,1-0.3,2-0.8,2.9c-0.5,0.9-1.2,1.6-2.1,2.1C26.1,29.7,25.1,30,24,30H5.9c-1,0-2-0.2-2.9-0.8c-0.9-0.5-1.6-1.2-2.1-2.1
            C0.3,26.2,0,25.2,0,24.2V10.8h8.7c-1.4,2-1.8,4.6-1,6.9c1,2.7,3.3,4.6,6.2,5c1.1,0.1,2.2,0.1,3.3-0.3c1.1-0.3,2.1-0.9,2.9-1.6
            c0.8-0.8,1.5-1.7,1.9-2.7c0.5-1.1,0.7-2.3,0.6-3.6C22.4,13.2,21.9,11.9,21.2,10.7L21.2,10.7z M14.9,21c-1,0-2.1-0.3-3-0.8
            c-0.9-0.5-1.6-1.2-2.2-2.1c-1.1-1.8-1.1-4.1,0-5.9c0.5-0.9,1.3-1.6,2.2-2.2c0.9-0.5,1.9-0.8,3-0.8c1,0,2.1,0.3,2.9,0.8
            c0.9,0.5,1.6,1.3,2.1,2.2c1.1,1.8,1.1,4.1,0,5.9c-0.5,0.9-1.3,1.6-2.1,2.1C17,20.8,16,21,14.9,21z M19.3,15.2c0-1.6-0.8-3-2.2-3.8
            c-1.3-0.8-3-0.8-4.4,0c-0.7,0.4-1.2,0.9-1.6,1.6c-0.8,1.3-0.8,3,0,4.4c0.4,0.7,0.9,1.2,1.6,1.6c0.7,0.4,1.4,0.6,2.2,0.6
            c0.8,0,1.5-0.2,2.2-0.6c0.7-0.4,1.2-0.9,1.6-1.6C19.1,16.7,19.3,15.9,19.3,15.2z M27.2,5V3.5c0-0.3-0.1-0.5-0.3-0.7
            c-0.2-0.2-0.4-0.3-0.7-0.3c-1.1,0-2.1,0-3.2,0c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.2,0.7v3.2c0,0.3,0.1,0.5,0.3,0.7
            c0.2,0.2,0.4,0.3,0.7,0.3h3.2c0.5,0,0.9-0.3,1-0.8c0,0,0-0.1,0-0.1L27.2,5z"
          />
        </svg>
      )
    case "dividerShort":
      return (
        <DividerShort
          stroke={fill}
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
          viewBox="0 0 90 6.9"
        >
          <path d="M1.5,1.5c8.7,0,8.7,3.9,17.4,3.9s8.7-3.9,17.4-3.9S45,5.4,53.7,5.4s8.7-3.9,17.4-3.9 s8.7,3.9,17.4,3.9" />
        </DividerShort>
      )
    case "article":
      return (
        <svg
          viewBox="0 0 297 350"
          x="0"
          y="0"
          enableBackground="new 0 0 297 350"
          width="4rem"
        >
          <g>
            <path
              fill="none"
              d="M25.1,19h192.4c4.4,0,8,3.6,8,8v300c0,4.4-3.6,8-8,8H25.1c-4.4,0-8-3.6-8-8V27C17.1,22.6,20.7,19,25.1,19z"
            />
            <path
              fill="#C9D2F5"
              stroke="#D3D3D3"
              strokeMiterlimit="10"
              d="M217.5,23c2.2,0,4,1.8,4,4v300c0,2.2-1.8,4-4,4H25.1c-2.2,0-4-1.8-4-4V27c0-2.2,1.8-4,4-4H217.5 M217.5,15H25.1
          c-6.6,0-12,5.4-12,12v300c0,6.6,5.4,12,12,12h192.4c6.6,0,12-5.4,12-12V27C229.5,20.4,224.1,15,217.5,15z"
            />
            <line
              fill="none"
              stroke="#D3D3D3"
              strokeWidth="8"
              strokeMiterlimit="10"
              x1="43"
              y1="71"
              x2="128"
              y2="71"
            />
            <line
              fill="none"
              stroke="#D3D3D3"
              strokeWidth="8"
              strokeMiterlimit="10"
              x1="43"
              y1="55"
              x2="128"
              y2="55"
            />
            <line
              fill="none"
              stroke="#D3D3D3"
              strokeWidth="8"
              strokeMiterlimit="10"
              x1="43"
              y1="109"
              x2="200"
              y2="109"
            />
            <line
              fill="none"
              stroke="#D3D3D3"
              strokeWidth="8"
              strokeMiterlimit="10"
              x1="43"
              y1="127"
              x2="200"
              y2="127"
            />
            <line
              fill="none"
              stroke="#D3D3D3"
              strokeWidth="8"
              strokeMiterlimit="10"
              x1="43"
              y1="145"
              x2="200"
              y2="145"
            />
            <line
              fill="none"
              stroke="#D3D3D3"
              strokeWidth="8"
              strokeMiterlimit="10"
              x1="200"
              y1="174"
              x2="43"
              y2="174"
            />
            <line
              fill="none"
              stroke="#D3D3D3"
              strokeWidth="8"
              strokeMiterlimit="10"
              x1="43"
              y1="192"
              x2="200"
              y2="192"
            />
            <line
              fill="none"
              stroke="#D3D3D3"
              strokeWidth="8"
              strokeMiterlimit="10"
              x1="43"
              y1="210"
              x2="200"
              y2="210"
            />
            <line
              fill="none"
              stroke="#D3D3D3"
              strokeWidth="8"
              strokeMiterlimit="10"
              x1="43"
              y1="239"
              x2="200"
              y2="239"
            />
            <line
              fill="none"
              stroke="#D3D3D3"
              strokeWidth="8"
              strokeMiterlimit="10"
              x1="43"
              y1="257"
              x2="200"
              y2="257"
            />
            <line
              fill="none"
              stroke="#D3D3D3"
              strokeWidth="8"
              strokeMiterlimit="10"
              x1="43"
              y1="275"
              x2="200"
              y2="275"
            />
            <path
              fill="#4B4A68"
              d="M126.7,103h146.7c4.8,0,8.6,3.9,8.6,8.7v165.7c0,4.8-3.9,8.6-8.6,8.6H126.7c-4.8,0-8.7-3.9-8.7-8.6V111.7
          C118,106.9,121.9,103,126.7,103z"
            />
            <path
              fill="#C9D2F5"
              stroke="#D3D3D3"
              strokeMiterlimit="10"
              d="M273.4,107c2.6,0,4.6,2.1,4.6,4.7v165.7c0,2.6-2.1,4.6-4.6,4.6H126.7c-2.6,0-4.6-2.1-4.7-4.6V111.7
          c0-2.6,2.1-4.6,4.7-4.7H273.4 M273.4,99H126.7c-7,0-12.6,5.7-12.7,12.7v165.7c0,7,5.7,12.6,12.7,12.6h146.7c7,0,12.6-5.7,12.6-12.6
          V111.7C286,104.7,280.3,99,273.4,99z"
            />
            <path
              fill="#4B4A68"
              d="M148.7,127h100.6c4.8,0,8.7,3.9,8.7,8.7v63.6c0,4.8-3.9,8.7-8.7,8.7H148.7c-4.8,0-8.7-3.9-8.7-8.7v-63.6
          C140,130.9,143.9,127,148.7,127z"
            />
            <path
              fill="#C9D2F5"
              stroke="#D3D3D3"
              strokeMiterlimit="10"
              d="M249.3,131c2.6,0,4.7,2.1,4.7,4.7v63.6c0,2.6-2.1,4.7-4.7,4.7H148.7c-2.6,0-4.7-2.1-4.7-4.7v-63.6
          c0-2.6,2.1-4.7,4.7-4.7H249.3 M249.3,123H148.7c-7,0-12.7,5.7-12.7,12.7v63.6c0,7,5.7,12.7,12.7,12.7h100.6c7,0,12.7-5.7,12.7-12.7
          v-63.6C262,128.7,256.3,123,249.3,123z"
            />
            <polygon
              fill="#D2FAD6"
              points="159,177 182,144 192,160.5 202,177 218,150 242,177 "
            />
            <line
              fill="none"
              stroke="#D3D3D3"
              strokeWidth="8"
              strokeMiterlimit="10"
              x1="142"
              y1="232"
              x2="259"
              y2="232"
            />
            <line
              fill="none"
              stroke="#D3D3D3"
              strokeWidth="8"
              strokeMiterlimit="10"
              x1="142"
              y1="253.5"
              x2="259"
              y2="253.5"
            />
          </g>
        </svg>
      )
    case "contract1":
      return <ContractIcon src={contract1}  alt='icon representing split commission'/>
    case "contract2":
      return <ContractIcon src={contract2}/>
    case "contract3":
      return <ContractIcon src={contract3}/>
      case "payment1":
      return <ContractIcon src={payment1}/>
    case "payment2":
      return <ContractIcon src={payment2}/>
    case "payment3":
      return <ContractIcon src={payment3}/>
    default:
  }
}

export default Icons

Icons.defaultProps = {
  fill: "white",
}

Icons.propTypes = {
  name: PropTypes.string.isRequired,
  fill: PropTypes.string,
}

const DividerShort = styled.svg`
  stroke-width: 5;
  width: 3.5rem;
  height: 1em;
  margin: 0.5rem 0;
  @media (max-width: 1180px) {
    stroke-width: 6;
    height: 1.5rem;
  }
  @media (max-width: 480px) {
    height: 2rem;
  }
`

const ContractIcon = styled.img`
   width: 4rem; 
   margin-bottom: 25px;
   height: auto;
`