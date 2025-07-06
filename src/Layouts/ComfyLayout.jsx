
import { Outlet } from "react-router-dom"
import Header from '../components/Header'
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
import { saveCart } from '../util/cart'

import { getCart } from "../util/cart"

export default function Layout(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 990)
    const [cartItems, setCartItems] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
        const result = JSON.parse(localStorage.getItem('isLoggedIn'))
        setIsLoggedIn(result)
    }, [])

    useEffect(()=>{
        localStorage.setItem('isLoggedIn', isLoggedIn)
    }, [isLoggedIn])


    useEffect(()=>{// get cart values
        if(isLoggedIn){

        }else setCartItems(getCart())
    }, [])

    useEffect(()=>{ // save cart
        if(isLoggedIn){

        }else saveCart(cartItems)
    }, [cartItems])

    console.log(isLoggedIn);

    return(
        <>
            <Header isMobile={isMobile} 
                setIsMobile={setIsMobile} 
                cartItems={cartItems} 
                isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

            <Outlet context={{
                isMobile, 
                setIsMobile,
                cartItems, setCartItems,
                isLoggedIn, setIsLoggedIn }}/>
            <Footer />
        </>
    )
}