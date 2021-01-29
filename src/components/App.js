import React, { useEffect, useState } from "react"
import { GlobalStyles } from "./globalStyles"
import { Content } from "./content"
import Header from "./header"
import OptionsTable from "./optionsTable"
import PickerSection from "./pickerSection"
import styled from "styled-components"
import coingecko from "../apis/coingecko"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Contract, ethers } from "ethers"
import DeriOne from "../contracts/DeriOneV1Main.sol/DeriOneV1Main.json"
import { TableDataContext } from "../contexts/TableDataContext"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: red;
`

function App() {
  const [ethPrice, setEthPrice] = useState(undefined)
  const [contract, setContract] = useState(undefined)
  const [account, setAccount] = useState(undefined)
  const [expiryDate, setExpiryDate] = useState(1)
  const [optionSize, setOptionSize] = useState(1)
  const [premium, setPremium] = useState(1)
  const [strikePrice, setStrikePrice] = useState(1)

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

  useEffect(() => {
    const init = async () => {
      await window.ethereum.enable()

      // const provider = new ethers.providers.JsonRpcProvider(
      //   "http://localhost:8545"
      // )

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = await provider.getSigner()
      const signerAddress = await signer.getAddress()

      const deriOne = new Contract(contractAddress, DeriOne.abi, signer)
      console.log(signerAddress)
      setContract(deriOne)
      setAccount(signer)
    }
    init()
  }, [])

  useEffect(() => {
    const getEthPrice = async () => {
      const response = await coingecko.get()
      setEthPrice(response.data.ethereum.usd)
    }
    setInterval(getEthPrice, 5000)
  }, [ethPrice])

  const getOptionsList = async (e) => {
    //e.preventDefault()

    let theCheapestETHPutOption = await contract.getTheCheapestETHPutOption(
      24 * 3600, // 24 hours from now in seconds
      100000000000, // USD price decimals are 8 in hegic
      90000000000, // USD price decimals are 8 in hegic
      "9000000000000000000"
    )

    //console.log("theCheapestETHPutOption ==>", theCheapestETHPutOption)

    setExpiryDate(theCheapestETHPutOption.expiry.toString())
    setOptionSize(theCheapestETHPutOption.optionSizeInWEI.toString())
    setPremium(theCheapestETHPutOption.premiumInWEI.toString())
    setStrikePrice(theCheapestETHPutOption.strikeInUSD.toString())
  }

  const tester = async (e) => {
    e.preventDefault()

    let theCheapestETHPutOption = await contract.getTheCheapestETHPutOption(
      24 * 3600, // 24 hours from now in seconds
      500000000000, // USD price decimals are 8 in hegic
      90000000000, // USD price decimals are 8 in hegic
      "6000000000000000000"
    )

    //console.log("theCheapestETHPutOption ==>", theCheapestETHPutOption)

    setExpiryDate(theCheapestETHPutOption.expiry.toString())
    setOptionSize(theCheapestETHPutOption.optionSizeInWEI.toString())
    setPremium(theCheapestETHPutOption.premiumInWEI.toString())
    setStrikePrice(theCheapestETHPutOption.strikeInUSD.toString())
  }

  const testersss = async (e) => {
    e.preventDefault()
    let log = await contract.testb()
    //let cc = ethers.BigNumber(log).toNumber()
    console.log(log)
  }

  return (
    <>
      <TableDataContext
        expiryDate={expiryDate}
        optionSize={optionSize}
        premium={premium}
        strikePrice={strikePrice}>
        <BrowserRouter>
          <GlobalStyles />

          <Header price={ethPrice} />

          <Content>
            <PickerSection getOptionsList={getOptionsList} />
            <button onClick={tester}>hu</button>
            <OptionsTable />
          </Content>
        </BrowserRouter>
      </TableDataContext>
    </>
  )
}

export default App
