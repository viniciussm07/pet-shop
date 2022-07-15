import styled from "styled-components";

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
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-color: rgb(255, 161, 10);
  align-self: flex-start;
  white-space: normal;
  overflow-wrap: break-word;
  margin: 0 20px;
  cursor: pointer;

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
        box-shadow: 0px 0px 5px grey;
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

    &:hover{
        box-shadow: 0px 0px 5px grey;
    }
`


export const InfoContainer = styled.div`
  background-color: white;
  margin: 10px 30px 40px 0;
  border-radius: 10px;
  padding: 25px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 1.2rem;
  padding-right: 10px;
`;

export const OrderContainer = styled.div`
  background-color: rgb(182, 222, 207);
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
`;

export const OrderTable = styled.table`
  border-collapse: separate;
  border-spacing: 15px 0px;
`;

export const OrderTableMaior = styled.table`
  border-collapse: separate;
  border-spacing: 50px 0px;
`;

export const Input = styled.input`
  margin: 5px 0px;
  border-radius: 10px;
  padding: 7px;
  outline: none;
  border: none;
  background-color: rgb(182, 222, 207);
  width: 100%;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const H5 = styled.h5`
    font-weight: bold;
`

export const FontBold = styled.span`
  font-weight: bold;
`

export const Errors = styled.div`
    color: red;
    padding: 7px 0;
    font-size: 12px;

`
