import styled from 'styled-components'

export const Search  = styled.div`
    width: 40vw ;
    margin-right: 40px;
`

export const InputSearch  = styled.input`
    margin: 5px 0px;
    border-radius: 10px;
    padding: 7px;
    outline: none;
    border: none;
    background-color: rgb(218,218,218);
    width: 100%;
`

export const Categories  = styled.div`
    height: 33%;
    background-color: var(--lightGreen);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
`

export const Category  = styled.div`
    width: 150px;
    height: 30px;
    background-color: var(--mainGreen);
    border-radius: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 40px;
    color: white;
`

export const Brand=styled.div`
    margin: 0 50px;
    font-size: 1.5em;
    font-weight: bold;
`
  
  
export const MenuContainer=styled.div`
    width: 100vw;
    height: 130px;
    display: flex;
    flex-direction: column;
  `
    
  
export const Searchbar=styled.div`
    height: 67%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--mainGreen);
`