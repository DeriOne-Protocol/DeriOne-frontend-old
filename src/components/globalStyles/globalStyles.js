import { createGlobalStyle, css } from "styled-components"
import BG from "../../resources/11.jpg"

export default createGlobalStyle`
    html {
        height: 100%;
    }

    body{
        display:flex;
        flex-direction: column;
        height: 100%;
        line-height: 1.6;
        background: url(${BG}) no-repeat center center/cover;
        
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Didact Gothic', sans-serif;
    }

`
