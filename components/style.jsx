import styled from 'styled-components'

export const Button = styled.button`

    color: white;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    background-color:rgb(255,161,10);
    align-self:flex-start;
    white-space: normal;
    overflow-wrap: break-word;
    margin: 0 20px;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 0px 5px black;
    }
`

export const ButtonInverted = styled.button`
    color: rgb(255,161,10);
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    background-color:white;
    align-self:flex-start;
    white-space: normal;
    overflow-wrap: break-word;
    margin: 0 20px;
    border: solid 1px rgb(255,161,10);
    cursor: pointer;
`


export const InfoContainer = styled.div`
    background-color:white;
    margin:10px 30px 40px 0;
    border-radius: 10px;
    padding: 25px;
 
`

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    font-weight:bold;
    font-size: 1.2rem;
    padding-right: 10px;

`

export const OrderContainer = styled.div`
    background-color: rgb(182,222,207);
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin:20px 0;
    border-radius: 10px;


`

export const OrderTable = styled.table`
    border-collapse: separate; 
    border-spacing: 25px 0;
`


export const Input = styled.input`
    margin: 5px 0px;
    border-radius: 10px;
    padding: 7px;
    outline: none;
    border: none;
    background-color: rgb(182,222,207);
    width: 100%;
`

export const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 20px;
`

export const FontBold = styled.span`
    font-weight: bold;

`

export const ContainerColumn =styled.div`
    display:flex;
    flex-direction:column;

`

export const ContainerRow =styled.div`
    display:flex;
    flex-direction:row;

`

