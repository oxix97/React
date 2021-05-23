import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }
    #root{
        width:100%;
        height:100%;
        background-color:#eff3f7;
    }
    body{
        font-family: AppleSystemUIFont, serif;
    }
`
export const MoiveStyle = styled.div`
    background-color : white;
    margin-top : 30px;
    font-weight: 300;
    padding : 20px;
    border-radius : 5px;
`

export const Tag = styled.a`
    display : grid;
    grid-template-columns : minmax(150px,1fr) 2fr;
    grid-gap : 20px;
    text-decoration : none;
    color : inherit;   
`
export const Img = styled.img`
    position : relative;
    top : -50px;
    max-width: 150px;
    margin-right:30px;
    box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3),0 -6px -16px -6px rgba(0,0,0,0.025);
    `

export const Title = styled.title`
    margin:0;
    font-weight:300;
    margin-bottom:5px;
    font-size:24px;
    color:#2c2c2c;   
`
export const GenresUl = styled.ul`
    list-style : none;
    padding:0;
    margin:0;
    display:flex;
    flex-wrap : wrap;
    margin:5px 0;
    `

export const GenresLi = styled.li`
    margin-right:10px;
    font-size:14px;
    `