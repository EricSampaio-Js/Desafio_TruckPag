import styled from 'styled-components'

import { RiSearchLine } from 'react-icons/ri'
import { Buttons } from '../../Buttons/style'


export const Form = styled.form`
    display: flex;
    justify-content: center;
    height:40px;

    margin-top:280px;

    &>div{
        width:78.5505%;
        position:relative;
        border-radius: 4px;
    }

    &>div>label>input{
        width:100%;
        height:40px;
        border-radius: 4px;
       
        
        font-size:1.125rem;
        padding-left:75px;

        &:focus{
            border:2px solid var(--bg-color-complement);
          
            box-shadow: 0px 0px 10px var(--bg-color-complement);
        }
      
    }

`
export const SearchIcon = styled(RiSearchLine)`
    position:absolute;
    align-items: center;   top:0;
    width:29px;
    height:27px;
    left:0;
    box-sizing: unset;
    padding: 6px 0 0px 24px;

`

export const ButtonFilter = styled(Buttons)`
    margin:15px 0 0 138px; ;
    width:120px;
    height:30px;
`