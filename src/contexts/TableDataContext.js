import React, { useState } from "react"

const expiryDateContext = React.createContext()
const optionSizeContext = React.createContext()
const premiumContext = React.createContext()
const strikePriceContext = React.createContext()

const TableDataContext = (props) => {
  const { children, expiryDate, optionSize, premium, strikePrice } = props

  return (
    <expiryDateContext.Provider value={expiryDate}>
      <optionSizeContext.Provider value={optionSize}>
        <premiumContext.Provider value={premium}>
          <strikePriceContext.Provider value={strikePrice}>
            {children}
          </strikePriceContext.Provider>
        </premiumContext.Provider>
      </optionSizeContext.Provider>
    </expiryDateContext.Provider>
  )
}

export {
  TableDataContext,
  expiryDateContext,
  optionSizeContext,
  premiumContext,
  strikePriceContext,
}
