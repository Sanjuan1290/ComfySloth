
import { NavLink } from "react-router-dom"
import HeaderNav from "../components/HeaderNav"

import FilteredSection from '../components/ProductsComponents/FilteredSection'

export default function Products(){

    return(
        <>
            <HeaderNav navLocation={'Products'}/>


            <main className="products_section">
                    <FilteredSection />

            </main>

        </>
    )
}