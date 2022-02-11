import styled, { css } from 'styled-components';
import { Buttons } from '../Buttons/style'


import { IoHomeSharp } from 'react-icons/io5';

export const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(200px,200px));

    width:78.5505%;
    margin: 90px auto;
`
export const Card = styled.div`
    position:relative;
    width:200px;
    height:350px;

    border-radius:7px;
    overflow:hidden;
    cursor:pointer;

    filter: drop-shadow(0px 10px 20px #000000);
    transition:all .5s;
    transform:scale(0.90);

    &::before{
       display: inline-block;
       content:'';
       width:100%;
       height:100%;
        
       position:absolute;
       top:0;
       left:0;
       z-index:50;
       
       background: linear-gradient(182.04deg, rgba(96, 24, 188, 0) -4.7%, 
       rgba(120, 54, 204, 0.65) 98.28%), 
       
       linear-gradient(182.04deg, rgba(96, 24, 188, 0) -4.7%, 
       rgba(120, 54, 204, 0.17) 98.28%);
    }

    >span{
        width:100%;
        position:absolute;
        left:0;
        bottom:0;
        z-index:100;
        margin-bottom:10px;

        text-align:center;
        font-weight:600;
        color:var(--bg-color-neutro-light);
    }
    >img{
        position:relative;
        width:100%;
        height:100%;
        object-fit: cover;
    }

    &:hover{
        transform:scale(1);
         box-shadow: 0px 0px 5px var(--bg-color-complement);
    }
 
`

export const Paginations = styled.div`
    grid-column:1 / -1;
    width:100%;
    text-align:end;

    ${({ isFilter }) => isFilter && css`
        display:none;
    `}  

`

export const ButtonsNextAndBack = styled(Buttons)`
    margin:32px 0  0 32px;

    ${({ countBack }) => {
        const value = countBack && countBack.match(/page=2$/)
        console.log(value)
        if (value) {
            return css`
               background-color:#bdbcbcb7;
               pointer-events: none;
            `
        }
    }}
`

export const ButtonHome = styled(Buttons)`
 
    position:relative;
    width:60px;
    top:4px;
    color:var( --bg-color-neutro-light);
`

export const HomeIcon = styled(IoHomeSharp)`
    padding-top:2px;
    width:20px;
    height:20px;
`
