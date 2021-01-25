import React from "react"
import RangeDropdown from "../rangeDropdown"
import Button from "../button"
import { Div, PickerDiv, Form, Input, ButtonStyle } from "./pickerSection.style"

const PickerSection = () => {
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
              <ButtonStyle>Submit</ButtonStyle>
            </div>
          </Form>
        </PickerDiv>
      </Div>
    </>
  )
}

export default PickerSection
