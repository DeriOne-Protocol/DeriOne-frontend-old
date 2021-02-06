import React, { useState } from "react"
import RangeDropdown from "../rangeDropdown"
import { Div, PickerDiv, Form, Input, ButtonStyle } from "./pickerSection.style"
import { Link } from "react-router-dom"
import OptionsTable from "../optionsTable"
import { ethers } from "ethers"

const PickerSection = ({ getOptionsList }) => {
  const [optionSizes, setOptionSizes] = useState("")
  const [strikeTo, setStrikeTo] = useState("")
  const [strikeFrom, setStrikeFrom] = useState("")

  const ethDecimal = 10 ** 18

  const getData = async (e) => {
    e.preventDefault()

    const expiryTime1 = e.target.elements[0].value
    const expiryTime2 = e.target.elements[1].value
    let newExpiryTime1 = formatDate(expiryTime1)
    let newExpiryTime2 = formatDate(expiryTime2)
    const minStrike = ethers.utils
      .parseEther(e.target.elements[2].value)
      .toString()
    const maxStrike = ethers.utils
      .parseEther(e.target.elements[3].value)
      .toString()
    const optionSize = ethers.utils
      .parseEther(e.target.elements[4].value)
      .toString()

    let newMinStrike = transformToString(minStrike)
    let newMaxStrike = transformToString(maxStrike)
    let newOptionSize = transformToString(optionSize)

    console.log(
      newExpiryTime1,
      newExpiryTime2,
      typeof newMinStrike,
      typeof newMaxStrike,
      typeof newOptionSize,
      newOptionSize
    )

    getOptionsList(
      newExpiryTime1,
      newExpiryTime2,
      minStrike,
      maxStrike,
      optionSize
    )
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

  const formatDate = (date) => {
    let myDate = date.split("/")
    let newDate = new Date(myDate[2], myDate[1] - 1, myDate[0])
    let dateObject = newDate.getTime() / 1000
    return dateObject
    //console.log(newDate.getTime() / 1000)
  }

  const transformToString = (data) => {
    let stringData = (data * ethDecimal).toString()
    console.log(stringData)
    return stringData
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
              <ButtonStyle type="submit">Submit</ButtonStyle>
            </div>
          </Form>
        </PickerDiv>
      </Div>
    </>
  )
}

export default PickerSection
