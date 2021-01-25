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
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`
export const Input = styled.input`
  margin: 5px;
  border-radius: 2px;
  border: 1px solid blue;

  &:focus {
    outline-color: blue;
  }
`
