import React from "react"
import { HeaderSection } from "./header.styles"

const Header = ({ price = "Retrieving Price...." }) => {
  return (
    <>
      <HeaderSection>
        <div>
          <h1>ETH PRICE</h1>
          <h1>{"$" + price}</h1>
        </div>
      </HeaderSection>
    </>
  )
}

export default Header
