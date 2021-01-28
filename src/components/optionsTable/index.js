import React, { useState, useContext } from "react"
import { Table } from "./optionsTable.style"
import {
  expiryDateContext,
  optionSizeContext,
  premiumContext,
  strikePriceContext,
} from "../../contexts/TableDataContext"

const OptionsTable = () => {
  const expiryDate = useContext(expiryDateContext)
  const optionSize = useContext(optionSizeContext)
  const premium = useContext(premiumContext)
  const strikePrice = useContext(strikePriceContext)

  const optionsData = [
    {
      Protocol: "Hegic",
      ExpiryDate: "40%",
      OptionSize: "$900",
      Premium: "$1000",
      StrikePrice: "$500",
    },
  ]
  console.log(optionsData)
  const [data, setData] = useState([
    {
      Protocol: "Hegic",
      ExpiryDate: "40%",
      OptionSize: "$900",
      Premium: "$1000",
      StrikePrice: "$700",
    },
  ])

  const updateTable = async () => {
    const newTable = optionsData.map(
      (values) => (
        (values.ExpiryDate = { expiryDate }),
        (values.OptionSize = { optionSize }),
        (values.Premium = { premium }),
        (values.StrikePrice = { strikePrice })
      )
    )

    console.log(newTable)
    console.log(premium)
    setData(newTable)
    return newTable
  }

  return (
    <>
      <Table>
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
              <td>{x.expiryDate}</td>
              <td>{x.optionSize}</td>
              <td>{x.premium}</td>
              <td>{x.strikePrice}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button onClick={updateTable}>dd</button>
    </>
  )
}

export default OptionsTable
