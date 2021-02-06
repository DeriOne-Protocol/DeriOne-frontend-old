import styled from "styled-components"

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  text-align: center;
  color: white;
`

export const PickerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
`

export const Form = styled.form`
  margin-top: 10px;
  margin-bottom: 10px;
  outline-color: green;
  display: block;
  background: rgb(182, 182, 182);
  background: linear-gradient(
    189deg,
    rgba(182, 182, 182, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  border-radius: 5px;
  padding: 10px;
  font-weight: 500;
  font-size: 1.1rem;
  color: black;

  -webkit-box-shadow: 2px 5px 9px 4px rgba(0, 0, 0, 0.74),
    inset 0px 0px 9px 4px rgba(255, 254, 253, 0.65);
  box-shadow: 2px 5px 9px 4px rgba(0, 0, 0, 0.74),
    inset 0px 0px 9px 4px rgba(255, 254, 253, 0.65);
`
export const Input = styled.input`
  margin: 5px;
  border-radius: 6px;
  border: 1px solid rgba(255, 254, 253, 0.65);
  padding: 0 14px;
  width: 100%;
  outline: none;
  height: 44px;
`

export const ButtonStyle = styled.button`
  border: none;
  border-radius: 6px;
  width: 100%;
  height: 44px;
  background: #0bdff4;
  transition: 0.3s;
  margin: 5px;
  padding: 0 14px;

  &:hover {
    background: #0bc8db;
  }
`
