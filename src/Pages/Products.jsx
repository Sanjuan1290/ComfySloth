
import { NavLink } from "react-router-dom"
import HeaderNav from "../components/HeaderNav"

import FilteredSection from '../components/AboutComponents/FilteredSection'

export default function Products(){

    return(
        <section className="products_Section">
            <HeaderNav navLocation={'Products'}/>

            <main className="store-container">
                    <FilteredSection />

            </main>

        </section>
    )
}