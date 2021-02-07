import React, { useState } from "react"
import RangeDropdown from "../rangeDropdown"
import { Div, PickerDiv, Form, Input, ButtonStyle } from "./pickerSection.style"
import { Link } from "react-router-dom"
import OptionsTable from "../optionsTable"
import { ethers } from "ethers"

const PickerSection = ({ getCharmsList, getHegicList }) => {
  const [optionSizes, setOptionSizes] = useState("")
  const [strikeTo, setStrikeTo] = useState("")
  const [strikeFrom, setStrikeFrom] = useState("")

  const ethDecimal = 10 ** 18

  const getCharmData = async (e) => {
    let expiryTime1 = e.target.elements[0].value
    let expiryTime2 = e.target.elements[1].value
    let newExpiryTime1 = formatDate(expiryTime1)
    let newExpiryTime2 = formatDate(expiryTime2)
    let minStrike = ethers.utils
      .parseEther(e.target.elements[2].value)
      .toString()
    let maxStrike = ethers.utils
      .parseEther(e.target.elements[3].value)
      .toString()
    let optionSize = e.target.elements[4].value

    getCharmsList(
      newExpiryTime1,
      newExpiryTime2,
      minStrike,
      maxStrike,
      optionSize
    )
  }

  const getHegicData = async (e) => {
    let expiryTime1 = e.target.elements[0].value
    let expiryTime2 = e.target.elements[1].value
    let newExpiryTime1 = formatDateHegic(expiryTime1)
    let newExpiryTime2 = formatDateHegic(expiryTime2)
    let minStrike = e.target.elements[2].value * 10 ** 8

    let maxStrike = e.target.elements[3].value * 10 ** 8

    let optionSize = e.target.elements[4].value

    getHegicList(
      newExpiryTime1,
      newExpiryTime2,
      minStrike,
      maxStrike,
      optionSize
    )
  }

  const callBothOptions = (e) => {
    e.preventDefault()
    getHegicData(e)
    getCharmData(e)
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
  }

  const formatDateHegic = (date) => {
    let myDate = date.split("/")
    let newDate = new Date(myDate[2], myDate[1] - 1, myDate[0])
    let dateObject = newDate.getTime() / 1000
    return dateObject
  }

  return (
    <>
      <Div>
        <PickerDiv>
          <Form onSubmit={callBothOptions}>
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
        <OptionsTable />
      </Div>
    </>
  )
}

export default PickerSection
