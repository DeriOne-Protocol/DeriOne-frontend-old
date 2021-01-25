import React from "react"
import { GlobalStyles } from "./globalStyles"
import { Content } from "./content"
import Header from "./header"
import OptionsTable from "./optionsTable"
import PickerSection from "./pickerSection"
import styled from "styled-components"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: red;
`

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />
      <Content>
        <PickerSection />

        <OptionsTable />
      </Content>
    </>
  )
}

export default App
