import Navbar from '../../components/Navbar'
import Layout from '../../components/Produto/ProdutoLayout'
import {useRouter} from 'next/router'

export default function produto(){
    return(
        <>
            <Navbar/>
            <Layout/>
        </>
    )
}