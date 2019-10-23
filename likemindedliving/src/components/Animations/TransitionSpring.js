import React from "react"
import { useToggle } from "../../hooks/useToggle"
import { Transition } from "react-spring/renderprops"

export const TransitionExample = () => {
  const { isShowing, toggle } = useToggle(false)

  return (
    <div style={{ width: "100%", height: 520 }}>
      <button onClick={toggle}>Show/Hide</button>
      <Transition
        items={isShowing}
        unique={true}
        from={{ opacity: 0, bg: '#D2FAD6', height: '0px'}}
        enter={{ opacity: 1, bg: '#F9D1B7', height: '200px' }}
        leave={{ opacity: 0, bg: '#BEF1E9', height: '0px'}}
      >
        {isShowing => isShowing && Header}
      </Transition>
    </div>
  )
}


const Header = styles => (
    <div
      style={{
        opacity: styles.opacity,
        background: styles.bg,
        height: styles.height,
        overflow: 'hidden'
      }}
    >
      <h1>Show me</h1>
      <p>{styles.bg}</p>
    </div>
  )


{
  /*

     <Transition
        items={isShowing}
        unique={true}
        from={{ opacity: 0, r: 0 }}
        enter={{ opacity: 1, r: 255 }}
        leave={{ opacity: 0, r: 20 }}
      >
      
const Header = styles => (
  <div
    style={{
      opacity: styles.opacity,  // Break out the styles in the transition object. 
      background: `rgba(${Math.floor(styles.r)}, 100, 100, 1)`,
    }}
  >
    <h1>Show me</h1>
    <p>{styles.value}</p>
  </div>
)
*/
}

{
  /*    
    <Transition
        items={isShowing} // This is the trigger
        unique={true}
        from={{ opacity: 0, value: 20 }}
        enter={{ opacity: 1, value: 0 }}
        leave={{ opacity: 0, value: 20}}
      >
        {isShowing => isShowing && Header} // Trigger / Trigger / Function
      </Transition>
      
      const Header = styles => ( // Function accepts styles or passed styles value
  <div style={{ ...styles }}> //Pass the styles object to the style prop
    <h1>Show me</h1>
    <p>{styles.value}</p> //Can pass in a counter etc
  </div>
)
*/
}
