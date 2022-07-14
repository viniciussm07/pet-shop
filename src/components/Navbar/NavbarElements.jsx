import styled from "styled-components";

export const Nav = styled.nav`
  color: white;
  min-width: 560px;
`;

export const NavbarContainer1 = styled.div`
  background-color: #18a999;
  width: 100%;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NavbarContainer2 = styled(NavbarContainer1)`
  background-color: #b6decf;
  height: 70px;
  padding: 1rem;
`;
export const NavLogoWrap = styled.a`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: black;
  text-decoration: none;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const Logo = styled.span`
  margin-left: 0.75rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const Search = styled.form`
  width: 30rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: gray;
  content: "Search";
`;

export const InputWrap = styled.div`
  display: flex;
`;

export const Input = styled.input`
    display: block;
    padding: 0.8rem 1rem 0.8rem 1rem;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: black;
    border-radius: 0.5rem;
    border: 1px solid rgb(209 213 219);

  ::placeholder {
    color: #b8b0b0;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px black;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1.5rem;
  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MenuButton = styled.a`
  margin-right: 1.25rem;
  background-color: #18a999;
  border-radius: 0.25rem;
  padding: 0.25rem 2rem 0.25rem 2rem;
  text-decoration: none;
  color: white;
  cursor: pointer;

  @media (min-width: 880px) {
    margin: 0 4rem;
    padding: 0.25rem 3rem;
  }

  &:hover {
    box-shadow: 0px 0px 5px black;
  }
`;

const NavButton = styled.a`
  border-radius: 0.5rem;
  border-width: 0px;
  background-color: #ffa10a;
  color: white;
  padding: 0.8rem 1rem 0.8rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 5px black;
  }
`;

export const LoginButton = styled(NavButton)`
     display: flex;
`

export const CartButton = styled(NavButton)`
    display: flex;
    margin: 0 20px;
    background-color: transparent;
`

export const MyAccountButton = styled(NavButton)`
    display: flex;
    margin: 0 20px;
`

export const WrapButtons = styled.div`
  display: flex;
  flex-direction: row;
`;
