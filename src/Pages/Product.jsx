import { defer, useLoaderData, Await, NavLink } from "react-router-dom"
import { Suspense } from "react"
import formatPrice from '../util/formatPrice'
import HeaderNav from "../components/HeaderNav"

export async function loader({params}){
    const res = await fetch(`https://comfysloth-server.onrender.com/api/v1/products/${params.id}`)
    return defer({product: res.json()})
}

export default function Product(){

    const { product } = useLoaderData()

    return(
        <>
        

                <Suspense fallback={<h1>Product is loading...</h1>}>
                    <Await resolve={product}>
                        {
                            (data) => (
                                <>
                                <HeaderNav navLocation={`Products`} subLocation={data.name}/>
                                <section className="product_section">

                                    <NavLink to='/products' className="backToProductsBtn">BACK TO PRODUCTS</NavLink>

                                    <div>
                                        <div className="img-container">
                                            <img src={`https://comfysloth-server.onrender.com/${data.images[0]}`} alt="image 1" />

                                            <div className="flex-row">
                                                {
                                                    data.images.map((image, index) => (
                                                        <img key={index} src={`https://comfysloth-server.onrender.com/${image}`} alt={`image ${index + 1}`} />
                                                    ))
                                                }
                                            </div>
                                        </div>

                                        <div className="details-container">

                                            <h1>{data.name}</h1>
                                            
                                            <span><img src={`/ratings/rating-${data.reviews.rating * 10}.png`} alt="rating" /> ({data.reviews.totalReviews} custormer revies)</span>

                                            <p className="price">{formatPrice(data.priceCents)}</p>

                                            <p className="details">{data.details}</p>

                                            <div className="sub-details">
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

                                                    
                                            {
                                                data.isAvailable && <>
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
                                </section>
                                </>
                            )
                        }
                            
                    </Await>
                </Suspense>
        </>
    )
}