
import { Await, NavLink } from "react-router-dom"
import { Suspense, useEffect, useMemo } from "react"

import formatPrice from '../../util/formatPrice'
import sortAsc_Desc from '../../util/sortAsc_Desc'

import searchIcon from '../../assets/searchIcon.png'

export default function ProductsContainer(
    { 
        products, 
        category, 
        search, 
        company, 
        color, 
        priceRange, 
        shipping,
        setProductNumberFound,
        sortBy,
        displayType,
    }
){

    const gridDisplay = (products) => {
        return products.map(product => (
            <div key={product._id} className="gridDisplay-product-container">
                <img src={`https://comfysloth-server.onrender.com/${product.images[0]}`} alt={product.name} />

                <div>
                    <p>{product.name}</p>
                    <p>{(formatPrice(product.priceCents))}</p>
                </div>

                <div>
                    <NavLink to={product.SKU}><img src={searchIcon} alt="search icon" /></NavLink>
                </div>
            </div>        
        ))        
    }

    const flexColumnDisplay = (products) => {
        return products.map(product => (
            <div key={product._id} className="flexColumn-product-container">
                <img src={`https://comfysloth-server.onrender.com/${product.images[0]}`} alt={product.name} />

                <div>
                    <h3>{product.name}</h3>
                    <p>{(formatPrice(product.priceCents))}</p>

                    <p>{product.details.slice(0, 150)}{product.details.length > 150 && '...'}</p>

                    
                    <NavLink to={product.SKU}>DETAILS</NavLink>
                </div>
            </div>
        ))
    }

    return(
        <section className={`productsDisplay_Section-${displayType}`}>

            <Suspense fallback={<h1>Products Loading...</h1>}>
                <Await resolve={products}>

                    {
                        (data) => {
                            console.log(data);
                            const filteredProducts = useMemo(()=> {
                                return  data.filter(product => {
                                    const nameMatch = product.name.toLowerCase().includes(search);
                                    const categoryMatch = category === 'All' || product.category === category;
                                    const companyMatch = company === 'All' || company === product.brand;
                                    const colorMatch = color === 'All' || product.colors.includes(color)
                                    const priceRangeMatch = (product.priceCents / 100) <= priceRange
                                    const shippingMatch = shipping === false || product.freeShipping === true

                                    return(
                                        nameMatch &&    
                                        categoryMatch && 
                                        companyMatch && 
                                        colorMatch && 
                                        priceRangeMatch &&
                                        shippingMatch 
                                    )
                                })
                            }, [data, category, search, company, color, priceRange, shipping])

                            useEffect(()=>{
                                setProductNumberFound(filteredProducts.length)
                            }, [filteredProducts])

                            const sortedProducts = sortAsc_Desc(filteredProducts, sortBy)

                            if(displayType === 'gridDisplay') return gridDisplay(sortedProducts)
                            else if(displayType === 'flexColumnDisplay') return flexColumnDisplay(sortedProducts)
                            else return null
                        } 
                    }
                </Await>
            </Suspense>
        </section>
    )
}