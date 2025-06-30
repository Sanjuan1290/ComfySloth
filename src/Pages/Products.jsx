
import { NavLink } from "react-router-dom"
import HeaderNav from "../components/HeaderNav"

import FilteredSection from '../components/ProductsComponents/FilteredSection'

export default function Products(){

    return(
        <>
            <HeaderNav navLocation={'Products'}/>

            <section className="products_Section">

                <main className="store-container">
                        <FilteredSection />

                </main>

            </section>
        </>
    )
}