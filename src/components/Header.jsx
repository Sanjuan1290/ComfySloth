
import { useState } from 'react'
import cartIcon from '../assets/cartIcon.png'
import loginIcon from '../assets/loginIcon.png'
import burgerMenu from '../assets/burgerMenu.ico'
import { useEffect } from 'react'
import { useRef } from 'react'

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

    function handleBurgerMenuClick(e){        
        if(navRef.current.className === 'showMenu') navRef.current.className = ''
        else navRef.current.className = 'showMenu'
    }

    const windowNav = (
        <> 
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
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
                        <img src={loginIcon} alt="login icon" />
                    </div>
                </button>
            </section>
        </>
    )

    return(
        <header>
            <nav ref={navRef}>
                <img className='logo' src="/logo.svg" alt="logo" />

                {
                    isMobile ? <img src={burgerMenu} alt='burger icon' className='burgerIcon' onClick={handleBurgerMenuClick}/>: windowNav 
                }
            </nav>
        </header>
    )
}