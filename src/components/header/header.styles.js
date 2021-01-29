import styled from "styled-components"

export const HeaderSection = styled.header`
  height: 15vh;

  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 0, 100% 0, 79% 100%, 18% 100%);
  background: rgb(139, 148, 149);
  background: radial-gradient(
    circle,
    rgba(139, 148, 149, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );

  -webkit-box-shadow: 2px 5px 9px 4px rgba(0, 0, 0, 0.74),
    inset 0px 0px 9px 4px rgba(255, 254, 253, 0.65);
  box-shadow: 2px 5px 9px 4px rgba(0, 0, 0, 0.74),
    inset 0px 0px 9px 4px rgba(255, 254, 253, 0.65);
  h1 {
    font-family: "Questrial", sans-serif;
  }
`
