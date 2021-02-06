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
  const [deriOneV1HegicV888Contract, setDeriOneV1HegicV888Contract] = useState(
    undefined
  )
  const [account, setAccount] = useState(undefined)
  const [expiryDate, setExpiryDate] = useState("...")
  const [optionSize, setOptionSize] = useState("...")
  const [premium, setPremium] = useState("...")
  const [strikePrice, setStrikePrice] = useState("...")

  const [expiryDateCharm, setExpiryDateCharm] = useState("...")
  const [optionSizeCharm, setOptionSizeCharm] = useState("...")
  const [premiumCharm, setPremiumCharm] = useState("...")
  const [strikePriceCharm, setStrikePriceCharm] = useState("...")

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

      const deriOneV1Main = new Contract(
        contractAddress,
        DeriOneV1Main.abi,
        provider
      )
      const deriOneV1CharmV02 = new Contract(
        contractAddress,
        DeriOneV1CharmV02.abi,
        provider
      )
      const deriOneV1HegicV888 = new Contract(
        contractAddress,
        DeriOneV1HegicV888.abi,
        provider
      )
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

  const getCharmsList = async (
    expiryTime1,
    expiryTime2,
    minStrike,
    maxStrike,
    optionSize
  ) => {
    //console.log("deriOneV1CharmV02 ==>", deriOneV1CharmV02)

    //console.log(expiryTime1)
    let theCheapestETHPutOption = await deriOneV1CharmV02.getMatchedOptionListCharmV02(
      expiryTime1, // 2021-01-29 08:06:05
      expiryTime2, // 2021-02-11 07:43:14
      minStrike,
      maxStrike,
      optionSize
    )

    //console.log("theCheapestETHPutOption ==>", theCheapestETHPutOption)
    // console.log(
    //   "theCheapestETHPutOption ==>",
    //   theCheapestETHPutOption[0].expiry.toString()
    // )

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }
    const expiryFormatted = new Date(
      parseInt(theCheapestETHPutOption[0].expiry) * 1000
    ).toLocaleDateString(undefined, options)

    const strikeFormatted = theCheapestETHPutOption[0].strikeUSD / 10 ** 18

    setExpiryDateCharm(expiryFormatted)
    setPremiumCharm(theCheapestETHPutOption[0].premiumWEI.toString())
    setStrikePriceCharm(`$${strikeFormatted}`)
  }

  const getHegicList = async (
    expiryTime1,
    expiryTime2,
    minStrike,
    maxStrike,
    optionSize
  ) => {
    let theCheapestETHPutOption = await deriOneV1MainContract.getTheCheapestETHPut(
      expiryTime2, // 24 hours from now in seconds
      maxStrike, // USD price decimals are 8 in hegic
      optionSize
    )

    //console.log("theCheapestETHPutOption ==>", theCheapestETHPutOption)
    const optionSizeFormatted = ethers.utils.formatEther(
      theCheapestETHPutOption.sizeWEI,
      "ether"
    )

    const premiumFormatted = ethers.utils.formatEther(
      theCheapestETHPutOption.premiumWEI,
      "ether"
    )
    //let _premiumFormatted = premiumFormatted.toString().toFixed(4)
    //console.log(theCheapestETHPutOption.strikeUSD.toString())
    const strikeFormatted = theCheapestETHPutOption.strikeUSD / 10 ** 8

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }
    const expiryFormatted = new Date(
      parseInt(theCheapestETHPutOption.expiry) * 1000
    ).toLocaleDateString(undefined, options)

    setExpiryDate(expiryFormatted)
    setOptionSize(optionSizeFormatted)
    setPremium(premiumFormatted)
    setStrikePrice(`$${strikeFormatted}`)
  }

  return (
    <>
      <TableDataContext
        expiryDate={expiryDate}
        optionSize={optionSize}
        premium={premium}
        strikePrice={strikePrice}
        expiryDateCharm={expiryDateCharm}
        optionSizeCharm={optionSizeCharm}
        premiumCharm={premiumCharm}
        strikePriceCharm={strikePriceCharm}>
        <BrowserRouter>
          <GlobalStyles />

          <Header price={ethPrice} />

          <Content>
            <PickerSection
              getCharmsList={getCharmsList}
              getHegicList={getHegicList}
            />
            <OptionsTable />
          </Content>
        </BrowserRouter>
      </TableDataContext>
    </>
  )
}

export default App
