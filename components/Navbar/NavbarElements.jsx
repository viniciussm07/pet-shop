import Link from "next/link"

import {Button} from '../style.jsx'
import { InputSearch, Categories, Category, Search, MenuContainer, Searchbar,Brand } from "./style.jsx"


export const NavbarContainer = () => {
    return (
        <>
        <MenuContainer>
            <Searchbar>
                <Brand>
                    <Link href = '/'>PetShop</Link>
                </Brand>
                <Search>
                <form>
                    <InputSearch type="search" placeholder="Buscar Produto" aria-label="Search"/>
                </form>
                </Search>
                <div >
                <Link href='/login'>
                    <Button>
                        <div id='loginTxt'>Entre ou cadastre-se!</div>
                    </Button>
                </Link>
                </div>
                <div >
                <Link href='/carrinho'>
                    <Button>
                        <div id='loginTxt'>Carrinho</div>
                    </Button>
                </Link>
                </div>
                

            </Searchbar>
            <Categories>
                <Link href="/products/cachorro">
                    <Category>Cachorro </Category>
                </Link>
                <Link href="/products/gato">
                    <Category>Gato </Category>
                </Link>
                <Link href="/products/passaro">
                    <Category>Pássaro </Category>
                </Link>
            </Categories>
        </MenuContainer>
    </>
    )
}
<<<<<<< HEAD
=======

>>>>>>> 0bcc9cc4ab0b107659e9dc2db7edd98d76d0cb48

