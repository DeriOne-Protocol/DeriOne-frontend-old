import React, { useState } from "react"
import RangeDropdown from "../rangeDropdown"
import { Div, PickerDiv, Form, Input, ButtonStyle } from "./pickerSection.style"
import { Link } from "react-router-dom"
import OptionsTable from "../optionsTable"

const PickerSection = ({ getOptionsList }) => {
  const [optionSizes, setOptionSizes] = useState("")
  const [strikeTo, setStrikeTo] = useState("")
  const [strikeFrom, setStrikeFrom] = useState("")

  const getData = async (e) => {
    e.preventDefault()
    const expiryTime = e.target.elements[0].value
    const minStrike = e.target.elements[1].value
    const maxStrike = e.target.elements[2].value
    const optionSize = e.target.elements[3].value
    getOptionsList(expiryTime, minStrike, maxStrike, optionSize)
  }

  const updateOptionSize = (e) => {
    e.preventDefault()
    setOptionSizes(e.target.value)
  }

  const updateTo = (e) => {
    e.preventDefault()
    setStrikeTo(e.target.value)
  }

  const updateFrom = (e) => {
    e.preventDefault()
    setStrikeFrom(e.target.value)
  }

  return (
    <>
      <Div>
        <PickerDiv>
          <Form onSubmit={getData}>
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

              <Input placeholder="To" value={strikeTo} onChange={updateTo} />
              <Input
                placeholder="From"
                value={strikeFrom}
                onChange={updateFrom}
              />
            </div>

            <div>
              <Input
                placeholder="Option Size"
                value={optionSizes}
                onChange={updateOptionSize}
              />
            </div>

            <div>
              <Link to="/table">
                <ButtonStyle>Submit</ButtonStyle>
              </Link>
            </div>
          </Form>
        </PickerDiv>
      </Div>
    </>
  )
}

export default PickerSection
