import styled from 'styled-components';



export const Buttons = styled.button`

width:100px;
height:30px;
border-radius: 5px;
font-size: 0.75rem;
color:var(--bg-color-neutro-light);
background-color:var( --bg-color-primary);
font-weight:600;
cursor:pointer;
transition: all .3s;

&:hover{
    box-shadow: 0 0 10px  var(--bg-color-complement);
}
`