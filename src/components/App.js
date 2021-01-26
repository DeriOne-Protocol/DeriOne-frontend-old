import React, { useEffect, useState } from "react"
import { GlobalStyles } from "./globalStyles"
import { Content } from "./content"
import Header from "./header"
import OptionsTable from "./optionsTable"
import PickerSection from "./pickerSection"
import styled from "styled-components"
import coingecko from "../apis/coingecko"
import { BrowserRouter, Route, Switch } from "react-router-dom"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: red;
`

function App() {
  const [ethPrice, setEthPrice] = useState(undefined)

  useEffect(() => {
    const getEthPrice = async () => {
      const response = await coingecko.get()
      setEthPrice(response.data.ethereum.usd)
    }
    setInterval(getEthPrice, 5000)
  }, [ethPrice])

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />

        <Header price={ethPrice} />

        <Content>
          <PickerSection />

          <OptionsTable />
        </Content>
      </BrowserRouter>
    </>
  )
}

export default App
