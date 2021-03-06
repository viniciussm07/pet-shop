import styled from "styled-components";
import Image from "next/image";
import { Button } from "../Utils/style";

export const Title = styled.h2`
  margin: ${(props) => (props.margin ? props.margin : "0 0 3rem 3rem")};
`;

export const Title2 = styled.p`
  /* text-align: center; */
  margin: 0 0 0.25rem 0;
  padding: 0;
  font-weight: bold;
  /* display: flex; */
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
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  /* min-height: 400px; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${(props) => (props.margin ? props.margin : "1rem 1rem")};
  width: ${(props) => (props.width ? props.width : "80%")};
  align-items: center;
  height: ${(props) => (props.height ? props.height : "10rem")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : "0 0 0 0")};
  border-radius: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "100%")};
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
  padding-bottom: 20px;
`;

export const WrapColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapFixedButton = styled.div`
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

export const WrapButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
`;

export const EditButton = styled(Button)`
  margin: ${(props) => (props.margin ? props.margin : "0 0 0 0")};
  align-self: ${(props) => (props.align ? props.align : "center")};
`;

export const Trash = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  align-items: flex-end;
  cursor: pointer;
  padding-right: 30px;
`;

export const ImgWrap = styled.div`
  width: ${(props) => (props.width ? props.width : "25%")};
  margin-right: 1rem;
  display: flex;
  padding-left: 30px;
`;

export const Img = styled(Image)`
  height: 100px;
  width: 100px;
`;
