
import { Await } from "react-router-dom"
import { Suspense } from "react"

import { formatPrice } from '../../util/formatPrice'

export default function ProductsContainer({ products }){

    return(
        <section className="productsDisplay_Section">

            <Suspense fallback={<h1>Products Loading...</h1>}>
                <Await resolve={products}>

                    {
                        (data) => {
                            console.log(data);
                            return data.map(product => (
                                <div key={product._id} className="product-container">
                                    <img src={`https://comfysloth-server.onrender.com/${product.images[0]}`} alt={product.name} />

                                    <div>
                                        <p>{product.name}</p>
                                        <p>{(formatPrice(product.priceCents))}</p>
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