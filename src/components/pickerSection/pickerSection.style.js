import styled from "styled-components"

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  color: white;
`

export const PickerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  width: 300px;
  height: 300px;
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
`
export const Input = styled.input`
  margin: 5px;
  border-radius: 6px;
  border: 1px solid blue;
  padding: 0 14px;
  width: 100%;
  outline: none;
  height: 44px;

  &:focus {
    outline-color: blue;
  }
`
