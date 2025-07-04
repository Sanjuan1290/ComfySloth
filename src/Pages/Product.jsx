import { defer, useLoaderData } from "react-router-dom"
import formatPrice from '../util/formatPrice'
import HeaderNav from "../components/HeaderNav"

async function loader(){
    const res = await fetch('https://comfysloth-server.onrender.com/api/v1/products')
    
    return defer({product: res.json()})
}

export default function Product(){

    const { product } = useLoaderData()

    return(
        <>
            <HeaderNav navLocation={'Modern Poster'}/>
        
            <section className="product_section">

                <button className="backToProductsBtn">BACK TO PRODUCTS</button>

                <Suspense fallback={<h3>Product is loading...</h3>}>
                    <Await resolve={product}>
                        {
                            (data) => (
                                <div>
                                    <div className="img-container">
                                        <img src={data.images[0]} alt="image 1" />

                                        <div className="flex-row">
                                            {
                                                data.images.map((image, index) => (
                                                    <img src={image} alt={`image ${index + 1}`} />
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <div className="details-container">

                                        <h1>{data.name}</h1>
                                        
                                        <span><img src={`/ratings/rating-${data.reviews.rating * 10}.png`} alt="rating" /> ({data.reviews.totalReviews} custormer revies)</span>

                                        <p className="price">{formatPrice(data.priceCents)}</p>

                                        <p>{data.details}</p>

                                        <div>
                                            <div>
                                                <p>Available :</p>
                                                <p>SKU :</p>
                                                <p>Brand :</p>
                                            </div>

                                            <div>
                                                <p>{data.isAvailable ? 'On Stock' : 'Out Of Stock'}</p>
                                                <p>{data.SKU}</p>
                                                <p>{data.brand}</p>
                                            </div>
                                        </div>

                                        <div className="line"></div>

                                        <div className="colors-container">
                                            <p>Colors: </p>

                                            <div className="colors">
                                                {
                                                    data.colors.map(color => (
                                                        <div className={`${color} active`}></div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                                
                                        {
                                            data.isAvailable && <>
                                                <div className="quantity-container">
                                                    <button>-</button>
                                                    <p>1</p>
                                                    <button>+</button>
                                                </div>

                                                <button className="addToCartBtn">ADD TO CART</button>
                                        </>
                                        }
                                    </div>

                                </div>
                            )
                        }
                    </Await>
                </Suspense>
            </section>
        </>
    )
}