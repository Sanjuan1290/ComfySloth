
import { Outlet } from "react-router-dom"
import Header from '../components/Header'
import Footer from "../components/Footer"
import { useState, useEffect } from "react"

import { getCart } from "../util/cart"

export default function Layout(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 990)
    const [cartItems, setCartItems] = useState([])

    useEffect(()=>{
        setCartItems(getCart())
    }, [])

    useEffect(()=>{
        localStorage.setItem('comfySloth_Cart', JSON.stringify(cartItems))
    }, [cartItems])

    return(
        <>
            <Header isMobile={isMobile} setIsMobile={setIsMobile} cartItems={cartItems}/>
            <Outlet context={{
                isMobile, 
                setIsMobile,
                cartItems, setCartItems }}/>
            <Footer />
        </>
    )
}