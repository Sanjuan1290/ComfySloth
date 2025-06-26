
import cartIcon from '../assets/cartIcon.png'
import loginIcon from '../assets/loginIcon.png'
import burgerMenu from '../assets/burgerMenu.ico'
import crossIcon from '../assets/crossIcon.png'

import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 990)
    const navRef = useRef()

    useEffect(()=>{
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 990)
        }
        
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])


    function showSideNav(){
        navRef.current.className = 'sideNav showSideNav'
    }
    function closeSideNav(){
        navRef.current.className = 'sideNav'
    }

    const windowNav = (
        <> 
            <ul>
                <li><NavLink to=''>Home</NavLink></li>
                <li><NavLink to=''>About</NavLink></li>
                <li><NavLink to=''>Products</NavLink></li>
            </ul>

            <section className="right_section">
                <button className="cart-btn">
                    <p>Cart</p>

                    <div>
                        <img src={cartIcon} alt="cart icon" />
                        <p className='totalQuantity'>0</p>
                    </div>
                </button>

                <button className='login-btn'>
                    <p>Login</p>

                    <div>
                        <img src={loginIcon} alt="login icon"/>
                    </div>
                </button>
            </section>
        </>
    )

    return(
        <>
            <header>
                <nav>
                    <img className='logo' src="/logo.svg" alt="logo" />
                    {
                        isMobile ? <img src={burgerMenu} className='burgerIcon' onClick={showSideNav}/> 
                        : windowNav
                    }
                </nav>
            </header>
            
            <nav className="sideNav" ref={navRef}>
                <div>
                    <img className='logo' src="/logo.svg" alt="logo" />
                    <img src={crossIcon} alt="cross icon" onClick={closeSideNav}/>
                </div>
            </nav>
        </>
    )
}