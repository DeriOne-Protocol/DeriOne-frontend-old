import React from "react"
import { ButtonStyle } from "./button.style"

const Button = ({ text }) => {
  return (
    <>
      <ButtonStyle>{text}</ButtonStyle>
    </>
  )
}

export default Button
