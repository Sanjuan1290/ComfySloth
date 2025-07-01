
import { NavLink, useLoaderData, defer } from "react-router-dom"
import HeaderNav from "../components/HeaderNav"

import FilteredSection from '../components/ProductsComponents/FilteredSection'
import SortByPriceSection from '../components/ProductsComponents/SortByPriceSection'
import ProductsContainer from '../components/ProductsComponents/ProductsContainer'

export async function loader(){

    const res = await fetch('https://comfysloth-server.onrender.com/api/v1/products')
    const data = await res.json()

    return defer({products: data})
}

export default function Products(){

    const { products } = useLoaderData()

    return(
        <>
            <HeaderNav navLocation={'Products'}/>


            <main className="products_section">
                    <FilteredSection />

                    <section>
                        <SortByPriceSection />                        
                        <ProductsContainer products={products}/>
                    </section>
            </main>

        </>
    )
}