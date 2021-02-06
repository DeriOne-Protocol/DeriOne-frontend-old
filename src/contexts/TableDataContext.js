import React from "react"

//Hegic Contexts
const expiryDateContext = React.createContext()
const optionSizeContext = React.createContext()
const premiumContext = React.createContext()
const strikePriceContext = React.createContext()

// Charm Contexts
const expiryDateCharmContext = React.createContext()
const optionSizeCharmContext = React.createContext()
const premiumCharmContext = React.createContext()
const strikePriceCharmContext = React.createContext()

const TableDataContext = (props) => {
  const {
    children,
    expiryDate,
    optionSize,
    premium,
    strikePrice,
    expiryDateCharm,
    optionSizeCharm,
    premiumCharm,
    strikePriceCharm,
  } = props

  return (
    <expiryDateContext.Provider value={expiryDate}>
      <optionSizeContext.Provider value={optionSize}>
        <premiumContext.Provider value={premium}>
          <strikePriceContext.Provider value={strikePrice}>
            <expiryDateCharmContext.Provider value={expiryDateCharm}>
              <optionSizeCharmContext.Provider value={optionSizeCharm}>
                <premiumCharmContext.Provider value={premiumCharm}>
                  <strikePriceCharmContext.Provider value={strikePriceCharm}>
                    {children}
                  </strikePriceCharmContext.Provider>
                </premiumCharmContext.Provider>
              </optionSizeCharmContext.Provider>
            </expiryDateCharmContext.Provider>
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
  expiryDateCharmContext,
  optionSizeCharmContext,
  premiumCharmContext,
  strikePriceCharmContext,
}
