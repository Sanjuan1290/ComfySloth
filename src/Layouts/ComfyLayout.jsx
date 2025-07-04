
import { Outlet } from "react-router-dom"
import Header from '../components/Header'
import Footer from "../components/Footer"
import { useState } from "react"

export default function Layout(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 990)


    return(
        <>
            <Header isMobile={isMobile} setIsMobile={setIsMobile}/>
            <Outlet context={{isMobile, setIsMobile}}/>
            <Footer />
        </>
    )
}