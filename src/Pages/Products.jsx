
import { NavLink } from "react-router-dom"
import HeaderNav from "../components/HeaderNav"

import FilteredSection from '../components/ProductsComponents/FilteredSection'
import SortByPriceSection from '../components/ProductsComponents/SortByPriceSection'
import ProductsContainer from '../components/ProductsComponents/ProductsContainer'

export default function Products(){

    return(
        <>
            <HeaderNav navLocation={'Products'}/>


            <main className="products_section">
                    <FilteredSection />

                    <section>
                        <SortByPriceSection />                        
                        <ProductsContainer />
                    </section>
            </main>

        </>
    )
}