import deleteIcon from '../assets/delete.png'
import HeaderNav from '../components/HeaderNav'
import { useEffect, useState, useMemo, use } from 'react'
import { getCart } from '../util/cart'
import formatPrice from '../util/formatPrice'
import { NavLink } from 'react-router-dom'


export default function Cart(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 650)
    const [cartItems, setCartItems] = useState([])

    const subTotal = cartItems.reduce((total, item) => total + item.priceCents * item.quantity, 0)
    const shippingFeeCents = 534
    const orderTotal = subTotal + shippingFeeCents



    useEffect(()=>{
        const handleEvent = () => {
            setIsMobile(window.innerWidth <= 650)
        }

        window.addEventListener('resize', handleEvent)

        return () => window.removeEventListener('resize', handleEvent)
    }, [isMobile])

    useEffect(()=>{
        setCartItems(getCart())
    }, [])

    useEffect(()=>{
        localStorage.setItem('comfySloth_Cart', JSON.stringify(cartItems))
    }, [cartItems])

    function incrementQuantity(index) {
        const newCart = [...cartItems];
        newCart[index].quantity += 1;
        setCartItems(newCart);
    }

    function decrementQuantity(index) {
        const newCart = [...cartItems];
        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1;
            setCartItems(newCart);
        }
    }


    return(

        <>
            <HeaderNav navLocation={`cart`}/>
            <section className="cart_Section">
                {
                    isMobile ? '' : <div className="cart-column-labels">
                        <p>Item</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                }

                {

                    cartItems && cartItems.map((item, index) => {
                        return <div key={index} className='cart-items-container'>
                            <div className="item-container">
                                
                                <div className='item'>
                                    <img src={item.image} alt={item.name} />

                                    <div>
                                        <p>{item.name}</p>
                                        <p>Color : <span className={`color ${item.color}`}></span></p>
                                    </div>
                                </div>

                                <p className="price">{formatPrice(item.priceCents)}</p>
                                
                                <div className="quantity">
                                    <button onClick={()=>{decrementQuantity(index)}}>—</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={()=>{incrementQuantity(index)}}>+</button>
                                </div>

                                <p className="subtotal">{formatPrice(item.priceCents * item.quantity)}</p>

                                <button className='deleteBtn'><img src={deleteIcon} alt="delete btn" /></button>
                            </div>

                        </div>
                    })
                }

                <div className="line"></div>

                <div className="CartActions">
                    <NavLink to='/products' className={'backToProducts'}>Continue Shopping</NavLink>
                    <button className='clearCartBtn' onClick={()=>{setCartItems([])}}>Clear Shopping Cart</button>
                </div>

                <div className="cartSummary_Section">

                    <div>
                        <div className='price-label'>
                            <p>Subtotal :</p>
                            <p>Shipping Fee : </p>
                            <p>Order Total : </p>
                        </div>

                        <div className='price-value'>
                            <p>{formatPrice(subTotal)}</p>
                            <p>{formatPrice(shippingFeeCents)}</p>
                            <p>{formatPrice(orderTotal)}</p>
                        </div>


                        <div className='line'></div>
                    </div>
                   
                    <NavLink to='/login' className='loginBtn'>LOGIN</NavLink>

                </div>

            </section>
        
        </>
    )
}