
import { NavLink, useLoaderData, defer } from "react-router-dom"
import HeaderNav from "../components/HeaderNav"

import FilteredSection from '../components/ProductsComponents/FilteredSection'
import SortByPriceSection from '../components/ProductsComponents/SortByPriceSection'
import ProductsContainer from '../components/ProductsComponents/ProductsContainer'
import { useState } from "react"

export async function loader(){
    const res = await fetch('https://comfysloth-server.onrender.com/api/v1/products')
    return defer({products: res.json()})
}

export default function Products(){


    const { products } = useLoaderData()
    const [category, setCategory] = useState('All')
    const [search, setSearch] = useState('')
    const [company, setCompany] = useState('All')
    const [color, setColor] = useState('All')
    const [priceRange, setPriceRange] = useState(3099.99)
    const [shipping, setShipping] = useState(false)

    const [productNumberFound, setProductNumberFound] = useState(null)

    const [sortBy, setSortBy] = useState('price-asc')

    const [displayType, setDisplayType] = useState('gridDisplay') //gridDisplay or flexColumnDisplay

    return(
        <>
            <HeaderNav navLocation={'Products'}/>


            <main className="products_section">
                    <FilteredSection 
                        category={category} setCategory={setCategory} 
                        setSearch={setSearch}
                        company={company} setCompany={setCompany}
                        color={color} setColor={setColor}
                        priceRange={priceRange} setPriceRange={setPriceRange}
                        shipping={shipping} setShipping={setShipping}/>

                    <section>
                        <SortByPriceSection
                            productNumberFound={productNumberFound} 
                            setSortBy={setSortBy}
                            setDisplayType={setDisplayType}/>                        
                        <ProductsContainer 
                            products={products} 
                            category={category}
                            search={search}
                            company={company}
                            color={color}
                            priceRange={priceRange}
                            shipping={shipping}
                            setProductNumberFound={setProductNumberFound}
                            sortBy={sortBy}
                            displayType={displayType}/>
                    </section>
            </main>

        </>
    )
}