import Navbar from '../../components/Navbar'
import Layout from '../../components/Produto/ProdutoLayout'
import {useRouter} from 'next/router'
import Footer from '../../components/Footer'

export default function produto(){
    return(
        <>
            <Navbar/>
            <Layout/>
            <Footer/>
        </>
    )
}