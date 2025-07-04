
import { Outlet } from "react-router-dom"
import Header from '../components/Header'
import Footer from "../components/Footer"
import { useState } from "react"

import { getCartQuantity } from "../util/cart"

export default function Layout(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 990)
    const [cartQuantity, setCartQuantity] = useState(getCartQuantity)


    return(
        <>
            <Header isMobile={isMobile} setIsMobile={setIsMobile} cartQuantity={cartQuantity}/>
            <Outlet context={{isMobile, setIsMobile, setCartQuantity }}/>
            <Footer />
        </>
    )
}