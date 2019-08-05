import React from 'react'
import Navbar from './navbar/navbar'
import { BreakpointProvider} from 'react-socks'
import { setDefaultBreakpoints } from 'react-socks'

setDefaultBreakpoints([
  { mobile: 0 },
  { tablet: 991 },
  { desktop: 1025 }
]);

const Header = () => (
  <header>
    <BreakpointProvider>
    <Navbar/>
    </BreakpointProvider>
  </header>
)


export default Header
