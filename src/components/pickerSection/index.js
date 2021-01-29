import React, { useState, useContext, useEffect } from "react"
import RangeDropdown from "../rangeDropdown"
import { Div, PickerDiv, Form, Input, ButtonStyle } from "./pickerSection.style"
import { Link } from "react-router-dom"
import {
  expiryDateContext,
  optionSizeContext,
  premiumContext,
  strikePriceContext,
} from "../../contexts/TableDataContext"
import OptionsTable from "../optionsTable"

const optionsData = [
  {
    Protocol: "Hegic",
    ExpiryDate: "40%",
    OptionSize: "$900",
    Premium: "$1000",
    StrikePrice: "$500",
  },
]

const PickerSection = ({ getOptionsList }) => {
  // const expiryDate = useContext(expiryDateContext)
  // const optionSize = useContext(optionSizeContext)
  // const premium = useContext(premiumContext)
  // const strikePrice = useContext(strikePriceContext)

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const newTable = optionsData.map((values) => {
  //     return {
  //       ExpiryDate: expiryDate,
  //       OptionSize: optionSize,
  //       Premium: premium,
  //       StrikePrice: strikePrice,
  //     }
  //   })

  //   setData(newTable)

  //   return newTable
  // }, [expiryDate, optionSize, premium, strikePrice])

  const getData = async (e) => {
    e.preventDefault()
    getOptionsList()
    //updateTable()
  }

  return (
    <>
      <Div>
        <PickerDiv>
          <Form>
            <div>
              <div>
                <label>Date Range</label>
              </div>

              <RangeDropdown text={"From:"} />

              <RangeDropdown text={"To:"} />
            </div>

            <div>
              <div>
                <label>Strike Price Range</label>
              </div>

              <Input placeholder="To" />
              <Input placeholder="From" />
            </div>

            <div>
              <Input placeholder="Option Size" />
            </div>

            <div>
              <Link to="/table">
                <ButtonStyle onClick={getData}>Submit</ButtonStyle>
              </Link>
            </div>
          </Form>
        </PickerDiv>
        {/* <table>
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
        </table> */}
        <OptionsTable />
      </Div>
    </>
  )
}

export default PickerSection
