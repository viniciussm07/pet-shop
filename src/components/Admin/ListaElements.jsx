import styled from "styled-components";
import { Container } from "../Utils";
import { Button } from "../Utils/style";

export const Title = styled.h2`
    
    font-weight: bold;
`

export const ListaContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 1rem;
`;

export const ListaWrap = styled.div`
  background-color: white;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  padding-top: 1rem;
  min-height: 500px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 1rem;
  width: 70%;
  align-items: center;
  height: ${(props) => (props.height ? props.height : "6rem")};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${(props) => (props.align ? props.align : "center")};
`;

export const WrapColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapButton = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 1rem;
`;

export const FixedButton = styled(Button)`
  border-radius: 50%;
  display: flex;
  align-items: center;
  height: 45px;
  width: 45px;
`;

export const EditButton = styled(Button)`
    align-self: flex-end;
    margin: 0;
`
