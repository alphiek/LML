import { keyframes } from "styled-components"

export const Bounce = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-3px);
  }
`

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
