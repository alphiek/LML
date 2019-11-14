import React from 'react'
import styled from 'styled-components'
import Icons from '../../Icons/Icons'

export const ImagePlaceholder = () => {
  return (
    <IconWrapper>
      <Icons name="logo" fill="white" />
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(201, 210, 245);
  background: -moz-linear-gradient(
    254deg,
    rgba(201, 210, 245, 1) 0%,
    rgba(190, 225, 236, 1) 51%,
    rgba(180, 236, 228, 1) 100%
  );
  background: -webkit-linear-gradient(
    254deg,
    rgba(201, 210, 245, 1) 0%,
    rgba(190, 225, 236, 1) 51%,
    rgba(180, 236, 228, 1) 100%
  );
  background: linear-gradient(
    254deg,
    rgba(201, 210, 245, 1) 0%,
    rgba(190, 225, 236, 1) 51%,
    rgba(180, 236, 228, 1) 100%
  );
  width: 100%;
  height: 100%;
`
