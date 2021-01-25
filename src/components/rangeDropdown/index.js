import React from "react"
import { Label } from "./rangeDropdown.style"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const RangeDropdown = ({ text }) => {
  return (
    <>
      <Label>{text}</Label>
      <div>
        <DatePicker />
      </div>
    </>
  )
}

export default RangeDropdown
