import styled from 'styled-components';



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