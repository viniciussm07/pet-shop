import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 6rem 1.25rem;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  flex-wrap: wrap;
  width: 100%;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px;
  flex-wrap: wrap;
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
`;
