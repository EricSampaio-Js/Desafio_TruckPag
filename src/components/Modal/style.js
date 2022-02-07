import styled from 'styled-components';
import { Buttons } from '../Buttons/style'
import { RiCloseCircleFill } from 'react-icons/ri'

export const Wrapper = styled.div`
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background:rgba(19 20, 25, 0.568);   
`

export const Container = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:900px;
    height:546px; 
    
    border-radius: 3.333333333%;
    background-color:var( --bg-color-neutro-dark-complement);

`

export const Content = styled.div`
    display:flex;
    width:91%;

    >img{
        width:205px;
        height:355px;
        object-fit:cover;
        border-radius:7px;
        filter: drop-shadow(0px 10px 20px #000000);
    }
`

export const Title = styled.div`
    position:relative;
    bottom:48px;
    font-size:32px;
    font-weight:600;
    color:var(--bg-color-neutro-light);

`
export const DataInfor = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    row-gap: 25px;

    width:100%;
    height:355px;
    overflow-y:scroll;
    margin-left:50px;

    color:var(--bg-color-neutro-light);

    ::-webkit-scrollbar {
        width:15px;
    }
    ::-webkit-scrollbar-track {
        background:var( --bg-color-neutro-dark);
        border-radius:10px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--bg-color-primary);
        border-radius:10px;
        border:3px solid var( --bg-color-neutro-dark) ;
    }

`

export const SubTitle = styled.h2`
    font-size:1.25rem;
    margin-bottom:5px;
`

export const Text = styled.ul`
   >li{
    font-size:13px;
    font-weight:500;
   }
`

export const Button = styled(Buttons)`
    position:absolute;
    right:0;
    bottom:0;
    margin-right:56px;
    margin-bottom:25px;
`

export const CloserIcon = styled(RiCloseCircleFill)`

    transform:scale(3);
    position:absolute;
    top:0;
    right:0;
    cursor:pointer;
    margin-right:30px;
    margin-top:30px;
    path{
        color:var(--bg-color-primary);
      
    };


` 