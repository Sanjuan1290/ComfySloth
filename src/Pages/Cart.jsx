
import { useOutletContext } from 'react-router-dom'
import HeaderNav from '../components/HeaderNav'
import { useEffect, useState } from 'react'

export default function Cart(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 650 )

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

            </section>
        
        </>
    )
}