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
import DeriOneV1Main from "../contracts/DeriOneV1Main.sol/DeriOneV1Main.json"
import DeriOneV1CharmV02 from "../contracts/DeriOneV1CharmV02.sol/DeriOneV1CharmV02.json"
import DeriOneV1HegicV888 from "../contracts/DeriOneV1HegicV888.sol/DeriOneV1HegicV888.json"
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
  const [deriOneV1MainContract, setDeriOneV1Main] = useState(undefined)
  const [deriOneV1CharmV02, setDeriOneV1CharmV02Contract] = useState(undefined)
  const [deriOneV1HegicV888Contract, setDeriOneV1HegicV888Contract] = useState(undefined)
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

      const deriOneV1Main = new Contract(contractAddress, DeriOneV1Main.abi, provider)
      const deriOneV1CharmV02 = new Contract(contractAddress, DeriOneV1CharmV02.abi, provider)
      const deriOneV1HegicV888 = new Contract(contractAddress, DeriOneV1HegicV888.abi, provider)
      setDeriOneV1Main(deriOneV1Main)
      setDeriOneV1CharmV02Contract(deriOneV1CharmV02)
      setDeriOneV1HegicV888Contract(deriOneV1HegicV888)
      console.log(signerAddress)
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

    console.log('deriOneV1CharmV02 ==>', deriOneV1CharmV02);

    let theCheapestETHPutOption = await deriOneV1CharmV02.getMatchedOptionListCharmV02(
      1611907565, // 2021-01-29 08:06:05
      1613029394, // 2021-02-11 07:43:14
      "800000000000000000000",
      "1200000000000000000000",
      "5000000000000000000"
  )

    console.log("theCheapestETHPutOption ==>", theCheapestETHPutOption)

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
      "5000000000000000000"
    )

    //console.log("theCheapestETHPutOption ==>", theCheapestETHPutOption)
    console.log(
      ethers.utils.formatEther(theCheapestETHPutOption.premiumInWEI, "ether")
    )

    setExpiryDate(theCheapestETHPutOption.expiry.toString())
    setOptionSize(theCheapestETHPutOption.optionSizeInWEI.toString())
    setPremium(theCheapestETHPutOption.premiumInWEI.toString())
    setStrikePrice(theCheapestETHPutOption.strikeInUSD.toString())
  }

  const testersss = async (e) => {
    e.preventDefault()
    let log = await deriOneV1MainContract.testb()
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
