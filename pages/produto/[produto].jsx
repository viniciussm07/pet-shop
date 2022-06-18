import Navbar from '../../components/Navbar'
import ProdutoLayout from '../../components/ProdutoLayout'
import {useRouter} from 'next/router'

export default function produto(){
    return(
        <>
            <Navbar/>
            <ProdutoLayout/>
        </>
    )
}