
import cartIcon from '../assets/cartIcon.png'
import loginIcon from '../assets/loginIcon.png'
import burgerMenu from '../assets/burgerMenu.ico'
import crossIcon from '../assets/crossIcon.png'

import { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Header({ isMobile, 
                                setIsMobile, 
                                cartItems, 
                                isLoggedIn, 
                                setIsLoggedIn }){

const [showNav, setShowNav] = useState(false)
const navRef = useRef()
const navigateTo = useNavigate()

const totalQuantity = cartItems.reduce((currentValue, item) => currentValue + item.quantity, 0)

useEffect(()=>{
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 990)
    }
    
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
}, [])


function showSideNav(){
    setShowNav(true)
}
function closeSideNav(){
    setShowNav(false)
}

function logout(){
    localStorage.setItem('isLoggedIn', false)
    setIsLoggedIn(false)
    navigateTo('/products')
}

const nav = (
    <> 
        <ul>
            <li><NavLink to='/' className={({isActive}) => isActive ? 'nav_Active' : ''}>Home</NavLink></li>
            <li><NavLink to='/about' className={({isActive}) => isActive ? 'nav_Active' : ''}>About</NavLink></li>
            <li><NavLink to='/products' className={({isActive}) => isActive ? 'nav_Active' : ''}>Products</NavLink></li>
        </ul>

        <section className="cart-login-section">
            <NavLink to='/cart' className="cart-btn">
                <p>Cart</p>

                <div>
                    <img src={cartIcon} alt="cart icon" />
                    <p className='totalQuantity'>{totalQuantity}</p>
                </div>
            </NavLink>

            {
                isLoggedIn ? <button onClick={logout}>Logout</button> :
                        <NavLink to='/login' className='login-btn'>
                            <p>Login</p>

                            <div>
                                <img src={loginIcon} alt="login icon"/>
                            </div>
                        </NavLink>
            }

            
        </section>
    </>
)

return(
    <>
        <header>
            <nav className='windowNav'>
                <NavLink to='/'><img className='logo' src="/logo.svg" alt="logo" /></NavLink>
                {
                    isMobile ? <img src={burgerMenu} className='burgerIcon' onClick={showSideNav}/> 
                    : nav
                }
            </nav>
        </header>
        
        <nav className={`mobileNav ${isMobile && showNav ? 'showSideNav' : ''}`} ref={navRef}>
            <div>
                <NavLink to='/'><img className='logo' src="/logo.svg" alt="logo" /></NavLink>
                <img src={crossIcon} alt="cross icon" onClick={closeSideNav} className='crossIcon'/>
            </div>

            {nav}
        </nav>
    </>
)
}