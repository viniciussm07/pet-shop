import styled from "styled-components";
import { FontBold } from "../Utils/style";

const Button = styled.button`
  color: white;
  display: inline-block;
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
`;
const Input = styled.input`
  margin: 5px 0px;
  border-radius: 10px;
  padding: 7px;
  outline: none;
  border: none;
  background-color: rgb(182, 222, 207);
  width: 100%;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;
