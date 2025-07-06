
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

    useEffect(()=>{
        const result_IsLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
        setIsLoggedIn(result_IsLoggedIn)

        const result_userId = JSON.parse(localStorage.getItem('userId'))
        setUserId(result_userId)
    }, [])

    useEffect(()=>{
        localStorage.setItem('isLoggedIn', isLoggedIn)
    }, [isLoggedIn])

    useEffect(() => {
        if(userId === null) 
            
        localStorage.setItem('userId', userId)
    }, [userId])


    useEffect(()=>{// get cart values
        if(isLoggedIn){
            fetch('https://comfysloth-server.onrender.com/api/v1/userAccounts/getCart',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userId})
            })
            .then(response => response.json())
            .then(data => setCartItems(data))
            .catch(err => {console.log(err);})

        }else setCartItems(getCart()) // cart if not LoggedIn
    }, [isLoggedIn])

    useEffect(()=>{ // save cart
        if(isLoggedIn){
            fetch('https://comfysloth-server.onrender.com/api/v1/userAccounts/saveCart',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userId, cartItems})
            })
            .then(response => response.json())
            .then(result => {console.log(result);})
            .catch(err => {console.log(err);})

        }else saveCart(cartItems) // cart if not LoggedIn
    }, [cartItems, isLoggedIn])

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