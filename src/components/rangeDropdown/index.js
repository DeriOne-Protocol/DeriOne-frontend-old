import React, { useState } from "react"
import { Label } from "./rangeDropdown.style"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const RangeDropdown = ({ text }) => {
  const [startDate, setStateDate] = useState(new Date())

  return (
    <>
      <Label>{text}</Label>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStateDate(date)}
        />
      </div>
    </>
  )
}

export default RangeDropdown
