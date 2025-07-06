
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
    const [userId, setUserId] = useState(null)
    const [cartInitialized, setCartInitialized] = useState(false)


    useEffect(() => {
        const rawLoggedIn = localStorage.getItem('isLoggedIn')
        const rawUserId = localStorage.getItem('userId')

        const result_IsLoggedIn = rawLoggedIn ? JSON.parse(rawLoggedIn) : false
        const result_userId = rawUserId ? JSON.parse(rawUserId) : null

        setIsLoggedIn(result_IsLoggedIn)
        setUserId(result_userId)

        // Delay until both are ready
        setCartInitialized(true)
    }, [])



    useEffect(()=>{
        localStorage.setItem('isLoggedIn', isLoggedIn)
    }, [isLoggedIn])

    useEffect(() => {
        if (userId !== null) {
            localStorage.setItem('userId', JSON.stringify(userId))
        }
    }, [userId])



    useEffect(() => {
        if (!cartInitialized) return

        if (isLoggedIn && userId) {
            fetch('https://comfysloth-server.onrender.com/api/v1/userAccounts/getCart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success && Array.isArray(data.cart)) {
                        setCartItems(data.cart)
                    }
                })
                .catch(err => console.log(err))
        } else {
            setCartItems(getCart()) // guest cart
        }
    }, [cartInitialized, isLoggedIn, userId])


    useEffect(() => {
        if (!cartInitialized) return

        if (isLoggedIn && userId) {
            fetch('https://comfysloth-server.onrender.com/api/v1/userAccounts/saveCart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, cartItems })
            })
                .then(res => res.json())
                .then(result => console.log(result))
                .catch(err => console.log(err))
        } else {
            saveCart(cartItems)
        }
    }, [cartItems, isLoggedIn, userId, cartInitialized])


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
                isLoggedIn, setIsLoggedIn,
                setUserId }}/>
            <Footer />
        </>
    )
}