import styled from "styled-components";
import Image from "next/image";
import { Button } from "../Utils/style";

export const Title = styled.h2`
  margin-left: 4rem;
  margin-bottom: 3rem;
`;

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
  width: ${(props) => (props.width ? props.width : "80%")};
  align-items: center;
  height: ${(props) => (props.height ? props.height : "6rem")};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
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
  margin: 0;
`;

export const Trash = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  align-items: flex-end;
  cursor: pointer;
`;

export const ImgWrap = styled.div`
  width: 30%;
  padding-right: 1rem;
`;

export const Img = styled(Image)`
  height: 200px;
  width: 100px;
`;
