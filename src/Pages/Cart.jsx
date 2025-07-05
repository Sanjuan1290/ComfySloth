import deleteIcon from '../assets/delete.png'
import HeaderNav from '../components/HeaderNav'
import { useEffect, useState } from 'react'
import { getCart } from '../util/cart'
import formatPrice from '../util/formatPrice'


export default function Cart(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 650 )
    const [quantity, setQuantity] = useState(0)

    useEffect(()=>{
        const handleEvent = () => {
            setIsMobile(window.innerWidth <= 650)
        }

        window.addEventListener('resize', handleEvent)

        return () => window.removeEventListener('resize', handleEvent)
    }, [isMobile])

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
                    getCart().map((item, index) => {
                        console.log(item);
                        return <div key={index} className='cart-items-container'>
                            <div className="item-container">
                                
                                <div className='item'>
                                    <img src={item.image} alt={item.name} />

                                    <div>
                                        <p>{item.name}</p>
                                        <p>Color : <span className={`color ${item.color}`}></span></p>
                                    </div>
                                </div>

                                <p className="price">{formatPrice(item.price)}</p>
                                
                                <div className="quantity">
                                    <button onClick={() => {setQuantity(prev => prev <= 1 ? prev : prev - 1)}}>—</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => {setQuantity(prev => prev + 1)}}>+</button>
                                </div>

                                <p className="subtotal">{formatPrice(item.price * item.quantity)}</p>

                                <button className='deleteBtn'><img src={deleteIcon} alt="delete btn" /></button>
                            </div>

                        </div>
                    })
                }

            </section>
        
        </>
    )
}