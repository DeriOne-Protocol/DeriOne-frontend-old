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
    Premium: "$1000",
    ExpiryDate: "40%",
    OptionSize: "$900",
    StrikePrice: "$500",
    Protocol: "Hegic",
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
            <th>Premium</th>
            <th>Expiry Date</th>
            <th>Option Size</th>
            <th>Strike Price</th>
            <th>Protocol</th>
          </tr>
        </thead>

        <tbody>
          {data.map((x) => (
            <tr key={x}>
              <td>{x.Premium}</td>
              <td>{x.ExpiryDate}</td>
              <td>{x.OptionSize}</td>
              <td>{x.StrikePrice}</td>
              <td>{x.Protocol}</td>
            </tr>
          ))}
        </tbody>

        <tbody>
          {data.map((x) => (
            <tr key={x}>
              <td>{premiumCharm}</td>
              <td>{expiryDateCharm}</td>
              <td>{optionSizeCharm}</td>
              <td>{strikePriceCharm}</td>
              <td>Charm</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OptionsTable
