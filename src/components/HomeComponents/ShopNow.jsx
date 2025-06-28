import { NavLink, useOutletContext } from "react-router-dom"

export default function ShopNow(){

    const { isMobile, setIsMobile } = useOutletContext()

    return(
        <section className='shopNow_Section'>
            <div className="left">
                <h1>Design Your Comfort Zone</h1>
                
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>

                <NavLink to='/products'>SHOP NOW</NavLink>
            </div>

            
            {
                !isMobile && <div className="right">
                                <div></div>
                                <div>
                                    <img src="/HomeImages/ShopNowImage/niceTable.png" alt="nice table" />
                                    <img src="/HomeImages/ShopNowImage/personWorking.png" alt="person working" />
                                </div>
                            </div> 
            }
        </section>
    )
}