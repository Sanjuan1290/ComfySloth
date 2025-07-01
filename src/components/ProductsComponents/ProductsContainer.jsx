
import { Await, NavLink } from "react-router-dom"
import { Suspense } from "react"

import { formatPrice } from '../../util/formatPrice'
import searchIcon from '../../assets/searchIcon.png'

export default function ProductsContainer({ products, category }){

    return(
        <section className="productsDisplay_Section">

            <Suspense fallback={<h1>Products Loading...</h1>}>
                <Await resolve={products}>

                    {
                        (data) => {
                            console.log(data);
                            return data.map(product => (
                                (category == 'All' || product.category === category) &&
                                    <div key={product._id} className="product-container">
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
                    }
                </Await>
            </Suspense>
        </section>
    )
}