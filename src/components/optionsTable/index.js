import React, { useState, useContext, useEffect } from "react"
import { Table } from "./optionsTable.style"
import {
  expiryDateContext,
  optionSizeContext,
  premiumContext,
  strikePriceContext,
  expiryDateCharmContext,
  optionSizeCharmContext,
  premiumCharmContext,
  strikePriceCharmContext,
} from "../../contexts/TableDataContext"

const optionsData = [
  {
    Protocol: "Hegic",
    ExpiryDate: "40%",
    OptionSize: "$900",
    Premium: "$1000",
    StrikePrice: "$500",
  },
]

const OptionsTable = () => {
  const expiryDate = useContext(expiryDateContext)
  const optionSize = useContext(optionSizeContext)
  const premium = useContext(premiumContext)
  const strikePrice = useContext(strikePriceContext)

  const expiryDateCharm = useContext(expiryDateCharmContext)
  const optionSizeCharm = useContext(optionSizeCharmContext)
  const premiumCharm = useContext(premiumCharmContext)
  const strikePriceCharm = useContext(strikePriceCharmContext)

  const [data, setData] = useState([])

  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits,
    }).format(number)

  useEffect(() => {
    const newTable = optionsData.map((values) => {
      return {
        Protocol: "Hegic",
        ExpiryDate: expiryDate,
        OptionSize: optionSize,
        Premium: premium,
        StrikePrice: strikePrice,
      }
    })

    setData(newTable)

    return newTable
  }, [expiryDate, optionSize, premium, strikePrice])

  return (
    <div className="ui container">
      <table className="ui single line table">
        <thead>
          <tr>
            <th>Protocol</th>
            <th>Expiry Date</th>
            <th>Option Size</th>
            <th>Premium</th>
            <th>Strike Price</th>
          </tr>
        </thead>

        <tbody>
          {data.map((x) => (
            <tr key={x}>
              <td>{x.Protocol}</td>
              <td>{x.ExpiryDate}</td>
              <td>{x.OptionSize}</td>
              <td>{x.Premium}</td>
              <td>{x.StrikePrice}</td>
            </tr>
          ))}
        </tbody>

        <tbody>
          {data.map((x) => (
            <tr key={x}>
              <td>Charm</td>
              <td>{expiryDateCharm}</td>
              <td>N/A</td>
              <td>{premiumCharm}</td>
              <td>{strikePriceCharm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OptionsTable
